// Path: src/app/ticket/ticket.request.ts
// Ticket request validation schemas

import Joi from 'joi'

export const getTicketSchema = Joi.object({
	qrCode: Joi.string().required().messages({
		'any.required': 'QR Code harus diisi',
		'string.empty': 'QR Code tidak boleh kosong',
	}),
})

export const validateTicketSchema = Joi.object({
	qrCode: Joi.string().required().messages({
		'any.required': 'QR Code harus diisi',
		'string.empty': 'QR Code tidak boleh kosong',
	}),
})

export const generateQRCodeSchema = Joi.object({
	qrCode: Joi.string().required().messages({
		'any.required': 'QR Code harus diisi',
	}),

	format: Joi.string().valid('PNG', 'SVG').default('PNG').messages({
		'any.only': 'Format harus PNG atau SVG',
	}),

	size: Joi.number().integer().min(100).max(1000).default(300).messages({
		'number.base': 'Size harus berupa angka',
		'number.integer': 'Size harus berupa angka bulat',
		'number.min': 'Size minimal 100px',
		'number.max': 'Size maksimal 1000px',
	}),
})
