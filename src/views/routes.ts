import { lazyLoading } from '@/helpers/functions';

export default [
	{
		path: '/',
		name: 'Home',
		component: lazyLoading('HomeView'),
		meta: {
			layout: 'default',
		},
	},
];
