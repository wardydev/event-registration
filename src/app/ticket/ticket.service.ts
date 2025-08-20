// Path: src/app/ticket/ticket.service.ts
// Optimized Ticket business logic - Updated for URL QR code format
// Issues resolved: QR code generation now uses frontend URL format

import fs from 'fs'

import { ERROR_CODE } from '../../interface'
import { AppError } from '../../middleware'
import {
	generateQRCodeImage,
	validateQRCodeText,
	qrCodeFileExists,
	getQRCodeFilePath,
	getFrontendURL,
	extractQRCodeFromURL,
} from '../utils/qrcode.service'

import {
	ticketDTOMapper,
	ticketValidationDTOMapper,
	ticketPricesDTOMapper,
	qrCodeDTOMapper,
} from './ticket.mapper'
import * as ticketRepository from './ticket.repository'

// ✅ UPDATED: Main ticket retrieval with URL QR handling
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

		// ✅ UPDATED: Get or generate QR code with URL format
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

// ✅ UPDATED: Smart QR code handling with URL format
const getOrGenerateQRCode = async (qrCode: string): Promise<string> => {
	try {
		// Step 1: Check if QR path exists in database
		const existingPath = await ticketRepository.getQRCodePath(qrCode)

		if (existingPath) {
			// Step 2: Verify file still exists on disk
			const fullPath = `${process.cwd()}/${existingPath}`

			if (fs.existsSync(fullPath)) {
				console.log(`Using existing URL QR code from database: ${existingPath}`)
				return existingPath
			} else {
				console.log(
					`QR file not found on disk, regenerating with URL: ${existingPath}`,
				)
			}
		}

		// Step 3: Check if file exists with standard naming
		if (qrCodeFileExists(qrCode, 'PNG')) {
			const standardPath = getQRCodeFilePath(qrCode, 'PNG')
			console.log(
				`Using existing QR file (will regenerate with URL): ${standardPath}`,
			)

			// ✅ UPDATED: Regenerate with URL format if old format exists
			console.log(`Regenerating QR code with URL format for: ${qrCode}`)
			const newPath = await generateQRCodeImage(qrCode, {
				format: 'PNG',
				size: 300,
				errorCorrectionLevel: 'M',
			})

			// Update database with new URL format path
			await ticketRepository.updateQRCodePath(qrCode, newPath)
			return newPath
		}

		// Step 4: Generate new QR code with URL format
		console.log(`Generating new URL QR code for: ${qrCode}`)
		const newPath = await generateQRCodeImage(qrCode, {
			format: 'PNG',
			size: 300,
			errorCorrectionLevel: 'M',
		})

		// Step 5: Save path to database
		await ticketRepository.updateQRCodePath(qrCode, newPath)

		console.log(`URL QR code generated and saved: ${newPath}`)
		return newPath
	} catch (error) {
		console.error('Error in getOrGenerateQRCode:', error)

		// Fallback: return empty string rather than failing completely
		return ''
	}
}

