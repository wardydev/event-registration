import axios, { type AxiosError, type AxiosResponse } from 'axios'

import { config } from './config'

interface Payload {
	phone: string
	trxDate: string
	trxType: string
	accountNumber: string
	productName: string
	accountName: string
	trxAmount: string
	balanceLabel: string
	balance: string
	officer: string
	trxId: string
}

export const apiSendToWhatsApp = async (
	payload: Payload,
): Promise<AxiosResponse | Error | AxiosError> => {
	let data
	try {
		data = await axios.post(`${config.api.wahtsapp}/messages`, payload, {
			headers: {
				'APP-ID': config.whatsapp.app_id,
				'APP-SECRET': config.whatsapp.app_secret,
			},
		})
		// console.log('Message sent:', data)
		return data.data
	} catch (error) {
		return error as AxiosError
	}
}
