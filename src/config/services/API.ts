import { createHttpClient } from '../axios';

export const API = createHttpClient({
	baseURL: 'https://jsonplaceholder.typicode.com',
	timeout: 10000,
});

API.defineRequestInterceptor({
	onSuccess: (conf) => {
		const token = localStorage.getItem('token');

		if (token) {
			conf.headers.Authorization = `Bearer ${token}`;
		}

		return conf;
	},
	onError: (data) => {
		return Promise.reject(data);
	},
});

API.defineResponseInterceptor({
	onSuccess: (res) => {
		return res;
	},

	onError: (data) => {
		if (data.response?.status === 401) {
			localStorage.removeItem('token');
			window.location.reload();
		}

		return Promise.reject(data);
	},
});
