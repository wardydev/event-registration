import jwt from 'jsonwebtoken'

import { config } from './config'

export const generateToken = (user: any) => {
	const secret = config.jwt.accessPrivateKey
	const expiresIn = 60 * 60 * config.jwt.expHour
	const payload = {
		type: 'ACCESS',
		userId: user.id,
		email: user.email,
		name: user.name,
		roles: user.roleIds,
	}
	return jwt.sign(payload, secret, { expiresIn })
}
