import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { AxiosInterceptorCallbacks } from '.';

export function createHttpClient(config: AxiosRequestConfig = {}) {
	const axiosHttpClient = axios.create(config);

	function get(url: string, params: Record<string, any> = {}, config: AxiosRequestConfig = {}): Promise<any> {
		return axiosHttpClient.get(url, { ...config, params }).then((response: AxiosResponse) => response.data);
	}

	function post(url: string, params: Record<string, any> = {}, config: AxiosRequestConfig = {}): Promise<any> {
		return axiosHttpClient.post(url, params, config).then((response: AxiosResponse) => response.data);
	}

	function patch(url: string, params: Record<string, any> = {}, config: AxiosRequestConfig = {}): Promise<any> {
		return axiosHttpClient.patch(url, params, config).then((response: AxiosResponse) => response.data);
	}

	function put(url: string, params: Record<string, any> = {}, config: AxiosRequestConfig = {}): Promise<any> {
		return axiosHttpClient.put(url, params, config).then((response: AxiosResponse) => response.data);
	}

	function del(url: string, params: Record<string, any> = {}, config: AxiosRequestConfig = {}): Promise<any> {
		return axiosHttpClient.delete(url, { ...config, params }).then((response: AxiosResponse) => response.data);
	}

	function defineRequestInterceptor({ onSuccess, onError }: AxiosInterceptorCallbacks): void {
		axiosHttpClient.interceptors.request.use(onSuccess, onError);
	}

	function defineResponseInterceptor({ onSuccess, onError }: AxiosInterceptorCallbacks): void {
		axiosHttpClient.interceptors.response.use(onSuccess, onError);
	}

	return {
		get,
		post,
		patch,
		put,
		del,
		defineRequestInterceptor,
		defineResponseInterceptor,
	};
}
