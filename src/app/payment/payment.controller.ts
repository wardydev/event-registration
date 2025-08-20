// Path: src/app/payment/payment.controller.ts
// Payment HTTP request handlers

import { type NextFunction, type Request, type Response } from 'express'

import { AppError } from '../../middleware'
import { ResponseHandler } from '../../utils'

import * as paymentService from './payment.service'

export const uploadPaymentProof = async (
	req: Request,
	res: Response,
	next: NextFunction,
) => {
	try {
		const { registrationId } = req.body
		const file = req.file

		if (!file) {
			next(new AppError('BAD_REQUEST', 'File bukti pembayaran harus diupload'))
			return
		}

		const result = await paymentService.uploadPaymentProof(
			Number(registrationId),
			file as any,
		)

		if (result instanceof AppError) {
			next(result)
			return
		}

		ResponseHandler.ok(res, result, 'Bukti pembayaran berhasil diupload')
	} catch (error) {
		console.error('Error in uploadPaymentProof controller:', error)
		next(new AppError('INTERNAL_SERVER_ERROR', 'Terjadi kesalahan sistem'))
	}
}

export const generateWhatsAppLink = async (
	req: Request,
	res: Response,
	next: NextFunction,
) => {
	try {
		const { registrationId } = req.body

		const result = await paymentService.generateWhatsAppLink(
			Number(registrationId),
		)

		if (result instanceof AppError) {
			next(result)
			return
		}

		ResponseHandler.ok(res, result, 'Link WhatsApp berhasil dibuat')
	} catch (error) {
		console.error('Error in generateWhatsAppLink controller:', error)
		next(new AppError('INTERNAL_SERVER_ERROR', 'Terjadi kesalahan sistem'))
	}
}

export const getPaymentStatus = async (
	req: Request,
	res: Response,
	next: NextFunction,
) => {
	try {
		const { registrationId } = req.params

		const result = await paymentService.getPaymentStatus(Number(registrationId))

		if (result instanceof AppError) {
			next(result)
			return
		}

		ResponseHandler.ok(res, result, 'Status pembayaran berhasil ditemukan')
	} catch (error) {
		console.error('Error in getPaymentStatus controller:', error)
		next(new AppError('INTERNAL_SERVER_ERROR', 'Terjadi kesalahan sistem'))
	}
}
