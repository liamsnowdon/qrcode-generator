import { shallowMount } from '@vue/test-utils';
import CopyToClipboardCanvasButton from '@/components/CopyToClipboardCanvasButton.vue';

describe('CopyToClipboardCanvasButton.vue', () => {
  it('should show notification', async () => {
    const wrapper = shallowMount(CopyToClipboardCanvasButton, {
      propsData: {
        text: 'Copy',
        value: 'Value to copy',
      },
      data() {
        return {
          isNotificationActive: true,
        };
      },
    });

    expect(wrapper.find('.notification').exists()).toBe(true);
  });

  it('should not show notification', async () => {
    const wrapper = shallowMount(CopyToClipboardCanvasButton, {
      propsData: {
        text: 'Copy',
        value: 'Value to copy',
      },
      data() {
        return {
          isNotificationActive: false,
        };
      },
    });

    expect(wrapper.find('.notification').exists()).toBe(false);
  });
});
