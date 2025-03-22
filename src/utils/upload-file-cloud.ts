import {
	CopyObjectCommand,
	DeleteObjectCommand,
	HeadObjectCommand,
	PutObjectCommand,
	S3,
} from '@aws-sdk/client-s3'

import { config } from './config'

const s3Client = new S3({
	forcePathStyle: true,
	endpoint: config.digitaloceanSpace.endpoint,
	credentials: {
		accessKeyId: config.digitaloceanSpace.accessKey,
		secretAccessKey: config.digitaloceanSpace.secretAccessKey,
	},
	region: config.digitaloceanSpace.region,
})

interface ParamsObject {
	Bucket: string
	Key: string
	Body: Buffer
	ACL: any
	ContentType: string
}

const BUCKET_NAME = config.digitaloceanSpace.bucket

export const uploadObject = async (params: ParamsObject) => {
	try {
		const data = await s3Client.send(new PutObjectCommand(params))
		const object = `${params.Bucket}/${params.Key}`
		console.log(`Successfully uploaded object: ${object}`)
		return { ...data, object }
	} catch (err) {
		console.log('Error', err)
	}
}

export const removeObject = async (key?: string) => {
	const command = new DeleteObjectCommand({
		Bucket: config.digitaloceanSpace.bucket,
		Key: key,
	})

	try {
		const response = await s3Client.send(command)
		return response
	} catch (error) {
		console.log(error)
	}
}

export const objectExists = async (key: string) => {
	const command = new HeadObjectCommand({
		Bucket: BUCKET_NAME,
		Key: key,
	})

	try {
		await s3Client.send(command)
		console.log(`File exists: ${key}`)
		return { exists: true, error: null }
	} catch (error: any) {
		if (error.name === 'NotFound') {
			console.log(`File does not exist: ${key}`)
			return { exists: false, error: null }
		}
		console.error(`Error checking file existence: ${error}`)
		return { exists: false, error }
	}
}

export const copyObject = async (oldKey: string, newKey: string) => {
	const command = new CopyObjectCommand({
		CopySource: encodeURI(oldKey),
		Bucket: BUCKET_NAME,
		Key: newKey,
	})
	try {
		const response = await s3Client.send(command)
		return response
	} catch (err) {
		console.error(err)
	}
}
