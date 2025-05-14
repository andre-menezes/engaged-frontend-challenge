import { createI18n } from 'vue-i18n';
import en from '@locales/en.json';
import pt from '@locales/pt-br.json';

export const i18n = createI18n({
	locale: 'pt',
	legacy: false,
	fallbackLocale: 'pt',
	globalInjection: true,
	datetimeFormats: {
		en: {
			short: {
				year: 'numeric',
				month: 'short',
				day: 'numeric',
			},
			long: {
				year: 'numeric',
				month: 'short',
				day: 'numeric',
				weekday: 'short',
				hour: 'numeric',
				minute: 'numeric',
			},
		},
		pt: {
			short: {
				year: 'numeric',
				month: 'numeric',
				day: 'numeric',
			},
			long: {
				year: 'numeric',
				month: 'short',
				day: 'numeric',
				weekday: 'short',
				hour: 'numeric',
				minute: 'numeric',
			},
		},
	},
	messages: {
		en: en,
		pt: pt,
	},
});
