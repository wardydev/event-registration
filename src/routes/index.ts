import { type NextFunction, type Request, type Response, Router } from 'express'

import paymentRoute from '../app/payment/payment.route'
import registrationRoute from '../app/registration/registration.route'
import ticketRoute from '../app/ticket/ticket.route'
import uploadRoute from '../app/upload-fs/upload-fs.routes'
import usersRoute from '../app/user/user.route'
import { ERROR_CODE } from '../interface'
import { AppError } from '../middleware'
import { ResponseHandler } from '../utils'

const route = Router()

route.use('/users', usersRoute)
route.use('/upload', uploadRoute)
route.use('/api/register', registrationRoute)
route.use('/api/payment', paymentRoute)
route.use('/api/ticket', ticketRoute)

route.get('/', (req: Request, res: Response) => {
	ResponseHandler.ok(res, null, 'Hello World 🌍🚀')
})

route.use('*', (req: Request, res: Response, next: NextFunction) => {
	const error = new AppError(ERROR_CODE.NOT_FOUND.code)
	next(error)
})

export default route
