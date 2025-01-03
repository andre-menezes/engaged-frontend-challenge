import { describe, it, expect } from 'vitest'
import { shallowMount } from '@vue/test-utils'
import { i18n } from '@/config/plugins/i18n'

import HomeView from '../HomeView.vue'

describe('HomeView', () => {
  it('Should renders HomeView', () => {
    const wrapper = shallowMount(HomeView, {
      global: {
        plugins: [i18n]
      }
    });
    expect(wrapper.exists()).toBeTruthy();
  });

	it('Should renders HomeView with title', () => {
		const wrapper = shallowMount(HomeView, {
			global: {
				plugins: [i18n]
			}
		});

		const title = wrapper.find('h2');
		expect(title.exists()).toBeTruthy();
		expect(title.text().toLocaleUpperCase()).toEqual('PÁGINA INICIAL');
	});
});
