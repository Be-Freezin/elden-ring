import axios from 'axios'

const BASE_URL = 'https://eldenring.fanapis.com/api'

const options = {
	method: 'GET',
	url: BASE_URL,

	headers: {},
}

export const fetchFromAPI = async (url) => {
	const { data } = await axios.get(`${BASE_URL}/${url}`, options)
	return { data }
}
