// Path: src/app/ticket/ticket.mapper.ts
// Optimized Ticket data transformation mappers - Enhanced QR handling
// Issues resolved: Better QR URL handling, fallback for missing QR codes

import { type Registration, type User } from '../../prisma/client'

import {
	type TicketDTO,
	type TicketValidationDTO,
	type TicketPricesDTO,
	type QRCodeDTO,
} from './ticket.dto'

// ✅ ENHANCED: Ticket DTO mapper with improved QR handling
export const ticketDTOMapper = (
	registration: Registration & { user: User },
	qrCodeImageUrl: string,
): TicketDTO => {
	// Event information - should be moved to config or database
	const eventInfo = {
		name: 'Bedah Buku Jangan Sedih Lombok',
		date: '2025-09-15',
		time: '09:00 - 12:00 WITA',
		location: 'Masjid Islamic Center Lombok',
		address: 'Jl. Pejanggik No.1, Cakranegara, Mataram, Lombok',
	}

	// ✅ ENHANCED: Smart QR URL handling
	const processedQRUrl = processQRCodeUrl(
		qrCodeImageUrl,
		registration.qrCodePath,
	)

	return {
		ticketId: `TKT-${registration.id.toString().padStart(6, '0')}`,
		qrCode: registration.qrCode,
		qrCodeImageUrl: processedQRUrl,
		ticketType: registration.ticketType,
		ticketPrice: Number(registration.ticketPrice),
		paymentStatus: registration.paymentStatus,
		participant: {
			name: registration.user.name,
			email: registration.user.email,
			phone: registration.user.phone,
			city: registration.user.city ?? undefined,
		},
		event: eventInfo,
		registrationDate: registration.registrationDate.toISOString(),
		paymentVerifiedAt: registration.paymentVerifiedAt?.toISOString(),
		isValid: registration.paymentStatus === 'VERIFIED',
		registrationId: registration.id,
	}
}

// ✅ NEW: Process QR code URL with fallbacks and validation
const processQRCodeUrl = (
	generatedUrl: string,
	storedPath: string | null,
): string => {
	// Priority 1: Use generated URL if available and valid
	if (generatedUrl && generatedUrl.trim() !== '') {
		return formatQRUrl(generatedUrl)
	}

	// Priority 2: Use stored path from database
	if (storedPath && storedPath.trim() !== '') {
		return formatQRUrl(storedPath)
	}

	// Priority 3: Return empty string (frontend will handle gracefully)
	console.warn('No QR code URL available for ticket')
	return ''
}

// ✅ NEW: Format QR URL for consistent serving
const formatQRUrl = (url: string): string => {
	// Remove leading slash if present
	const cleanUrl = url.replace(/^\/+/, '')

	// If URL already starts with http/https, return as-is
	if (cleanUrl.startsWith('http://') || cleanUrl.startsWith('https://')) {
		return cleanUrl
	}

	// For relative paths, ensure they're properly formatted
	if (cleanUrl.startsWith('uploads/')) {
		return `/${cleanUrl}`
	}

	// Default case
	return `/${cleanUrl}`
}

export const ticketValidationDTOMapper = (
	registration: Registration & { user: User },
): TicketValidationDTO => {
	const isValid = registration.paymentStatus === 'VERIFIED'

	let message = ''
	switch (registration.paymentStatus) {
		case 'VERIFIED':
			message = registration.checkedIn
				? 'Tiket sudah pernah digunakan untuk check-in'
				: 'Tiket valid dan dapat digunakan untuk check-in'
			break
		case 'PENDING':
			message = 'Pembayaran belum diverifikasi. Tiket tidak dapat digunakan.'
			break
		case 'REJECTED':
			message = 'Pembayaran ditolak. Tiket tidak valid.'
			break
		default:
			message = 'Status tiket tidak dikenal'
	}

	return {
		isValid: isValid && !registration.checkedIn,
		ticketId: `TKT-${registration.id.toString().padStart(6, '0')}`,
		participantName: registration.user.name,
		ticketType: registration.ticketType,
		paymentStatus: registration.paymentStatus,
		checkedIn: registration.checkedIn,
		checkedInAt: registration.checkedInAt?.toISOString(),
		message,
	}
}

// ✅ ENHANCED: Ticket prices with better formatting
export const ticketPricesDTOMapper = (): TicketPricesDTO => {
	return {
		regular: {
			type: 'REGULAR',
			price: 200000,
			currency: 'IDR',
			description: 'Tiket Regular - Akses ke semua sesi acara',
		},
		vip: {
			type: 'VIP',
			price: 300000,
			currency: 'IDR',
			description: 'Tiket VIP - Akses premium dengan benefit tambahan',
			benefits: [
				'Tempat duduk prioritas',
				'Sertifikat kehadiran',
				'Buku gratis',
				'Snack & minuman',
				'Meet & greet dengan pemateri',
			],
		},
	}
}

// ✅ ENHANCED: QR Code DTO with better URL handling
export const qrCodeDTOMapper = (
	qrCode: string,
	imageUrl: string,
	format: 'PNG' | 'SVG' = 'PNG',
	size: number = 300,
): QRCodeDTO => {
	return {
		qrCode,
		qrCodeImageUrl: formatQRUrl(imageUrl),
		format,
		size,
	}
}

// ✅ NEW: Enhanced ticket list mapper (for admin views)
export const ticketListDTOMapper = (
	registrations: Array<Registration & { user: User }>,
): Array<{
	id: number
	ticketId: string
	participantName: string
	email: string
	ticketType: string
	paymentStatus: string
	hasQRCode: boolean
	registrationDate: string
	qrCode: string
}> => {
	return registrations.map((registration) => ({
		id: registration.id,
		ticketId: `TKT-${registration.id.toString().padStart(6, '0')}`,
		participantName: registration.user.name,
		email: registration.user.email,
		ticketType: registration.ticketType,
		paymentStatus: registration.paymentStatus,
		hasQRCode: Boolean(registration.qrCodePath),
		registrationDate: registration.registrationDate.toISOString(),
		qrCode: registration.qrCode,
	}))
}

// ✅ NEW: Ticket stats mapper
export const ticketStatsDTOMapper = (stats: any) => {
	return {
		...stats,
		qrCodeGenerationRate:
			stats.qrGeneratedCount &&
			stats.qrGeneratedCount + stats.qrPendingCount > 0
				? (stats.qrGeneratedCount /
						(stats.qrGeneratedCount + stats.qrPendingCount)) *
					100
				: 0,
	}
}
