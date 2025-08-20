// Path: src/app/payment/payment.repository.ts
// Payment database operations

import { type Registration, type User, PrismaClient } from '../../prisma/client'

const prisma = new PrismaClient()

export const updatePaymentProof = async (
	registrationId: number,
	paymentProofPath: string,
): Promise<Registration | null> => {
	try {
		const updatedRegistration = await prisma.registration.update({
			where: { id: registrationId },
			data: {
				paymentProofPath,
				paymentStatus: 'PENDING', // Reset to pending when new proof uploaded
			},
		})

		return updatedRegistration
	} catch (error) {
		console.error('Error updating payment proof:', error)
		throw error
	}
}

export const getRegistrationWithUser = async (
	registrationId: number,
): Promise<(Registration & { user: User }) | null> => {
	try {
		return await prisma.registration.findUnique({
			where: { id: registrationId },
			include: {
				user: true,
			},
		})
	} catch (error) {
		console.error('Error getting registration with user:', error)
		throw error
	}
}

export const checkRegistrationExists = async (
	registrationId: number,
): Promise<boolean> => {
	try {
		const registration = await prisma.registration.findUnique({
			where: { id: registrationId },
			select: { id: true },
		})

		return registration !== null
	} catch (error) {
		console.error('Error checking registration exists:', error)
		throw error
	}
}

export const getPaymentStatus = async (
	registrationId: number,
): Promise<Registration | null> => {
	return await prisma.registration.findUnique({
		where: { id: registrationId },
	})
}
