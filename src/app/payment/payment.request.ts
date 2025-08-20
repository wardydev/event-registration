// Path: src/app/payment/payment.request.ts
// Payment request validation schemas

import Joi from 'joi'

export const uploadPaymentSchema = Joi.object({
	registrationId: Joi.number().integer().positive().required().messages({
		'number.base': 'ID Registrasi harus berupa angka',
		'number.integer': 'ID Registrasi harus berupa angka bulat',
		'number.positive': 'ID Registrasi harus bernilai positif',
		'any.required': 'ID Registrasi harus diisi',
	}),
})

export const generateWhatsAppLinkSchema = Joi.object({
	registrationId: Joi.number().integer().positive().required().messages({
		'number.base': 'ID Registrasi harus berupa angka',
		'number.integer': 'ID Registrasi harus berupa angka bulat',
		'number.positive': 'ID Registrasi harus bernilai positif',
		'any.required': 'ID Registrasi harus diisi',
	}),
})

// File validation schema for multer
export const fileValidationSchema = {
	fileFilter: (req: any, file: any, cb: any) => {
		// Accept only jpeg, jpg, png
		const allowedMimes = ['image/jpeg', 'image/jpg', 'image/png']

		if (allowedMimes.includes(file.mimetype)) {
			cb(null, true)
		} else {
			cb(
				new Error('Format file tidak didukung. Gunakan JPG, JPEG, atau PNG'),
				false,
			)
		}
	},
	limits: {
		fileSize: 5 * 1024 * 1024, // 5MB max file size
		files: 1, // Only 1 file allowed
	},
}
