import CustomIcon from '@components/CustomIcon.vue';
import type { App } from 'vue';

export function loadComponents(app: App) {
	app.component('custom-icon', CustomIcon);
}
