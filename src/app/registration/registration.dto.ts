// Path: src/app/registration/registration.dto.ts
// Registration Data Transfer Objects

export interface RegistrationDTO {
	id: number
	userId: number
	ticketType: 'REGULAR' | 'VIP'
	ticketPrice: number
	paymentStatus: 'PENDING' | 'VERIFIED' | 'REJECTED'
	qrCode: string
	registrationDate: string
	user: {
		name: string
		email: string
		phone: string
		city?: string
	}
}

export interface RegistrationResponseDTO {
	registrationId: number
	qrCode: string
	ticketType: 'REGULAR' | 'VIP'
	ticketPrice: number
	paymentInfo: {
		bankName: string
		accountNumber: string
		accountName: string
		amount: number
	}
	message: string
}

export interface RegistrationStatusDTO {
	id: number
	ticketType: 'REGULAR' | 'VIP'
	paymentStatus: 'PENDING' | 'VERIFIED' | 'REJECTED'
	qrCode: string
	registrationDate: string
	paymentVerifiedAt?: string
	rejectionReason?: string
	participant: {
		name: string
		email: string
		phone: string
		city?: string
	}
}
