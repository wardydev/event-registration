// Path: src/app/payment/payment.service.ts
// Payment business logic

import fs from 'fs'
import path from 'path'

import sharp from 'sharp'

import { ERROR_CODE } from '../../interface'
import { type MulterFile } from '../../interface'
import { AppError } from '../../middleware'

import {
	paymentUploadDTOMapper,
	whatsAppLinkDTOMapper,
	paymentStatusDTOMapper,
} from './payment.mapper'
import * as paymentRepository from './payment.repository'

export const uploadPaymentProof = async (
	registrationId: number,
	file: MulterFile,
) => {
	try {
		// Check if registration exists
		const registrationExists =
			await paymentRepository.checkRegistrationExists(registrationId)

		if (!registrationExists) {
			return new AppError(
				ERROR_CODE.NOT_FOUND.code,
				'Data pendaftaran tidak ditemukan',
			)
		}

		// Validate file
		if (!file) {
			return new AppError(
				ERROR_CODE.BAD_REQUEST.code,
				'File bukti pembayaran harus diupload',
			)
		}

		// Generate unique filename
		const fileName = generateFileName(registrationId, file.originalname)
		const uploadDir = path.join(process.cwd(), 'uploads', 'payments')
		const filePath = path.join(uploadDir, fileName)

		// Ensure upload directory exists
		if (!fs.existsSync(uploadDir)) {
			fs.mkdirSync(uploadDir, { recursive: true })
		}

		// Process and save image
		await sharp(file.buffer)
			.resize(1024, 1024, {
				fit: 'inside',
				withoutEnlargement: true,
			})
			.jpeg({ quality: 85 })
			.toFile(filePath)

		// Update database
		const relativePath = path.join('uploads', 'payments', fileName)
		const updatedRegistration = await paymentRepository.updatePaymentProof(
			registrationId,
			relativePath,
		)

		if (!updatedRegistration) {
			// Cleanup file if database update fails
			if (fs.existsSync(filePath)) {
				fs.unlinkSync(filePath)
			}

			return new AppError(
				ERROR_CODE.INTERNAL_SERVER_ERROR.code,
				'Gagal menyimpan data pembayaran',
			)
		}

		return paymentUploadDTOMapper(updatedRegistration, fileName, file.size)
	} catch (error) {
		console.error('Error uploading payment proof:', error)
		return new AppError(
			ERROR_CODE.INTERNAL_SERVER_ERROR.code,
			'Gagal mengupload bukti pembayaran',
		)
	}
}

export const generateWhatsAppLink = async (registrationId: number) => {
	try {
		// Get registration with user data
		const registration =
			await paymentRepository.getRegistrationWithUser(registrationId)

		if (!registration) {
			return new AppError(
				ERROR_CODE.NOT_FOUND.code,
				'Data pendaftaran tidak ditemukan',
			)
		}

		return whatsAppLinkDTOMapper(registration)
	} catch (error) {
		console.error('Error generating WhatsApp link:', error)
		return new AppError(
			ERROR_CODE.INTERNAL_SERVER_ERROR.code,
			'Gagal membuat link WhatsApp',
		)
	}
}

export const getPaymentStatus = async (registrationId: number) => {
	try {
		const registration =
			await paymentRepository.getPaymentStatus(registrationId)

		if (!registration) {
			return new AppError(
				ERROR_CODE.NOT_FOUND.code,
				'Data pendaftaran tidak ditemukan',
			)
		}

		return paymentStatusDTOMapper(registration)
	} catch (error) {
		console.error('Error getting payment status:', error)
		return new AppError(
			ERROR_CODE.INTERNAL_SERVER_ERROR.code,
			'Gagal mengambil status pembayaran',
		)
	}
}

// Helper function to generate unique filename
const generateFileName = (
	registrationId: number,
	originalName: string,
): string => {
	const timestamp = Date.now()
	const extension = path.extname(originalName)
	return `payment-${registrationId}-${timestamp}${extension}`
}
