import fs from 'fs'
import path from 'path'

import { type NextFunction, type Response, type Request } from 'express'
import multer from 'multer'
import sharp from 'sharp'

import { ERROR_CODE } from '../interface'
import { AppError } from '../middleware'

export const compressAndSaveImage = async (
	req: Request,
	res: Response,
	next: NextFunction,
) => {
	if (!req.file) {
		next(
			new AppError(
				ERROR_CODE.BAD_REQUEST.code,
				'Gambar contoh wajib diunggah.',
			),
		)
		return
	}

	try {
		const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9)
		const filename = `template-${uniqueSuffix}.webp`
		const uploadsDir = 'uploads'
		if (!fs.existsSync(uploadsDir)) {
			fs.mkdirSync(uploadsDir)
		}
		const outputPath = path.join(uploadsDir, filename)

		await sharp(req.file.buffer)
			.resize(1280, 720, { fit: 'inside' })
			.webp({ quality: 80 })
			.toFile(outputPath)

		req.body.filename = `/${outputPath}`

		next()
	} catch (error) {
		console.error('Error compressing image:', error)
		next(
			new AppError(
				ERROR_CODE.INTERNAL_SERVER_ERROR.code,
				'Gagal memproses gambar.',
			),
		)
	}
}

const storage = multer.memoryStorage()
export const upload: any = multer({
	storage,
	limits: { fileSize: 5 * 1024 * 1024 },
	fileFilter: (req, file, cb) => {
		if (file.mimetype.startsWith('image/')) {
			cb(null, true)
		} else {
			cb(new Error('Hanya file gambar yang diizinkan!'))
		}
	},
})
