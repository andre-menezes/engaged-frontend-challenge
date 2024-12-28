import { createRouter, createWebHistory } from 'vue-router';

const modules = import.meta.glob('@/views/routes.ts', { eager: true });

const routes = [...Object.values(modules).flatMap((module: any) => module.default)];

console.log('routes', routes);
const router = createRouter({
	history: createWebHistory(),
	routes,
});

export default router;
