import { type QueryParams } from '../interface'

export const queryPagination = (query: QueryParams) => {
	const { page = '1', perPage = '10' } = query
	return {
		skip: (Number(page) - 1) * Number(perPage),
		take: Number(perPage),
	}
}