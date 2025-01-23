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
		component: lazyLoad('AboutView'),
		meta: {
			layout: 'default',
		},
	},
	{
		path: '/:pathMatch(.*)*',
		name: 'NotFound',
		component: lazyLoad('NotFound'),
		meta: {
			layout: 'empty',
		},
	},
];
