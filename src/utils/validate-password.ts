import bcrypt from 'bcrypt'

export const validatePassword = async (
	inputPassword: string,
	storedPassword: string,
) => {
	return bcrypt.compare(inputPassword, storedPassword)
}
