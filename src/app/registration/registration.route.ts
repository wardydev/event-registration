// Path: src/app/registration/registration.route.ts
// Registration route definitions

import { Router } from 'express'

import { validateRequest } from '../../middleware'
import { catchAsync } from '../../utils'

import {
	createRegistration,
	getRegistrationStatus,
	getRegistrationById,
} from './registration.controller'
import { createRegistrationSchema } from './registration.request'

const route = Router()

// POST /api/register - Create new registration
route.post(
	'/',
	validateRequest(createRegistrationSchema),
	catchAsync(createRegistration),
)

// GET /api/registration/:qrCode/status - Get registration status by QR code
route.get('/:qrCode/status', catchAsync(getRegistrationStatus))

// GET /api/registration/:id - Get registration by ID
route.get('/:id', catchAsync(getRegistrationById))

export default route
