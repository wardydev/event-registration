// Path: src/app/registration/registration.controller.ts
// Registration HTTP request handlers

import { type NextFunction, type Request, type Response } from 'express'

import { AppError } from '../../middleware'
import { ResponseHandler } from '../../utils'

import * as registrationService from './registration.service'

export const createRegistration = async (
	req: Request,
	res: Response,
	next: NextFunction,
) => {
	try {
		const { name, email, phone, city, ticketType } = req.body

		const result = await registrationService.createRegistration({
			name,
			email,
			phone,
			city,
			ticketType,
		})

		if (result instanceof AppError) {
			next(result)
			return
		}

		ResponseHandler.ok(
			res,
			result,
			'Pendaftaran berhasil! Silakan lakukan pembayaran.',
		)
	} catch (error) {
		console.error('Error in createRegistration controller:', error)
		next(new AppError('INTERNAL_SERVER_ERROR', 'Terjadi kesalahan sistem'))
	}
}

export const getRegistrationStatus = async (
	req: Request,
	res: Response,
	next: NextFunction,
) => {
	try {
		const { qrCode } = req.params

		const result = await registrationService.getRegistrationStatus(qrCode)

		if (result instanceof AppError) {
			next(result)
			return
		}

		ResponseHandler.ok(res, result, 'Data pendaftaran berhasil ditemukan')
	} catch (error) {
		console.error('Error in getRegistrationStatus controller:', error)
		next(new AppError('INTERNAL_SERVER_ERROR', 'Terjadi kesalahan sistem'))
	}
}

export const getRegistrationById = async (
	req: Request,
	res: Response,
	next: NextFunction,
) => {
	try {
		const { id } = req.params

		const result = await registrationService.getRegistrationById(Number(id))

		if (result instanceof AppError) {
			next(result)
			return
		}

		ResponseHandler.ok(res, result, 'Data pendaftaran berhasil ditemukan')
	} catch (error) {
		console.error('Error in getRegistrationById controller:', error)
		next(new AppError('INTERNAL_SERVER_ERROR', 'Terjadi kesalahan sistem'))
	}
}
