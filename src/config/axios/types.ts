import { createHttpClient } from '.';

export interface AxiosInterceptorCallbacks {
	onSuccess?: (value: any) => any;
	onError?: (error: any) => any;
}

export type httpClient = ReturnType<typeof createHttpClient>;
