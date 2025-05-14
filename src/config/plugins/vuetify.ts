import 'vuetify/styles';
import { createVuetify } from 'vuetify';
import { i18n } from './i18n';

export default createVuetify({
	locale: i18n.global.getLocaleMessage('pt'),
});
