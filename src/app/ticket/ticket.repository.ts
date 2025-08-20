// Path: src/app/ticket/ticket.repository.ts
// Ticket database operations

import { type Registration, type User, PrismaClient } from '../../prisma/client'
const prisma = new PrismaClient()

export const getTicketByQRCode = async (
	qrCode: string,
): Promise<(Registration & { user: User }) | null> => {
	try {
		return await prisma.registration.findUnique({
			where: { qrCode },
			include: {
				user: true,
			},
		})
	} catch (error) {
		console.error('Error getting ticket by QR code:', error)
		throw error
	}
}

export const getTicketById = async (
	id: number,
): Promise<(Registration & { user: User }) | null> => {
	try {
		return await prisma.registration.findUnique({
			where: { id },
			include: {
				user: true,
			},
		})
	} catch (error) {
		console.error('Error getting ticket by ID:', error)
		throw error
	}
}

export const validateTicketForCheckIn = async (
	qrCode: string,
): Promise<(Registration & { user: User }) | null> => {
	try {
		const ticket = await prisma.registration.findUnique({
			where: {
				qrCode,
				paymentStatus: 'VERIFIED', // Only verified tickets
			},
			include: {
				user: true,
			},
		})

		return ticket
	} catch (error) {
		console.error('Error validating ticket for check-in:', error)
		throw error
	}
}

export const markTicketAsUsed = async (
	qrCode: string,
	adminId: number,
): Promise<Registration | null> => {
	try {
		return await prisma.registration.update({
			where: { qrCode },
			data: {
				checkedIn: true,
				checkedInAt: new Date(),
			},
		})
	} catch (error) {
		console.error('Error marking ticket as used:', error)
		throw error
	}
}

export const getTicketStats = async () => {
	try {
		const stats = await prisma.registration.groupBy({
			by: ['ticketType', 'paymentStatus'],
			_count: {
				id: true,
			},
		})

		const totalRevenue = await prisma.registration.aggregate({
			where: {
				paymentStatus: 'VERIFIED',
			},
			_sum: {
				ticketPrice: true,
			},
		})

		const checkInCount = await prisma.registration.count({
			where: {
				checkedIn: true,
			},
		})

		return {
			stats,
			totalRevenue: Number(totalRevenue._sum.ticketPrice) || 0,
			checkInCount,
		}
	} catch (error) {
		console.error('Error getting ticket stats:', error)
		throw error
	}
}

export const getVerifiedTickets = async () => {
	try {
		return await prisma.registration.findMany({
			where: {
				paymentStatus: 'VERIFIED',
			},
			include: {
				user: true,
			},
			orderBy: {
				registrationDate: 'asc',
			},
		})
	} catch (error) {
		console.error('Error getting verified tickets:', error)
		throw error
	}
}
