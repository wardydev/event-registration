// Path: src/app/ticket/ticket.service.ts
// Ticket business logic

import { ERROR_CODE } from '../../interface'
import { AppError } from '../../middleware'
import {
	generateQRCodeImage,
	validateQRCodeText,
} from '../utils/qrcode.service'

import {
	ticketDTOMapper,
	ticketValidationDTOMapper,
	ticketPricesDTOMapper,
	qrCodeDTOMapper,
} from './ticket.mapper'
import * as ticketRepository from './ticket.repository'

export const getTicket = async (qrCode: string) => {
	try {
		// Validate QR code format
		if (!validateQRCodeText(qrCode)) {
			return new AppError(
				ERROR_CODE.BAD_REQUEST.code,
				'Format QR Code tidak valid',
			)
		}

		// Get ticket data
		const ticket = await ticketRepository.getTicketByQRCode(qrCode)

		if (!ticket) {
			return new AppError(ERROR_CODE.NOT_FOUND.code, 'Tiket tidak ditemukan')
		}

		// Generate QR code image if not exists
		let qrCodeImageUrl = ''
		try {
			qrCodeImageUrl = await generateQRCodeImage(qrCode, {
				format: 'PNG',
				size: 300,
				errorCorrectionLevel: 'M',
			})
		} catch (error) {
			console.error('Error generating QR code image:', error)
			// Continue without QR image if generation fails
		}

		return ticketDTOMapper(ticket, qrCodeImageUrl)
	} catch (error) {
		console.error('Error getting ticket:', error)
		return new AppError(
			ERROR_CODE.INTERNAL_SERVER_ERROR.code,
			'Gagal mengambil data tiket',
		)
	}
}

export const validateTicket = async (qrCode: string) => {
	try {
		// Validate QR code format
		if (!validateQRCodeText(qrCode)) {
			return new AppError(
				ERROR_CODE.BAD_REQUEST.code,
				'Format QR Code tidak valid',
			)
		}

		// Get ticket data for validation
		const ticket = await ticketRepository.validateTicketForCheckIn(qrCode)

		if (!ticket) {
			return new AppError(
				ERROR_CODE.NOT_FOUND.code,
				'Tiket tidak ditemukan atau belum diverifikasi',
			)
		}

		return ticketValidationDTOMapper(ticket)
	} catch (error) {
		console.error('Error validating ticket:', error)
		return new AppError(
			ERROR_CODE.INTERNAL_SERVER_ERROR.code,
			'Gagal memvalidasi tiket',
		)
	}
}

export const getTicketPrices = async () => {
	try {
		return ticketPricesDTOMapper()
	} catch (error) {
		console.error('Error getting ticket prices:', error)
		return new AppError(
			ERROR_CODE.INTERNAL_SERVER_ERROR.code,
			'Gagal mengambil data harga tiket',
		)
	}
}

export const generateQRCode = async (
	qrCode: string,
	format: 'PNG' | 'SVG' = 'PNG',
	size: number = 300,
) => {
	try {
		// Validate QR code format
		if (!validateQRCodeText(qrCode)) {
			return new AppError(
				ERROR_CODE.BAD_REQUEST.code,
				'Format QR Code tidak valid',
			)
		}

		// Generate QR code image
		const imageUrl = await generateQRCodeImage(qrCode, {
			format,
			size,
			errorCorrectionLevel: 'M',
		})

		return qrCodeDTOMapper(qrCode, imageUrl, format, size)
	} catch (error) {
		console.error('Error generating QR code:', error)
		return new AppError(
			ERROR_CODE.INTERNAL_SERVER_ERROR.code,
			'Gagal membuat QR Code',
		)
	}
}

export const markTicketAsUsed = async (qrCode: string, adminId: number) => {
	try {
		// Validate ticket first
		const validationResult = await validateTicket(qrCode)

		if (validationResult instanceof AppError) {
			return validationResult
		}

		if (!validationResult.isValid) {
			return new AppError(ERROR_CODE.BAD_REQUEST.code, validationResult.message)
		}

		// Mark ticket as used
		const updatedTicket = await ticketRepository.markTicketAsUsed(
			qrCode,
			adminId,
		)

		if (!updatedTicket) {
			return new AppError(
				ERROR_CODE.INTERNAL_SERVER_ERROR.code,
				'Gagal menandai tiket sebagai digunakan',
			)
		}

		return {
			success: true,
			message: 'Check-in berhasil',
			ticketId: `TKT-${updatedTicket.id.toString().padStart(6, '0')}`,
			checkedInAt: updatedTicket.checkedInAt?.toISOString(),
		}
	} catch (error) {
		console.error('Error marking ticket as used:', error)
		return new AppError(
			ERROR_CODE.INTERNAL_SERVER_ERROR.code,
			'Gagal melakukan check-in',
		)
	}
}

export const getTicketStats = async () => {
	try {
		const stats = await ticketRepository.getTicketStats()
		return stats
	} catch (error) {
		console.error('Error getting ticket stats:', error)
		return new AppError(
			ERROR_CODE.INTERNAL_SERVER_ERROR.code,
			'Gagal mengambil statistik tiket',
		)
	}
}
