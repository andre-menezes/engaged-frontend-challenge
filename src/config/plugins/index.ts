import type { App } from 'vue';
import { loadLayouts } from './layouts';
import { loadComponents } from './components';
import { i18n } from './i18n';
import vuetify from './vuetify';
import router from '../router';
import pinia from './store';

export function loadPlugins(app: App) {
	app.use(i18n);
	app.use(router);
	app.use(pinia);
	app.use(vuetify);
	loadComponents(app);
	loadLayouts(app);
}
