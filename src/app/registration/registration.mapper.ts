// Path: src/app/registration/registration.mapper.ts
// Registration data transformation mappers

import { type Registration, type User } from '../../prisma/client'

import {
	type RegistrationDTO,
	type RegistrationResponseDTO,
	type RegistrationStatusDTO,
} from './registration.dto'

export const registrationDTOMapper = (
	registration: Registration & { user: User },
): RegistrationDTO => {
	return {
		id: registration.id,
		userId: registration.userId,
		ticketType: registration.ticketType,
		ticketPrice: Number(registration.ticketPrice),
		paymentStatus: registration.paymentStatus,
		qrCode: registration.qrCode,
		registrationDate: registration.registrationDate.toISOString(),
		user: {
			name: registration.user.name,
			email: registration.user.email,
			phone: registration.user.phone,
			city: registration.user.city ?? undefined,
		},
	}
}

export const registrationResponseDTOMapper = (
	registration: Registration & { user: User },
): RegistrationResponseDTO => {
	// Bank information - could be moved to config
	const bankInfo = {
		bankName: 'Bank BRI',
		accountNumber: '1234-5678-9012-3456',
		accountName: 'Panitia Bedah Buku Lombok',
	}

	return {
		registrationId: registration.id,
		qrCode: registration.qrCode,
		ticketType: registration.ticketType,
		ticketPrice: Number(registration.ticketPrice),
		paymentInfo: {
			...bankInfo,
			amount: Number(registration.ticketPrice),
		},
		message:
			'Pendaftaran berhasil! Silakan lakukan pembayaran dan upload bukti pembayaran.',
	}
}

export const registrationStatusDTOMapper = (
	registration: Registration & { user: User },
): RegistrationStatusDTO => {
	return {
		id: registration.id,
		ticketType: registration.ticketType,
		paymentStatus: registration.paymentStatus,
		qrCode: registration.qrCode,
		registrationDate: registration.registrationDate.toISOString(),
		paymentVerifiedAt: registration.paymentVerifiedAt?.toISOString(),
		rejectionReason: registration.rejectionReason ?? undefined,
		participant: {
			name: registration.user.name,
			email: registration.user.email,
			phone: registration.user.phone,
			city: registration.user.city ?? undefined,
		},
	}
}
