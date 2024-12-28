import { DefaultLayout, EmptyLayout } from '@/layouts';
import type { App } from 'vue';

export function loadLayouts(app: App) {
	app.component('default-layout', DefaultLayout);
	app.component('empty-layout', EmptyLayout);
}
