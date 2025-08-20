// Path: src/app/payment/payment.route.ts
// Payment route definitions

import { Router } from 'express'
import multer from 'multer'

import { validateRequest } from '../../middleware'
import { catchAsync } from '../../utils'

import {
	uploadPaymentProof,
	generateWhatsAppLink,
	getPaymentStatus,
} from './payment.controller'
import {
	uploadPaymentSchema,
	generateWhatsAppLinkSchema,
	fileValidationSchema,
} from './payment.request'

const route = Router()

// Configure multer for file upload
const upload: any = multer({
	storage: multer.memoryStorage(),
	fileFilter: fileValidationSchema.fileFilter,
	limits: fileValidationSchema.limits,
})

// POST /api/upload-payment - Upload payment proof
route.post(
	'/upload-payment',
	upload.single('paymentProof'),
	validateRequest(uploadPaymentSchema),
	catchAsync(uploadPaymentProof),
)

// POST /api/whatsapp-link - Generate WhatsApp link
route.post(
	'/whatsapp-link',
	validateRequest(generateWhatsAppLinkSchema),
	catchAsync(generateWhatsAppLink),
)

// GET /api/payment/:registrationId/status - Get payment status
route.get('/:registrationId/status', catchAsync(getPaymentStatus))

export default route
