// Path: src/app/ticket/ticket.controller.ts
// Ticket HTTP request handlers - Updated for URL QR format support

import { type NextFunction, type Request, type Response } from 'express'

import { AppError } from '../../middleware'
import { ResponseHandler } from '../../utils'

import * as ticketService from './ticket.service'

export const getTicket = async (
	req: Request,
	res: Response,
	next: NextFunction,
) => {
	try {
		const { qrCode } = req.params

		const result = await ticketService.getTicket(qrCode)

		if (result instanceof AppError) {
			next(result)
			return
		}

		ResponseHandler.ok(res, result, 'Data tiket berhasil ditemukan')
	} catch (error) {
		console.error('Error in getTicket controller:', error)
		next(new AppError('INTERNAL_SERVER_ERROR', 'Terjadi kesalahan sistem'))
	}
}

export const validateTicket = async (
	req: Request,
	res: Response,
	next: NextFunction,
) => {
	try {
		const { qrCode } = req.params

		const result = await ticketService.validateTicket(qrCode)

		if (result instanceof AppError) {
			next(result)
			return
		}

		ResponseHandler.ok(res, result, 'Validasi tiket berhasil')
	} catch (error) {
		console.error('Error in validateTicket controller:', error)
		next(new AppError('INTERNAL_SERVER_ERROR', 'Terjadi kesalahan sistem'))
	}
}

export const getTicketPrices = async (
	req: Request,
	res: Response,
	next: NextFunction,
) => {
	try {
		const result = await ticketService.getTicketPrices()

		if (result instanceof AppError) {
			next(result)
			return
		}

		ResponseHandler.ok(res, result, 'Data harga tiket berhasil ditemukan')
	} catch (error) {
		console.error('Error in getTicketPrices controller:', error)
		next(new AppError('INTERNAL_SERVER_ERROR', 'Terjadi kesalahan sistem'))
	}
}

export const generateQRCode = async (
	req: Request,
	res: Response,
	next: NextFunction,
) => {
	try {
		const { qrCode } = req.params
		const { format = 'PNG', size = 300 } = req.query

		const result = await ticketService.generateQRCode(
			qrCode,
			format as 'PNG' | 'SVG',
			Number(size),
		)

		if (result instanceof AppError) {
			next(result)
			return
		}

		ResponseHandler.ok(res, result, 'QR Code dengan format URL berhasil dibuat')
	} catch (error) {
		console.error('Error in generateQRCode controller:', error)
		next(new AppError('INTERNAL_SERVER_ERROR', 'Terjadi kesalahan sistem'))
	}
}

export const markTicketAsUsed = async (
	req: Request,
	res: Response,
	next: NextFunction,
) => {
	try {
		const { qrCode } = req.params
		const { adminId } = req.body

		const result = await ticketService.markTicketAsUsed(qrCode, Number(adminId))

		if (result instanceof AppError) {
			next(result)
			return
		}

		ResponseHandler.ok(res, result, 'Check-in berhasil dilakukan')
	} catch (error) {
		console.error('Error in markTicketAsUsed controller:', error)
		next(new AppError('INTERNAL_SERVER_ERROR', 'Terjadi kesalahan sistem'))
	}
}

export const getTicketStats = async (
	req: Request,
	res: Response,
	next: NextFunction,
) => {
	try {
		const result = await ticketService.getTicketStats()

		if (result instanceof AppError) {
			next(result)
			return
		}

		ResponseHandler.ok(res, result, 'Statistik tiket berhasil ditemukan')
	} catch (error) {
		console.error('Error in getTicketStats controller:', error)
		next(new AppError('INTERNAL_SERVER_ERROR', 'Terjadi kesalahan sistem'))
	}
}

// ✅ NEW: Get frontend URL for QR code
export const getTicketFrontendURL = async (
	req: Request,
	res: Response,
	next: NextFunction,
) => {
	try {
		const { qrCode } = req.params

		const result = await ticketService.getTicketFrontendURL(qrCode)

		if (result instanceof AppError) {
			next(result)
			return
		}

		ResponseHandler.ok(res, result, 'Frontend URL berhasil ditemukan')
	} catch (error) {
		console.error('Error in getTicketFrontendURL controller:', error)
		next(new AppError('INTERNAL_SERVER_ERROR', 'Terjadi kesalahan sistem'))
	}
}
