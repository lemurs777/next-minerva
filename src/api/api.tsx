import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'

const instance: AxiosInstance = axios.create({
	baseURL: process.env.NEXT_APP_BASE_URL,
	headers: {
		'Content-Type': 'application/json',
		// Add any other headers you need
	}
})
// Add a global request interceptor
instance.interceptors.request.use(
	(config) => {
		// Modify the request configuration if needed
		return config
	},
	(error) => {
		return Promise.reject(error)
	}
)

// Add a global response interceptor
instance.interceptors.response.use(
	(response) => {
		// Handle the response data if needed
		return response
	},
	(error) => {
		// Handle the error globally
		console.error('Axios request error:', error)

		// Optionally, you can rethrow the error to be handled in component-specific catch blocks
		return Promise.reject(error)
	}
)
export default instance