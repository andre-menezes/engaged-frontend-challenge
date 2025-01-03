import type { App } from 'vue';
import { loadLayouts } from './layouts';
import router from '../router';
import { i18n } from './i18n';
import pinia from './store';

export function loadPlugins(app: App) {
	app.use(i18n);
	app.use(router);
	app.use(pinia);
	loadLayouts(app);
}
