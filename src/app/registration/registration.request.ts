// Path: src/app/registration/registration.request.ts
// Registration request validation schemas

import Joi from 'joi'

export const createRegistrationSchema = Joi.object({
	name: Joi.string().min(2).max(255).required().messages({
		'string.min': 'Nama minimal 2 karakter',
		'string.max': 'Nama maksimal 255 karakter',
		'any.required': 'Nama harus diisi',
	}),

	email: Joi.string().email().max(255).required().messages({
		'string.email': 'Format email tidak valid',
		'string.max': 'Email maksimal 255 karakter',
		'any.required': 'Email harus diisi',
	}),

	phone: Joi.string()
		.pattern(/^(\+62|62|0)[0-9]{9,13}$/)
		.required()
		.messages({
			'string.pattern.base':
				'Format nomor telepon tidak valid (contoh: 08123456789)',
			'any.required': 'Nomor telepon harus diisi',
		}),

	city: Joi.string().max(100).optional().allow('').messages({
		'string.max': 'Nama kota maksimal 100 karakter',
	}),

	ticketType: Joi.string().valid('REGULAR', 'VIP').required().messages({
		'any.only': 'Tipe tiket harus REGULAR atau VIP',
		'any.required': 'Tipe tiket harus dipilih',
	}),
})

export const getRegistrationStatusSchema = Joi.object({
	qrCode: Joi.string().required().messages({
		'any.required': 'QR Code harus diisi',
	}),
})
