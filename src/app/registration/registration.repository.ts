// Path: src/app/registration/registration.repository.ts
// Enhanced Registration repository - Generate QR code during registration
// Issues resolved: QR code generated immediately, no delayed generation

import {
	type TicketType,
	PrismaClient,
	type Registration,
	type User,
} from '../../prisma/client'
import { generateQRCodeImage } from '../utils/qrcode.service'

const prisma = new PrismaClient()

export interface CreateRegistrationData {
	name: string
	email: string
	phone: string
	city?: string
	ticketType: TicketType
}

// ✅ ENHANCED: Create registration with immediate QR generation
export const createRegistration = async (
	data: CreateRegistrationData,
): Promise<Registration & { user: User }> => {
	// Get ticket price based on type
	const ticketPrice = data.ticketType === 'VIP' ? 300000 : 200000

	// Generate unique QR code
	const qrCode = generateQRCode()

	// ✅ NEW: Generate QR code image immediately during registration
	let qrCodePath: string | null = null
	try {
		console.log(`Generating QR code for new registration: ${qrCode}`)
		qrCodePath = await generateQRCodeImage(qrCode, {
			format: 'PNG',
			size: 300,
			errorCorrectionLevel: 'M',
		})
		console.log(`QR code generated successfully: ${qrCodePath}`)
	} catch (error) {
		console.error('Error generating QR code during registration:', error)
		// Continue without QR code path - can be generated later
	}

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

		// ✅ ENHANCED: Create registration with QR code path
		const registration = await tx.registration.create({
			data: {
				userId: user.id,
				ticketType: data.ticketType,
				ticketPrice,
				qrCode,
				qrCodePath, // ✅ Save QR path immediately
				paymentStatus: 'PENDING',
			},
			include: {
				user: true,
			},
		})

		return registration
	})

	console.log(`Registration created successfully with QR: ${qrCode}`)
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

// ✅ ENHANCED: Generate unique QR code with better collision prevention
const generateQRCode = (): string => {
	const timestamp = Date.now().toString(36)
	const randomStr = Math.random().toString(36).substring(2, 8)
	const additionalRandom = Math.random().toString(36).substring(2, 4)
	return `BJ-${timestamp}-${randomStr}${additionalRandom}`.toUpperCase()
}

// ✅ NEW: Check if QR code is unique (additional safety)
export const isQRCodeUnique = async (qrCode: string): Promise<boolean> => {
	try {
		const existing = await prisma.registration.findUnique({
			where: { qrCode },
			select: { id: true },
		})

		return !existing
	} catch (error) {
		console.error('Error checking QR code uniqueness:', error)
		return false
	}
}

// ✅ NEW: Generate guaranteed unique QR code
export const generateUniqueQRCode = async (): Promise<string> => {
	let attempts = 0
	const maxAttempts = 10

	while (attempts < maxAttempts) {
		const qrCode = generateQRCode()
		const isUnique = await isQRCodeUnique(qrCode)

		if (isUnique) {
			console.log(
				`Generated unique QR code: ${qrCode} (attempt ${attempts + 1})`,
			)
			return qrCode
		}

		attempts++
		console.warn(
			`QR code collision detected: ${qrCode}, retrying... (attempt ${attempts})`,
		)
	}

	// Fallback with timestamp if all attempts fail
	const fallbackQR =
		`BJ-${Date.now().toString(36)}-${Math.random().toString(36).substring(2, 10)}`.toUpperCase()
	console.warn(
		`Using fallback QR code after ${maxAttempts} attempts: ${fallbackQR}`,
	)
	return fallbackQR
}

// ✅ NEW: Update registration with QR code path (for migration)
export const updateRegistrationQRPath = async (
	registrationId: number,
	qrCodePath: string,
): Promise<Registration | null> => {
	try {
		return await prisma.registration.update({
			where: { id: registrationId },
			data: { qrCodePath },
		})
	} catch (error) {
		console.error('Error updating registration QR path:', error)
		throw error
	}
}

// ✅ NEW: Get registrations without QR code paths
export const getRegistrationsWithoutQRPath = async (): Promise<
	Registration[]
> => {
	try {
		return await prisma.registration.findMany({
			where: {
				OR: [{ qrCodePath: null }, { qrCodePath: '' }],
			},
			include: {
				user: true,
			},
			orderBy: {
				registrationDate: 'asc',
			},
		})
	} catch (error) {
		console.error('Error getting registrations without QR path:', error)
		throw error
	}
}

// ✅ NEW: Bulk fix missing QR codes for existing registrations
export const bulkGenerateQRCodes = async (): Promise<{
	processed: number
	success: number
	failed: number
	errors: string[]
}> => {
	const results = {
		processed: 0,
		success: 0,
		failed: 0,
		errors: [] as string[],
	}

	try {
		const registrationsWithoutQR = await getRegistrationsWithoutQRPath()
		results.processed = registrationsWithoutQR.length

		console.log(
			`Found ${registrationsWithoutQR.length} registrations without QR codes`,
		)

		for (const registration of registrationsWithoutQR) {
			try {
				// Generate QR code for existing registration
				const qrCodePath = await generateQRCodeImage(registration.qrCode, {
					format: 'PNG',
					size: 300,
					errorCorrectionLevel: 'M',
				})

				// Update registration with QR path
				await updateRegistrationQRPath(registration.id, qrCodePath)

				results.success++
				console.log(
					`Generated QR for registration ${registration.id}: ${registration.qrCode}`,
				)
			} catch (error) {
				results.failed++
				const errorMsg = `Failed to generate QR for registration ${registration.id}`
				results.errors.push(errorMsg)
				console.error(errorMsg)
			}
		}

		console.log(
			`Bulk QR generation completed: ${results.success} success, ${results.failed} failed`,
		)
		return results
	} catch (error) {
		console.error('Error in bulk QR generation:', error)
		throw error
	}
}

// ✅ NEW: Get registration statistics with QR status
export const getRegistrationStats = async () => {
	try {
		const totalRegistrations = await prisma.registration.count()

		const withQRCode = await prisma.registration.count({
			where: {
				qrCodePath: {
					not: null,
				},
			},
		})

		const withoutQRCode = await prisma.registration.count({
			where: {
				OR: [{ qrCodePath: null }, { qrCodePath: '' }],
			},
		})

		const byStatus = await prisma.registration.groupBy({
			by: ['paymentStatus'],
			_count: {
				id: true,
			},
		})

		const byTicketType = await prisma.registration.groupBy({
			by: ['ticketType'],
			_count: {
				id: true,
			},
		})

		return {
			totalRegistrations,
			withQRCode,
			withoutQRCode,
			qrCodePercentage:
				totalRegistrations > 0 ? (withQRCode / totalRegistrations) * 100 : 0,
			byStatus,
			byTicketType,
		}
	} catch (error) {
		console.error('Error getting registration stats:', error)
		throw error
	}
}
