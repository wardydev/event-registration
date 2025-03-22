export const MESSAGES = {
	SUCCESS: {
		LOGIN: 'Login Successfully',
		GET: {
			USERS: 'Successfully get user data list',
			USER: 'Successfully get user details',
		},
		CREATE: {
			USER: 'User created successfully',
		},
		UPDATE: {
			USER: 'User updated successfully',
		},
		DELETE: {
			USER: 'User deleted successfully',
		},
	},
	ERROR: {
		LOGIN: {
			USER_NOT_FOUND: 'Failed Login, user not found',
			PASSWORD_NOT_MATCH: 'Failed Login, password is wrong',
		},
		GET: {
			USER: 'Gagal to get detail user',
		},
		AUTH: {
			FORBIDDEN: 'You do not have access',
			TYPE_REQUIRED: 'Access type not found',
			TOKEN_REQUIRED: 'Token not found',
			INVALID_TOKEN: 'Token is invalid',
		},
		CREATE: {
			USER: 'Failed to create user',
		},
		NOT_FOUND: {
			IMAGE: 'Image not found',
			USER: 'User not found',
		},
		ALREADY: {
			EMAIL: 'Email is already exist',
			PHONE_NUMBER: 'Phone number is already exist',
		},
		UPDATE: {
			USER: 'Failed to update user',
		},
		INVALID: {
			FILE_SIZE: 'File size should not exceed 5 mb',
		},
		REQUIRED: {
			DOCUMENT: 'Documents must be uploaded at least 1',
		},
		DELETE: {
			USER: 'Failed to delete user',
		},
	},
}
