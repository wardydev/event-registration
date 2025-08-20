// Path: src/app/utils/ticket-prices.service.ts
// Ticket pricing configuration service

import { type TicketType } from '../../prisma/client'

export interface TicketPriceConfig {
	type: TicketType
	price: number
	currency: string
	description: string
	benefits?: string[]
	isActive: boolean
}

// Ticket price configuration - could be moved to database later
const TICKET_PRICES: Record<TicketType, TicketPriceConfig> = {
	REGULAR: {
		type: 'REGULAR',
		price: 200000,
		currency: 'IDR',
		description: 'Tiket Regular - Akses ke semua sesi acara',
		isActive: true,
	},
	VIP: {
		type: 'VIP',
		price: 300000,
		currency: 'IDR',
		description: 'Tiket VIP - Akses premium dengan benefit tambahan',
		benefits: [
			'Tempat duduk prioritas',
			'Sertifikat kehadiran',
			'Buku gratis',
			'Snack & minuman',
			'Meet & greet dengan pemateri',
		],
		isActive: true,
	},
}

export const getTicketPrice = (ticketType: TicketType): number => {
	const config = TICKET_PRICES[ticketType]
	if (!config || !config.isActive) {
		throw new Error(`Invalid or inactive ticket type: ${ticketType}`)
	}
	return config.price
}

export const getTicketPriceConfig = (
	ticketType: TicketType,
): TicketPriceConfig => {
	const config = TICKET_PRICES[ticketType]
	if (!config) {
		throw new Error(`Invalid ticket type: ${ticketType}`)
	}
	return config
}

export const getAllTicketPrices = (): Record<TicketType, TicketPriceConfig> => {
	return TICKET_PRICES
}

export const getActiveTicketTypes = (): TicketType[] => {
	return Object.keys(TICKET_PRICES).filter(
		(type) => TICKET_PRICES[type as TicketType].isActive,
	) as TicketType[]
}

export const formatPrice = (
	price: number,
	currency: string = 'IDR',
): string => {
	if (currency === 'IDR') {
		return new Intl.NumberFormat('id-ID', {
			style: 'currency',
			currency: 'IDR',
			minimumFractionDigits: 0,
		}).format(price)
	}

	return new Intl.NumberFormat('en-US', {
		style: 'currency',
		currency,
	}).format(price)
}

export const calculateDiscount = (
	originalPrice: number,
	discountPercent: number,
): { discountedPrice: number; savings: number } => {
	const savings = Math.round(originalPrice * (discountPercent / 100))
	const discountedPrice = originalPrice - savings

	return {
		discountedPrice,
		savings,
	}
}

export const validateTicketType = (
	ticketType: string,
): ticketType is TicketType => {
	return Object.keys(TICKET_PRICES).includes(ticketType as TicketType)
}

// Future: Early bird pricing, bulk discounts, etc.
export const getEarlyBirdPrice = (
	ticketType: TicketType,
	earlyBirdEndDate: Date,
): number => {
	const now = new Date()
	const basePrice = getTicketPrice(ticketType)

	if (now <= earlyBirdEndDate) {
		// 20% discount for early bird
		return Math.round(basePrice * 0.8)
	}

	return basePrice
}
