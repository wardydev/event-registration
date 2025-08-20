// Path: src/app/ticket/ticket.route.ts
// Ticket route definitions - Updated for URL QR format support

import { Router } from 'express'

import { catchAsync } from '../../utils'

import {
	getTicket,
	validateTicket,
	getTicketPrices,
	generateQRCode,
	markTicketAsUsed,
	getTicketStats,
	getTicketFrontendURL,
} from './ticket.controller'

const route = Router()

// GET /api/ticket/prices - Get ticket prices
route.get('/prices', catchAsync(getTicketPrices))

// GET /api/ticket/stats - Get ticket statistics (for admin)
route.get('/stats', catchAsync(getTicketStats))

// ✅ NEW: GET /api/ticket/:qrCode/url - Get frontend URL for QR code
route.get('/:qrCode/url', catchAsync(getTicketFrontendURL))

// GET /api/ticket/:qrCode - Get ticket by QR code (supports both text and URL format)
route.get('/:qrCode', catchAsync(getTicket))

// GET /api/ticket/:qrCode/validate - Validate ticket for check-in (supports URL format)
route.get('/:qrCode/validate', catchAsync(validateTicket))

// GET /api/ticket/:qrCode/qr - Generate QR code image (URL format)
route.get('/:qrCode/qr', catchAsync(generateQRCode))

// POST /api/ticket/:qrCode/checkin - Mark ticket as used (supports URL format)
route.post('/:qrCode/checkin', catchAsync(markTicketAsUsed))

export default route
