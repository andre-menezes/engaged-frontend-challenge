/// <reference types="vitest" />

import { defineConfig } from 'vite';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import vue from '@vitejs/plugin-vue';
import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify';
import vueDevTools from 'vite-plugin-vue-devtools';
import VueI18nPlugin from '@intlify/unplugin-vue-i18n/vite';

export default defineConfig({
	plugins: [
		vue({
			template: {
				transformAssetUrls,
				compilerOptions: {
					isCustomElement: (tag: string) => tag.includes('*-*') || tag.includes('v-list-item-content'),
				},
			},
		}),
		vueDevTools(),
		VueI18nPlugin({
			include: resolve(dirname(fileURLToPath(import.meta.url)), './path/to/src/locales/**'),
		}),
		vuetify({
			autoImport: true,
		}),
	],
	base: './',
	resolve: {
		alias: {
			'@': '/src',
			'@locales': '/src/config/locales',
			'@components': '/src/components',
		},
	},
	server: {
		port: 8080,
	},
});
