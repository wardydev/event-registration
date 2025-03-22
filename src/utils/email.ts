import axios, { AxiosError } from 'axios'

import { config } from './config'

interface MailData {
	email: string
	username: string
}

export const sendMail = async (data: MailData) => {
	const options = {
		method: 'POST',
		url: `${config.api.mail}/mail`,
		headers: {
			'Content-Type': 'application/json',
		},
		data: {
			email: data.email,
			username: data.username,
		},
	}

	try {
		const response = await axios.request(options)
		console.log('Email sent successfully:', response.data)
	} catch (error: any) {
		console.log(error)
		if (error instanceof AxiosError) {
			console.error(
				`Gagagl mengirim notifikasi ke email: ${error.message}`,
				error.response ? error.response.data : error.message,
			)
		}
		throw error
	}
}