export const validateTicket = async (qrCode: string) => {
	try {
		// ✅ UPDATED: Handle both QR code text and URL format
		let actualQRCode = qrCode

		// If input looks like a URL, extract QR code from it
		if (qrCode.includes('http') || qrCode.includes('ticket.html')) {
			const extractedQR = extractQRCodeFromURL(qrCode)
			if (extractedQR) {
				actualQRCode = extractedQR
				console.log(`Extracted QR code from URL: ${actualQRCode}`)
			}
		}

		// Validate QR code format
		if (!validateQRCodeText(actualQRCode)) {
			return new AppError(
				ERROR_CODE.BAD_REQUEST.code,
				'Format QR Code tidak valid',
			)
		}

		// Get ticket data for validation
		const ticket = await ticketRepository.validateTicketForCheckIn(actualQRCode)

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

// ✅ UPDATED: QR code generation endpoint with URL format
export const generateQRCode = async (
	qrCode: string,
	format: 'PNG' | 'SVG' = 'PNG',
	size: number = 300,
) => {
	try {
		// ✅ UPDATED: Handle both QR code text and URL format input
		let actualQRCode = qrCode

		// If input looks like a URL, extract QR code from it
		if (qrCode.includes('http') || qrCode.includes('ticket.html')) {
			const extractedQR = extractQRCodeFromURL(qrCode)
			if (extractedQR) {
				actualQRCode = extractedQR
				console.log(`Extracted QR code from URL input: ${actualQRCode}`)
			}
		}

		// Validate QR code format
		if (!validateQRCodeText(actualQRCode)) {
			return new AppError(
				ERROR_CODE.BAD_REQUEST.code,
				'Format QR Code tidak valid',
			)
		}

		// ✅ UPDATED: Always generate with URL format now
		console.log(`Generating QR code with URL format for: ${actualQRCode}`)

		// Generate new QR code with URL format
		const imageUrl = await generateQRCodeImage(actualQRCode, {
			format,
			size,
			errorCorrectionLevel: 'M',
		})

		// Save to database if it's a valid ticket QR
		const ticket = await ticketRepository.getTicketByQRCode(actualQRCode)
		if (ticket) {
			await ticketRepository.updateQRCodePath(actualQRCode, imageUrl)
		}

		// ✅ NEW: Add frontend URL info to response
		const frontendURL = getFrontendURL(actualQRCode)
		const response = qrCodeDTOMapper(actualQRCode, imageUrl, format, size)

		return {
			...response,
			frontendURL, // Include the URL that QR code contains
			qrCodeText: actualQRCode, // Include original QR code text
		}
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
		// ✅ UPDATED: Handle both QR code text and URL format
		let actualQRCode = qrCode

		// If input looks like a URL, extract QR code from it
		if (qrCode.includes('http') || qrCode.includes('ticket.html')) {
			const extractedQR = extractQRCodeFromURL(qrCode)
			if (extractedQR) {
				actualQRCode = extractedQR
				console.log(`Extracted QR code from URL for check-in: ${actualQRCode}`)
			}
		}

		// Validate ticket first
		const validationResult = await validateTicket(actualQRCode)

		if (validationResult instanceof AppError) {
			return validationResult
		}

		if (!validationResult.isValid) {
			return new AppError(ERROR_CODE.BAD_REQUEST.code, validationResult.message)
		}

		// Mark ticket as used
		const updatedTicket = await ticketRepository.markTicketAsUsed(
			actualQRCode,
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
			qrCode: actualQRCode,
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

// ✅ UPDATED: Batch QR generation for migration/maintenance with URL format
export const generateMissingQRCodes = async () => {
	try {
		console.log('Starting batch URL QR code generation for missing codes...')

		// Get all tickets without QR paths
		const ticketsWithoutQR = await ticketRepository.getTicketsWithoutQRPath()

		if (ticketsWithoutQR.length === 0) {
			return {
				success: true,
				message: 'All tickets already have URL QR codes',
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
					console.log(`Generated URL QR for ticket: ${ticket.qrCode}`)
				}
			} catch (error) {
				console.error(`Failed to generate URL QR for ${ticket.qrCode}:`, error)
				failed++
			}
		}

		return {
			success: true,
			message: `Batch URL QR generation completed`,
			processed: ticketsWithoutQR.length,
			generated,
			failed,
		}
	} catch (error) {
		console.error('Error in batch URL QR generation:', error)
		return new AppError(
			ERROR_CODE.INTERNAL_SERVER_ERROR.code,
			'Gagal melakukan batch URL QR generation',
		)
	}
}

// ✅ NEW: Get frontend URL for a QR code
export const getTicketFrontendURL = async (qrCode: string) => {
	try {
		// Validate QR code format
		if (!validateQRCodeText(qrCode)) {
			return new AppError(
				ERROR_CODE.BAD_REQUEST.code,
				'Format QR Code tidak valid',
			)
		}

		// Check if ticket exists
		const ticket = await ticketRepository.getTicketByQRCode(qrCode)
		if (!ticket) {
			return new AppError(ERROR_CODE.NOT_FOUND.code, 'Tiket tidak ditemukan')
		}

		// Return frontend URL
		const frontendURL = getFrontendURL(qrCode)

		return {
			qrCode,
			frontendURL,
			ticketId: `TKT-${ticket.id.toString().padStart(6, '0')}`,
			participantName: ticket.user?.name || 'Unknown',
		}
	} catch (error) {
		console.error('Error getting ticket frontend URL:', error)
		return new AppError(
			ERROR_CODE.INTERNAL_SERVER_ERROR.code,
			'Gagal mengambil URL frontend tiket',
		)
	}
}
