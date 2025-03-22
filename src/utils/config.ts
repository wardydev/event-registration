import dotenv from 'dotenv'

dotenv.config()

export const config = {
	jwt: {
		accessPrivateKey: process.env.SECRET_KEY ?? 'access_private',
		refreshPrivateKey: process.env.SECRET_KEY ?? 'refresh_private',
		expHour: Number(process.env.JWT_EXP_HOUR ?? 1),
	},
	key: {
		appKey: btoa(process.env.APPLICATION_KEY ?? 'default'),
	},
	digitaloceanSpace: {
		endpoint: process.env.DIGITALOCEAN_SPACE_ENDPOINT ?? 'default',
		accessKey: process.env.DIGITALOCEAN_SPACE_ACCESS_KEY ?? 'default',
		secretAccessKey:
			process.env.DIGITALOCEAN_SPACE_SECRET_ACCESS_KEY ?? 'default',
		region: process.env.DIGITALOCEAN_SPACE_REGION ?? 'sgp1',
		originBucketName:
			process.env.DIGITALOCEAN_SPACE_ORIGIN_BUCKET ?? 'hsd-static-file',
		bucket: process.env.DIGITALOCEAN_SPACE_BUCKET ?? 'bucket',
		folder: process.env.DIGITALOCEAN_SPACE_FOLDER ?? 'assets',
	},
	whatsapp: {
		app_id: process.env.WHATSAPP_APP_ID ?? 'default',
		app_secret: process.env.WHATSAPP_APP_SECRET ?? 'default',
	},
	api: {
		central: process.env.CENTRAL_API ?? 'default',
		mail: `${process.env.MAIL_SERVICE}`,
		wahtsapp: process.env.JARVIS_URL ?? 'default',
	},
}
