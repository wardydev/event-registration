import { type NextFunction, type Request, type Response } from 'express'

import { type QueryParams } from '../../interface'
import { AppError } from '../../middleware'
import { ResponseHandler } from '../../utils'
import { userService } from './template.index'


export const createUser = async (
	req: Request,
	res: Response,
	next: NextFunction,
) => {
	const { body } = req
	const result = await userService.createUser(body)
	if (result instanceof AppError) {
		next(result)
		return
	}
	ResponseHandler.ok(res, null, 'User created successfully')
}

export const getUsers = async (
	req: Request & { query: QueryParams },
	res: Response,
	next: NextFunction,
) => {
	const { query } = req
	const result = await userService.getUsers(query)
	if (result instanceof AppError) {
		next(result)
		return
	}
	ResponseHandler.ok(
		res,
		result?.data,
		'Users fetched successfully',
		result?.meta,
	)
}

export const getUser = async (
	req: Request,
	res: Response,
	next: NextFunction,
) => {
	const { userId } = req.params
	const result = await userService.getUser(Number(userId))
	if (result instanceof AppError) {
		next(result)
		return
	}
	ResponseHandler.ok(res, result, 'User fetched successfully')
}

export const updateUser = async (
	req: Request,
	res: Response,
	next: NextFunction,
) => {
	const { userId } = req.params
	const { body } = req
	const result = await userService.updateUser(Number(userId), body)
	if (result instanceof AppError) {
		next(result)
		return
	}
	ResponseHandler.ok(res, null, 'User updated successfully')
}

export const deleteUser = async (
	req: Request,
	res: Response,
	next: NextFunction,
) => {
	const { userId } = req.params
	const result = await userService.deleteUser(Number(userId))
	if (result instanceof AppError) {
		next(result)
		return
	}
	ResponseHandler.ok(res, null, 'User deleted successfully')
}
