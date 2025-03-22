import { MESSAGES } from './messages'
import * as uploadFileCloud from './upload-file-cloud'

export const validateImage = async (
	image: string,
): Promise<{ status: boolean; errorMessage: string }> => {
	const result = { status: true, errorMessage: '' }

	const splitImage = image.split('/')
	const imageName = splitImage[splitImage.length - 1]

	const existsImage = await uploadFileCloud.objectExists(imageName)
	if (!existsImage.exists) {
		result.status = false
		result.errorMessage = MESSAGES.ERROR.NOT_FOUND.IMAGE
	}

	return result
}
