// Path: src/app/ticket/ticket.dto.ts
// Ticket Data Transfer Objects

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
}
