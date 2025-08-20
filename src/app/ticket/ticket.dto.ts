// Path: src/app/ticket/ticket.dto.ts
// Ticket Data Transfer Objects - Updated for URL QR format

export interface TicketDTO {
	ticketId: string
	qrCode: string
	qrCodeImageUrl: string
	ticketType: 'REGULAR' | 'VIP'
	ticketPrice: number
	paymentStatus: 'PENDING' | 'VERIFIED' | 'REJECTED'
	participant: {
		name: string
		email: string
		phone: string
		city?: string
	}
	event: {
		name: string
		date: string
		time: string
		location: string
		address: string
	}
	registrationDate: string
	paymentVerifiedAt?: string
	isValid: boolean
	registrationId: number
	// ✅ NEW: Frontend URL that QR code contains
	frontendURL: string
}

export interface TicketValidationDTO {
	isValid: boolean
	ticketId: string
	participantName: string
	ticketType: 'REGULAR' | 'VIP'
	paymentStatus: 'PENDING' | 'VERIFIED' | 'REJECTED'
	checkedIn: boolean
	checkedInAt?: string
	message: string
}

export interface TicketPricesDTO {
	regular: {
		type: 'REGULAR'
		price: number
		currency: 'IDR'
		description: string
	}
	vip: {
		type: 'VIP'
		price: number
		currency: 'IDR'
		description: string
		benefits: string[]
	}
}

export interface QRCodeDTO {
	qrCode: string
	qrCodeImageUrl: string
	format: 'PNG' | 'SVG'
	size: number
	// ✅ NEW: URL format specific fields
	frontendURL: string
	containsURL: boolean
}

// ✅ NEW: QR Code sharing DTO
export interface QRCodeSharingDTO {
	ticketId: string
	qrCode: string
	frontendURL: string
	participantName: string
	ticketType: 'REGULAR' | 'VIP'
	paymentStatus: 'PENDING' | 'VERIFIED' | 'REJECTED'
	qrCodeImageUrl?: string
	shareText: string
	socialMedia: {
		whatsapp: string
		telegram: string
		email: string
	}
}

// ✅ NEW: Frontend URL DTO
export interface FrontendURLDTO {
	qrCode: string
	frontendURL: string
	ticketId: string
	participantName: string
	isValid: boolean
}

// ✅ NEW: QR Code migration DTO
export interface QRCodeMigrationDTO {
	totalProcessed: number
	successCount: number
	failedCount: number
	urlFormatEnabled: boolean
	migratedQRCodes: Array<{
		qrCode: string
		oldFormat: string
		newFormat: string
		frontendURL: string
	}>
	errors: string[]
}
