import { type Request, type Response, type NextFunction } from 'express'

import { ResponseHandler } from '../../utils'

import * as uploadFileServices from './upload-fs.service'

export const uploadFileFs = async (
	req: Request,
	res: Response,
	next: NextFunction,
) => {
	const result = await uploadFileServices.uploadFileFs(req.body)
	return ResponseHandler.ok(res, result, 'File uploaded successfully')
}
