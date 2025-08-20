// Path: src/app/payment/payment.dto.ts
// Payment Data Transfer Objects

export interface PaymentUploadDTO {
	registrationId: number
	fileName: string
	filePath: string
	fileSize: number
	uploadedAt: string
	message: string
}

export interface WhatsAppLinkDTO {
	whatsappUrl: string
	message: string
	phoneNumber: string
	participantName: string
}

export interface PaymentStatusDTO {
	registrationId: number
	paymentStatus: 'PENDING' | 'VERIFIED' | 'REJECTED'
	paymentProofPath?: string
	uploadedAt?: string
	verifiedAt?: string
	rejectionReason?: string
}
