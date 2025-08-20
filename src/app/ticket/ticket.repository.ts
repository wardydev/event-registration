// Path: src/app/ticket/ticket.repository.ts
// Enhanced Ticket database operations - Added QR code path management
// Issues resolved: QR code path storage and retrieval functions

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

// ✅ NEW: Update QR code path in database
export const updateQRCodePath = async (
	qrCode: string,
	qrCodePath: string,
): Promise<Registration | null> => {
	try {
		console.log(`Updating QR code path for ${qrCode}: ${qrCodePath}`)

		return await prisma.registration.update({
			where: { qrCode },
			data: {
				qrCodePath,
			},
		})
	} catch (error) {
		console.error('Error updating QR code path:', error)
		throw error
	}
}

// ✅ NEW: Get existing QR code path from database
export const getQRCodePath = async (qrCode: string): Promise<string | null> => {
	try {
		const registration = await prisma.registration.findUnique({
			where: { qrCode },
			select: {
				qrCodePath: true,
			},
		})

		return registration?.qrCodePath ?? null
	} catch (error) {
		console.error('Error getting QR code path:', error)
		throw error
	}
}

// ✅ NEW: Check if QR code path exists in database
export const hasQRCodePath = async (qrCode: string): Promise<boolean> => {
	try {
		const registration = await prisma.registration.findUnique({
			where: { qrCode },
			select: {
				qrCodePath: true,
			},
		})

		return Boolean(registration?.qrCodePath)
	} catch (error) {
		console.error('Error checking QR code path existence:', error)
		return false
	}
}

// ✅ NEW: Get tickets without QR code paths (for migration)
export const getTicketsWithoutQRPath = async (): Promise<Registration[]> => {
	try {
		return await prisma.registration.findMany({
			where: {
				OR: [{ qrCodePath: null }, { qrCodePath: '' }],
			},
		})
	} catch (error) {
		console.error('Error getting tickets without QR path:', error)
		throw error
	}
}

// ✅ ENHANCED: Get ticket stats with QR code generation status
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

		// ✅ NEW: QR code generation stats
		const qrGeneratedCount = await prisma.registration.count({
			where: {
				qrCodePath: {
					not: null,
				},
			},
		})

		const qrPendingCount = await prisma.registration.count({
			where: {
				OR: [{ qrCodePath: null }, { qrCodePath: '' }],
			},
		})

		return {
			stats,
			totalRevenue: Number(totalRevenue._sum.ticketPrice) || 0,
			checkInCount,
			qrGeneratedCount,
			qrPendingCount,
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

// ✅ NEW: Bulk update QR code paths (for migration/batch operations)
export const bulkUpdateQRCodePaths = async (
	updates: Array<{ qrCode: string; qrCodePath: string }>,
): Promise<{ success: number; failed: number }> => {
	let success = 0
	let failed = 0

	for (const update of updates) {
		try {
			await updateQRCodePath(update.qrCode, update.qrCodePath)
			success++
		} catch (error) {
			console.error(`Failed to update QR path for ${update.qrCode}:`, error)
			failed++
		}
	}

	console.log(
		`Bulk QR path update completed: ${success} success, ${failed} failed`,
	)
	return { success, failed }
}
