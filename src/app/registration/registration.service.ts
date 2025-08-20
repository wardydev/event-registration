// Path: src/app/registration/registration.service.ts
// Registration business logic

import { ERROR_CODE } from '../../interface'
import { AppError } from '../../middleware'
import { type TicketType } from '../../prisma/client'

import {
	registrationResponseDTOMapper,
	registrationStatusDTOMapper,
} from './registration.mapper'
import * as registrationRepository from './registration.repository'

interface CreateRegistrationInput {
	name: string
	email: string
	phone: string
	city?: string
	ticketType: TicketType
}

export const createRegistration = async (data: CreateRegistrationInput) => {
	try {
		// Check if email already registered
		const emailExists = await registrationRepository.checkEmailExists(
			data.email,
		)

		if (emailExists) {
			return new AppError(
				ERROR_CODE.BAD_REQUEST.code,
				'Email sudah terdaftar untuk acara ini',
			)
		}

		// Normalize phone number
		const normalizedPhone = normalizePhoneNumber(data.phone)

		// Create registration
		const registration = await registrationRepository.createRegistration({
			...data,
			phone: normalizedPhone,
			city: data.city ?? undefined,
		})

		// Return success response
		return registrationResponseDTOMapper(registration)
	} catch (error) {
		console.error('Error creating registration:', error)
		return new AppError(
			ERROR_CODE.INTERNAL_SERVER_ERROR.code,
			'Gagal melakukan pendaftaran. Silakan coba lagi.',
		)
	}
}

export const getRegistrationStatus = async (qrCode: string) => {
	try {
		const registration =
			await registrationRepository.getRegistrationByQRCode(qrCode)

		if (!registration) {
			return new AppError(
				ERROR_CODE.NOT_FOUND.code,
				'Data pendaftaran tidak ditemukan',
			)
		}

		return registrationStatusDTOMapper(registration)
	} catch (error) {
		console.error('Error getting registration status:', error)
		return new AppError(
			ERROR_CODE.INTERNAL_SERVER_ERROR.code,
			'Gagal mengambil status pendaftaran',
		)
	}
}

export const getRegistrationById = async (id: number) => {
	try {
		const registration = await registrationRepository.getRegistrationById(id)

		if (!registration) {
			return new AppError(
				ERROR_CODE.NOT_FOUND.code,
				'Data pendaftaran tidak ditemukan',
			)
		}

		return registrationStatusDTOMapper(registration)
	} catch (error) {
		console.error('Error getting registration by ID:', error)
		return new AppError(
			ERROR_CODE.INTERNAL_SERVER_ERROR.code,
			'Gagal mengambil data pendaftaran',
		)
	}
}

// Helper function to normalize phone number
const normalizePhoneNumber = (phone: string): string => {
	// Remove all non-digit characters
	let normalized = phone.replace(/\D/g, '')

	// Convert +62 or 62 to 0
	if (normalized.startsWith('62')) {
		normalized = '0' + normalized.substring(2)
	}

	// Ensure starts with 0
	if (!normalized.startsWith('0')) {
		normalized = '0' + normalized
	}

	return normalized
}
