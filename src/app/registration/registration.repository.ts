// Path: src/app/registration/registration.repository.ts

import {
	type TicketType,
	PrismaClient,
	type Registration,
	type User,
} from '../../prisma/client'
const prisma = new PrismaClient()

export interface CreateRegistrationData {
	name: string
	email: string
	phone: string
	city?: string
	ticketType: TicketType
}

export const createRegistration = async (
	data: CreateRegistrationData,
): Promise<Registration & { user: User }> => {
	// Get ticket price based on type
	const ticketPrice = data.ticketType === 'VIP' ? 300000 : 200000

	// Generate unique QR code
	const qrCode = generateQRCode()

	// Create user and registration in transaction
	const result = await prisma.$transaction(async (tx) => {
		// Create or find user
		let user = await tx.user.findUnique({
			where: { email: data.email },
		})

		if (!user) {
			user = await tx.user.create({
				data: {
					name: data.name,
					email: data.email,
					phone: data.phone,
					city: data.city ?? null,
				},
			})
		}

		// Create registration
		const registration = await tx.registration.create({
			data: {
				userId: user.id,
				ticketType: data.ticketType,
				ticketPrice,
				qrCode,
				paymentStatus: 'PENDING',
			},
			include: {
				user: true,
			},
		})

		return registration
	})

	return result
}

export const getRegistrationByQRCode = async (
	qrCode: string,
): Promise<(Registration & { user: User }) | null> => {
	return await prisma.registration.findUnique({
		where: { qrCode },
		include: {
			user: true,
		},
	})
}

export const getRegistrationById = async (
	id: number,
): Promise<(Registration & { user: User }) | null> => {
	return await prisma.registration.findUnique({
		where: { id },
		include: {
			user: true,
		},
	})
}

export const checkEmailExists = async (email: string): Promise<boolean> => {
	const user = await prisma.user.findUnique({
		where: { email },
		include: {
			registrations: true,
		},
	})

	return user !== null && user.registrations.length > 0
}

// Helper function to generate unique QR code
const generateQRCode = (): string => {
	const timestamp = Date.now().toString(36)
	const randomStr = Math.random().toString(36).substring(2, 8)
	return `BJ-${timestamp}-${randomStr}`.toUpperCase()
}
