/// <reference types="vitest" />

import { defineConfig } from 'vite';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import vue from '@vitejs/plugin-vue';
import vueDevTools from 'vite-plugin-vue-devtools';
import VueI18nPlugin from '@intlify/unplugin-vue-i18n/vite';

export default defineConfig({
	plugins: [
		vue(),
		vueDevTools(),
		VueI18nPlugin({
			include: resolve(dirname(fileURLToPath(import.meta.url)), './path/to/src/locales/**'),
		}),
	],
	base: './',
	resolve: {
		alias: {
			'@': '/src',
			'@locales': '/src/config/locales',
		},
	},
	server: {
		port: 8080,
	},
});
