import { describe, it, expect } from 'vitest'
import { shallowMount } from '@vue/test-utils'
import { i18n } from '@/config/plugins/i18n'

import AboutView from '../AboutView.vue'

describe('AboutView', () => {
  it('Should renders AboutView', () => {
    const wrapper = shallowMount(AboutView, {
      global: {
        plugins: [i18n]
      }
    });
    expect(wrapper.exists()).toBeTruthy();
  });

	it('Should renders AboutView with title', () => {
		const wrapper = shallowMount(AboutView, {
			global: {
				plugins: [i18n]
			}
		});

		const title = wrapper.find('h2');
		expect(title.exists()).toBeTruthy();
		expect(title.text().toLocaleUpperCase()).toEqual('PÁGINA SOBRE');
	});
});
