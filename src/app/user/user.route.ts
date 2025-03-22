import { Router } from 'express'

import { validateRequest } from '../../middleware'
import { catchAsync } from '../../utils'


import { createUserSchema, updateUserSchema } from './user.request'
import { userController, userRequest } from './user.index'

const route = Router()

route.post('/', validateRequest(userRequest.createUserSchema), catchAsync(userController.createUser))
route.get('/', catchAsync(userController.getUsers))
route.get('/:userId', catchAsync(userController.getUser))
route.patch(
	'/:userId',
	validateRequest(userRequest.updateUserSchema),
	catchAsync(userController.updateUser),
)
route.delete('/:userId', catchAsync(userController.deleteUser))

export default route
