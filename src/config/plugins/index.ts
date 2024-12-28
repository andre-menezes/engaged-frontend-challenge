import type { App } from 'vue';
import { loadLayouts } from './layouts';
import router from '../router';

export function loadPlugins(app: App) {
	app.use(router);
	loadLayouts(app);
}
