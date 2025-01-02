import { DefaultLayout, EmptyLayout } from '@/layouts';
import type { App } from 'vue';

export function loadLayouts(app: App) {
	app.component('default', DefaultLayout);
	app.component('empty', EmptyLayout);
}
