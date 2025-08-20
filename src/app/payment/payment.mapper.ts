// Path: src/app/payment/payment.mapper.ts
// Payment data transformation mappers

import { type Registration, type User } from '../../prisma/client'

import {
	type PaymentUploadDTO,
	type WhatsAppLinkDTO,
	type PaymentStatusDTO,
} from './payment.dto'

export const paymentUploadDTOMapper = (
	registration: Registration,
	fileName: string,
	fileSize: number,
): PaymentUploadDTO => {
	return {
		registrationId: registration.id,
		fileName,
		filePath: registration.paymentProofPath ?? '',
		fileSize,
		uploadedAt: new Date().toISOString(),
		message: 'Bukti pembayaran berhasil diupload. Menunggu verifikasi admin.',
	}
}

export const whatsAppLinkDTOMapper = (
	registration: Registration & { user: User },
): WhatsAppLinkDTO => {
	const ticketInfo =
		registration.ticketType === 'VIP'
			? 'VIP (Rp 300,000)'
			: 'Regular (Rp 200,000)'

	const message = `Halo Admin, saya ingin mengirim bukti pembayaran untuk:

📝 Nama: ${registration.user.name}
📧 Email: ${registration.user.email}
📱 Phone: ${registration.user.phone}
🎫 Tipe Tiket: ${ticketInfo}
🔖 ID Registrasi: ${registration.id}

Mohon diverifikasi. Terima kasih!`

	// WhatsApp admin number - should be moved to config
	const adminWhatsApp = '6281234567890'
	const encodedMessage = encodeURIComponent(message)
	const whatsappUrl = `https://wa.me/${adminWhatsApp}?text=${encodedMessage}`

	return {
		whatsappUrl,
		message,
		phoneNumber: adminWhatsApp,
		participantName: registration.user.name,
	}
}

export const paymentStatusDTOMapper = (
	registration: Registration,
): PaymentStatusDTO => {
	return {
		registrationId: registration.id,
		paymentStatus: registration.paymentStatus,
		paymentProofPath: registration.paymentProofPath ?? undefined,
		uploadedAt: registration.paymentProofPath
			? registration.registrationDate.toISOString()
			: undefined,
		verifiedAt: registration.paymentVerifiedAt?.toISOString(),
		rejectionReason: registration.rejectionReason ?? undefined,
	}
}
