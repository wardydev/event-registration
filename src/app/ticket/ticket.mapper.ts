// Path: src/app/ticket/ticket.mapper.ts
// Ticket data transformation mappers

import { type Registration, type User } from '../../prisma/client'

import {
	type TicketDTO,
	type TicketValidationDTO,
	type TicketPricesDTO,
	type QRCodeDTO,
} from './ticket.dto'

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

	return {
		ticketId: `TKT-${registration.id.toString().padStart(6, '0')}`,
		qrCode: registration.qrCode,
		qrCodeImageUrl,
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
	}
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

export const qrCodeDTOMapper = (
	qrCode: string,
	imageUrl: string,
	format: 'PNG' | 'SVG' = 'PNG',
	size: number = 300,
): QRCodeDTO => {
	return {
		qrCode,
		qrCodeImageUrl: imageUrl,
		format,
		size,
	}
}
