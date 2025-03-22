export const cleanJoiErrorMessage = (error: any) => {
	if (error.isJoi) {
		const { details } = error
		const message = details
			.map((i: any) => i.message.replace(/"/g, ''))
			.join(', ')
		return message
	}
	return error.message
}

export const joiGeneralMessage = {
	'string.base': 'Nilai {#label} harus berupa tipe teks.',
	'string.empty': '{#label} tidak boleh kosong.',
	'string.email': 'Format email pada {#label} tidak valid.',
	'any.required': '{#label} harus diisi.',
	'string.min': '{#label} harus memiliki panjang minimal {#limit} karakter.',
	'any.only': 'type harus berupa salah satu dari {#valids}',
	'boolean.base': 'Nilai {#label} harus berupa boolean.',
	'number.base': 'Nilai {#label} harus berupa angka.',
	'number.min': '{#label} harus memiliki nilai minimal {#limit}.',
	'date.base': 'Format tanggal pada {#label} tidak valid.',
	'date.format': 'Format tanggal pada {#label} tidak valid.',
	'number.integer': '{#label} harus berupa angka bulat.',
	'number.positive': '{#label} harus memiliki nilai positif.',
	'number.negative': '{#label} harus memiliki nilai negatif.',
	'number.max': '{#label} harus memiliki nilai maksimal {#limit}.',
	'string.pattern.base': '{#label} tidak valid.',
	'string.alphanum': '{#label} harus berupa alfanumerik.',
	'string.guid': '{#label} harus berupa GUID.',
	'string.uri': 'Format URL pada {#label} tidak valid.',
	'string.uriCustomScheme': 'Format URL pada {#label} tidak valid.',
	'string.uriRelativeOnly': 'Format URL pada {#label} tidak valid.',
	'string.uriRelativeOnlyCustomScheme': 'Format URL pada {#label} tidak valid.',
	'string.uriCustomSchemeOnly': 'Format URL pada {#label} tidak valid.',
	'string.ip': 'Format IP pada {#label} tidak valid.',
	'string.ipVersion': 'Format IP pada {#label} tidak valid.',
	'string.hostname': 'Format hostname pada {#label} tidak valid.',
	'string.lowercase': '{#label} harus berupa huruf kecil.',
	'string.uppercase': '{#label} harus berupa huruf besar.',
	'string.trim': '{#label} tidak boleh memiliki spasi di awal atau akhir.',
}
