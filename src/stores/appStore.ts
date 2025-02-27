import { defineStore } from 'pinia';
import { i18n } from '@/config/plugins/i18n';

type Locales = 'pt' | 'en';

interface AppState {
	locale: Locales;
}

export const useAppStore = defineStore('app', {
	state: (): AppState => ({
		locale: 'pt',
	}),
	actions: {
		changeLocale() {
			this.locale = this.locale === 'en' ? 'pt' : 'en';
			i18n.global.locale = this.locale as Locales;
		},
	},
	getters: {
		getLocale(state): string {
			return state.locale;
		},
	},
	persist: true,
});
