// Path: src/app/ticket/ticket.service.ts
// Optimized Ticket business logic - Fixed QR code generation loop
// Issues resolved: Check existing QR before generating, database integration

import fs from 'fs'

import { ERROR_CODE } from '../../interface'
import { AppError } from '../../middleware'
import {
	generateQRCodeImage,
	validateQRCodeText,
	qrCodeFileExists,
	getQRCodeFilePath,
} from '../utils/qrcode.service'

import {
	ticketDTOMapper,
	ticketValidationDTOMapper,
	ticketPricesDTOMapper,
	qrCodeDTOMapper,
} from './ticket.mapper'
import * as ticketRepository from './ticket.repository'

// ✅ FIXED: Main ticket retrieval with optimized QR handling
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

		// ✅ FIXED: Get or generate QR code (no more loops!)
		const qrCodeImageUrl = await getOrGenerateQRCode(ticket.qrCode)

		return ticketDTOMapper(ticket, qrCodeImageUrl)
	} catch (error) {
		console.error('Error getting ticket:', error)
		return new AppError(
			ERROR_CODE.INTERNAL_SERVER_ERROR.code,
			'Gagal mengambil data tiket',
		)
	}
}

// ✅ NEW: Smart QR code handling - check existing first
const getOrGenerateQRCode = async (qrCode: string): Promise<string> => {
	try {
		// Step 1: Check if QR path exists in database
		const existingPath = await ticketRepository.getQRCodePath(qrCode)

		if (existingPath) {
			// Step 2: Verify file still exists on disk
			const fullPath = `${process.cwd()}/${existingPath}`

			if (fs.existsSync(fullPath)) {
				console.log(`Using existing QR code from database: ${existingPath}`)
				return existingPath
			} else {
				console.log(`QR file not found on disk, regenerating: ${existingPath}`)
			}
		}

		// Step 3: Check if file exists with standard naming
		if (qrCodeFileExists(qrCode, 'PNG')) {
			const standardPath = getQRCodeFilePath(qrCode, 'PNG')
			console.log(`Using existing QR file: ${standardPath}`)

			// Update database with found path
			await ticketRepository.updateQRCodePath(qrCode, standardPath)
			return standardPath
		}

		// Step 4: Generate new QR code
		console.log(`Generating new QR code for: ${qrCode}`)
		const newPath = await generateQRCodeImage(qrCode, {
			format: 'PNG',
			size: 300,
			errorCorrectionLevel: 'M',
		})

		// Step 5: Save path to database
		await ticketRepository.updateQRCodePath(qrCode, newPath)

		console.log(`QR code generated and saved: ${newPath}`)
		return newPath
	} catch (error) {
		console.error('Error in getOrGenerateQRCode:', error)

		// Fallback: return empty string rather than failing completely
		return ''
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

// ✅ ENHANCED: QR code generation endpoint with caching
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

		// Check if QR already exists
		if (qrCodeFileExists(qrCode, format)) {
			const existingPath = getQRCodeFilePath(qrCode, format)
			console.log(`Returning existing QR code: ${existingPath}`)
			return qrCodeDTOMapper(qrCode, existingPath, format, size)
		}

		// Generate new QR code
		const imageUrl = await generateQRCodeImage(qrCode, {
			format,
			size,
			errorCorrectionLevel: 'M',
		})

		// Save to database if it's a valid ticket QR
		const ticket = await ticketRepository.getTicketByQRCode(qrCode)
		if (ticket) {
			await ticketRepository.updateQRCodePath(qrCode, imageUrl)
		}

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

// ✅ NEW: Batch QR generation for migration/maintenance
export const generateMissingQRCodes = async () => {
	try {
		console.log('Starting batch QR code generation for missing codes...')

		// Get all tickets without QR paths
		const ticketsWithoutQR = await ticketRepository.getTicketsWithoutQRPath()

		if (ticketsWithoutQR.length === 0) {
			return {
				success: true,
				message: 'All tickets already have QR codes',
				processed: 0,
			}
		}

		let generated = 0
		let failed = 0

		for (const ticket of ticketsWithoutQR) {
			try {
				const qrPath = await getOrGenerateQRCode(ticket.qrCode)
				if (qrPath) {
					generated++
					console.log(`Generated QR for ticket: ${ticket.qrCode}`)
				}
			} catch (error) {
				console.error(`Failed to generate QR for ${ticket.qrCode}:`, error)
				failed++
			}
		}

		return {
			success: true,
			message: `Batch QR generation completed`,
			processed: ticketsWithoutQR.length,
			generated,
			failed,
		}
	} catch (error) {
		console.error('Error in batch QR generation:', error)
		return new AppError(
			ERROR_CODE.INTERNAL_SERVER_ERROR.code,
			'Gagal melakukan batch QR generation',
		)
	}
}
