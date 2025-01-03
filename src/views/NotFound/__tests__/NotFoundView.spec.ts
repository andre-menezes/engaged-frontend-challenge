import { describe, it, expect, vi } from 'vitest';
import { shallowMount } from '@vue/test-utils';
import { i18n } from '@/config/plugins/i18n';
import { useRouter } from 'vue-router';
import NotFoundView from '../NotFoundView.vue';

vi.mock('vue-router', () => ({
  useRouter: vi.fn(() => ({
    back: vi.fn(),
  })),
}));

describe('NotFoundView', () => {
  it('Should render NotFoundView', () => {
    const wrapper = shallowMount(NotFoundView, {
      global: {
        plugins: [i18n],
      },
    });

    expect(wrapper.exists()).toBeTruthy();
  });

  it('Should render title and button', () => {
    const wrapper = shallowMount(NotFoundView, {
      global: {
        plugins: [i18n],
      },
    });

    const title = wrapper.find('h2');
    expect(title.exists()).toBeTruthy();
    expect(title.text().toLocaleUpperCase()).toEqual('PÁGINA NÃO ENCONTRADA');

    const button = wrapper.find('button');
    expect(button.exists()).toBeTruthy();
    expect(button.text().toLocaleUpperCase()).toEqual('VOLTAR');
  });
});
