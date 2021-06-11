import { shallowMount } from '@vue/test-utils';
import CanvasButton from '@/components/CanvasButton.vue';

describe('CanvasButton.vue', () => {
  it('renders text', () => {
    const wrapper = shallowMount(CanvasButton, {
      propsData: {
        text: 'Download',
      },
    });

    expect(wrapper.text()).toContain('Download');
  });

  it('emits click event', async () => {
    const wrapper = shallowMount(CanvasButton, {
      propsData: {
        text: 'Download',
      },
    });

    await wrapper.trigger('click');

    expect(wrapper.emitted().click).toBeTruthy();
  });
});
