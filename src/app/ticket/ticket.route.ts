// Path: src/app/ticket/ticket.route.ts
// Ticket route definitions

import { Router } from 'express'

import { catchAsync } from '../../utils'

import {
	getTicket,
	validateTicket,
	getTicketPrices,
	generateQRCode,
	markTicketAsUsed,
	getTicketStats,
} from './ticket.controller'

const route = Router()

// GET /api/ticket-prices - Get ticket prices
route.get('/prices', catchAsync(getTicketPrices))

// GET /api/ticket/stats - Get ticket statistics (for admin)
route.get('/stats', catchAsync(getTicketStats))

// GET /api/ticket/:qrCode - Get ticket by QR code
route.get('/:qrCode', catchAsync(getTicket))

// GET /api/ticket/:qrCode/validate - Validate ticket for check-in
route.get('/:qrCode/validate', catchAsync(validateTicket))

// GET /api/ticket/:qrCode/qr - Generate QR code image
route.get('/:qrCode/qr', catchAsync(generateQRCode))

// POST /api/ticket/:qrCode/checkin - Mark ticket as used (check-in)
route.post('/:qrCode/checkin', catchAsync(markTicketAsUsed))

export default route
