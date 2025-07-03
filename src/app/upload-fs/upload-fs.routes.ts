import { Router } from 'express'

import { compressAndSaveImage, upload } from '../../utils'

import * as uploadFileController from './upload-fs.controller'

const route = Router()

route.post(
	'/',
	upload.single('file'),
	compressAndSaveImage,
	uploadFileController.uploadFileFs,
)

export default route
