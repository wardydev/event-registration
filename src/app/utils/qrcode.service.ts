// Path: src/app/utils/qrcode.service.ts
// QR Code generation utilities

import fs from 'fs'
import path from 'path'

import QRCode from 'qrcode'

export interface QRCodeOptions {
	format?: 'PNG' | 'SVG'
	size?: number
	errorCorrectionLevel?: 'L' | 'M' | 'Q' | 'H'
	margin?: number
	color?: {
		dark?: string
		light?: string
	}
}

export const generateQRCodeImage = async (
	qrCodeText: string,
	options: QRCodeOptions = {},
): Promise<string> => {
	try {
		const {
			format = 'PNG',
			size = 300,
			errorCorrectionLevel = 'M',
			margin = 4,
			color = { dark: '#000000', light: '#FFFFFF' },
		} = options

		// Create QR directory if not exists
		const qrDir = path.join(process.cwd(), 'uploads', 'qrcodes')
		if (!fs.existsSync(qrDir)) {
			fs.mkdirSync(qrDir, { recursive: true })
		}

		// Generate unique filename
		const timestamp = Date.now()
		const fileName = `qr-${qrCodeText.replace(/[^a-zA-Z0-9]/g, '_')}-${timestamp}.${format.toLowerCase()}`
		const filePath = path.join(qrDir, fileName)

		// QR Code generation options
		const qrOptions = {
			width: size,
			margin,
			color,
			errorCorrectionLevel,
		}

		if (format === 'PNG') {
			await QRCode.toFile(filePath, qrCodeText, qrOptions)
		} else if (format === 'SVG') {
			const svgString = await QRCode.toString(qrCodeText, {
				...qrOptions,
				type: 'svg',
			})
			fs.writeFileSync(filePath, svgString)
		}

		// Return relative path for web access
		return path.join('uploads', 'qrcodes', fileName)
	} catch (error) {
		console.error('Error generating QR code:', error)
		throw new Error('Failed to generate QR code image')
	}
}

export const generateQRCodeDataURL = async (
	qrCodeText: string,
	options: QRCodeOptions = {},
): Promise<string> => {
	try {
		const {
			size = 300,
			errorCorrectionLevel = 'M',
			margin = 4,
			color = { dark: '#000000', light: '#FFFFFF' },
		} = options

		const qrOptions = {
			width: size,
			margin,
			color,
			errorCorrectionLevel,
		}

		return await QRCode.toDataURL(qrCodeText, qrOptions)
	} catch (error) {
		console.error('Error generating QR code data URL:', error)
		throw new Error('Failed to generate QR code data URL')
	}
}

export const validateQRCodeText = (qrCodeText: string): boolean => {
	// Basic validation - check if QR code text is valid
	if (!qrCodeText || qrCodeText.trim().length === 0) {
		return false
	}

	// Check if it matches our QR code pattern (BJ-XXXXX-XXXXX)
	const qrPattern = /^BJ-[A-Z0-9]+-[A-Z0-9]+$/
	return qrPattern.test(qrCodeText)
}

export const cleanupOldQRCodes = async (
	maxAgeHours: number = 24,
): Promise<void> => {
	try {
		const qrDir = path.join(process.cwd(), 'uploads', 'qrcodes')

		if (!fs.existsSync(qrDir)) {
			return
		}

		const files = fs.readdirSync(qrDir)
		const maxAge = maxAgeHours * 60 * 60 * 1000 // Convert to milliseconds
		const now = Date.now()

		for (const file of files) {
			const filePath = path.join(qrDir, file)
			const stats = fs.statSync(filePath)

			if (now - stats.mtime.getTime() > maxAge) {
				fs.unlinkSync(filePath)
				console.log(`Cleaned up old QR code: ${file}`)
			}
		}
	} catch (error) {
		console.error('Error cleaning up old QR codes:', error)
	}
}
