import { lazyLoad } from '@/helpers/functions';

export default [
	{
		path: '/',
		name: 'Home',
		component: import('@/views').then((m) => m.HomeView),
		meta: {
			layout: 'default',
		},
	},
	{
		path: '/about',
		name: 'About',
		component: import('@/views').then((m) => m.AboutView),
		meta: {
			layout: 'default',
		},
	},
	{
		path: '/:pathMatch(.*)*',
		name: 'NotFound',
		component: import('@/views').then((m) => m.NotFound),
		meta: {
			layout: 'empty',
		},
	},
];
