import { type Request } from 'express'
import multer, { type FileFilterCallback } from 'multer'

import { ERROR_CODE } from '../interface'
import { AppError } from '../middleware'

export const FILE_TYPE_MAP: Record<string, string> = {
	'image/pdf': '.pdf',
	'image/png': '.png',
	'image/jpeg': '.jpeg',
	'image/jpg': '.jpg',
	'application/pdf': '.pdf',
}

export const fileStorage = multer.memoryStorage()

export const fileFilter = (
	request: Request,
	file: Express.Multer.File,
	callBack: FileFilterCallback,
): void => {
	if (file.mimetype !== '' && FILE_TYPE_MAP[file.mimetype]) {
		callBack(null, true)
	} else {
		callBack(null, false)
		callBack(
			new AppError(
				ERROR_CODE.BAD_REQUEST.code,
				'Tipe file tidak mendukung, tipe file harus berjenis: png, jpg, dan jpeg',
			),
		)
	}
}
