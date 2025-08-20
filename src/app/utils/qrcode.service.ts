// Path: src/app/utils/qrcode.service.ts
// Fixed QR Code generation utilities - No more timestamp generation
// Issues resolved: Stop creating multiple files, use consistent filenames

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

// ✅ FIXED: Check existing file first, no more timestamp generation
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

		// ✅ FIXED: Use consistent filename without timestamp
		const cleanQrCode = qrCodeText.replace(/[^a-zA-Z0-9]/g, '_')
		const fileName = `qr-${cleanQrCode}.${format.toLowerCase()}`
		const filePath = path.join(qrDir, fileName)
		const webPath = path.join('uploads', 'qrcodes', fileName)

		// ✅ FIXED: Check if file already exists
		if (fs.existsSync(filePath)) {
			console.log(`QR code file already exists: ${fileName}`)
			return webPath
		}

		console.log(`Generating new QR code file: ${fileName}`)

		// QR Code generation options
		const qrOptions = {
			width: size,
			margin,
			color,
			errorCorrectionLevel,
		}

		// Generate QR code file
		if (format === 'PNG') {
			await QRCode.toFile(filePath, qrCodeText, qrOptions)
		} else if (format === 'SVG') {
			const svgString = await QRCode.toString(qrCodeText, {
				...qrOptions,
				type: 'svg',
			})
			fs.writeFileSync(filePath, svgString)
		}

		console.log(`QR code generated successfully: ${webPath}`)
		return webPath
	} catch (error) {
		console.error('Error generating QR code:', error)
		throw new Error('Failed to generate QR code image')
	}
}

// ✅ NEW: Function to check if QR code file exists
export const qrCodeFileExists = (
	qrCodeText: string,
	format: 'PNG' | 'SVG' = 'PNG',
): boolean => {
	try {
		const qrDir = path.join(process.cwd(), 'uploads', 'qrcodes')
		const cleanQrCode = qrCodeText.replace(/[^a-zA-Z0-9]/g, '_')
		const fileName = `qr-${cleanQrCode}.${format.toLowerCase()}`
		const filePath = path.join(qrDir, fileName)

		return fs.existsSync(filePath)
	} catch (error) {
		console.error('Error checking QR code file existence:', error)
		return false
	}
}

// ✅ NEW: Get QR code file path without generating
export const getQRCodeFilePath = (
	qrCodeText: string,
	format: 'PNG' | 'SVG' = 'PNG',
): string => {
	const cleanQrCode = qrCodeText.replace(/[^a-zA-Z0-9]/g, '_')
	const fileName = `qr-${cleanQrCode}.${format.toLowerCase()}`
	return path.join('uploads', 'qrcodes', fileName)
}

// ✅ OPTIMIZED: Generate QR code data URL (for immediate use)
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

// ✅ ENHANCED: Validate QR code text with better patterns
export const validateQRCodeText = (qrCodeText: string): boolean => {
	// Basic validation - check if QR code text is valid
	if (!qrCodeText || qrCodeText.trim().length === 0) {
		return false
	}

	// Check if it matches our QR code pattern (BJ-XXXXX-XXXXX)
	const qrPattern = /^BJ-[A-Z0-9]+-[A-Z0-9]+$/
	return qrPattern.test(qrCodeText)
}

// ✅ ENHANCED: Cleanup old QR codes (optional, for maintenance)
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

// ✅ NEW: Batch generate QR codes (for migration/bulk operations)
export const batchGenerateQRCodes = async (
	qrCodes: string[],
	options: QRCodeOptions = {},
): Promise<{ success: string[]; failed: string[] }> => {
	const results = { success: [], failed: [] }

	for (const qrCode of qrCodes) {
		try {
			await generateQRCodeImage(qrCode, options)
			results.success.push(qrCode as never)
		} catch (error) {
			console.error(`Failed to generate QR code for ${qrCode}:`, error)
			results.failed.push(qrCode as never)
		}
	}

	return results
}
