import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueDevTools from 'vite-plugin-vue-devtools';

export default defineConfig({
	plugins: [vue(), vueDevTools()],
	base: './',
	resolve: {
		alias: {
			'@': '/src',
		},
	},
	server: {
		port: 8080,
	},
});
