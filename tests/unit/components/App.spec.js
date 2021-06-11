import { shallowMount } from '@vue/test-utils';

import App from '@/App.vue';
import Header from '@/components/Header.vue';
import Canvas from '@/components/Canvas.vue';
import Settings from '@/components/Settings.vue';

describe('App.vue', () => {
  it('renders header', () => {
    const wrapper = shallowMount(App);

    expect(wrapper.findComponent(Header).exists()).toBe(true);
  });

  it('renders canvas', () => {
    const wrapper = shallowMount(App);

    expect(wrapper.findComponent(Canvas).exists()).toBe(true);
  });

  it('renders settings', () => {
    const wrapper = shallowMount(App);

    expect(wrapper.findComponent(Settings).exists()).toBe(true);
  });
});
