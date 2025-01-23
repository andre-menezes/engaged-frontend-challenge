export default [
	{
		path: '/',
		name: 'Home',
		component: import('@/views').then((m) => m.HomeView),
		meta: {
			layout: 'default',
		},
	},
];
