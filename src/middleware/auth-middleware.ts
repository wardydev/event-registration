import { type NextFunction, type Request, type Response } from 'express'
import jwt, { type Secret } from 'jsonwebtoken'

import * as userRepository from '../app/user/user.repository'
import { MESSAGES, ResponseHandler, config } from '../utils'

interface RolePayload {
	id: number
	name: string
}

interface ApplicationPayload {
	id: number
	name: string
}

export interface PayloadAccessToken {
	type: string
	userId: string
	applicationCode: string
	application: ApplicationPayload
	role: RolePayload
	iat: number
	exp: number
}

export interface PayloadRefreshToken {
	type: string
	userId: string
	iat: number
	exp: number
}

export interface PayloadAuthToken {
	type: string
	userId: string
	iat: number
	exp: number
}

type AuthType = 'AUTH' | 'ACCESS' | 'REFRESH'

const SECRET_KEY: Secret = config.jwt.accessPrivateKey

export interface RequestWithAuthToken extends Request {
	tokenPayload: PayloadAuthToken | PayloadRefreshToken
}

export interface RequestWithAccessToken extends Request {
	tokenPayload: PayloadAccessToken
	jwtToken: string
	appKey?: string
}

export const auth =
	(type: AuthType) =>
	async (request: Request, response: Response, next: NextFunction) => {
		if (!type) {
			ResponseHandler.badRequest(next, 'Auth type tidak ditemukan.')
			return
		}
		try {
			const token = request.header('Authorization')?.replace('Bearer ', '')
			if (!token) {
				ResponseHandler.unauthorized(next, 'Token tidak ditemukan.')
				return
			}
			const decoded = jwt.verify(token, SECRET_KEY) as
				| PayloadAccessToken
				| PayloadAuthToken
				| PayloadRefreshToken
			if (decoded.type !== type) {
				ResponseHandler.forbidden(next, 'Anda tidak memiliki akses.')
				return
			}
			console.log('Decoded : ', JSON.stringify(decoded, null, 2))
			if (Object.keys(decoded).length === 0) {
				ResponseHandler.unauthorized(next, 'Token tidak valid.')
			}
			console.log('Decoded Payload:', JSON.stringify(decoded, null, 2))
			if (type === 'AUTH' || type === 'REFRESH') {
				;(request as RequestWithAuthToken).tokenPayload = decoded as
					| PayloadAuthToken
					| PayloadRefreshToken
			}
			if (type === 'ACCESS') {
				;(request as RequestWithAccessToken).tokenPayload =
					decoded as PayloadAccessToken
			}
			const user = await userRepository.getUser(Number(decoded.userId))
			if (!user) {
				ResponseHandler.forbidden(next, MESSAGES.ERROR.NOT_FOUND.USER)
				return
			}
			next()
		} catch (error) {
			console.error('Error Auth Middleware => ', error)
			ResponseHandler.unauthorized(next, 'Silahkan login terlebih dahulu.')
		}
	}
