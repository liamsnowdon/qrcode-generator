import { shallowMount } from '@vue/test-utils';
import ColorPicker from '@/components/ColorPicker.vue';

describe('ColorPicker.vue', () => {
  it('renders label', () => {
    const wrapper = shallowMount(ColorPicker, {
      propsData: {
        label: 'Light',
        defaultValue: '#ffffff',
      },
    });

    const label = wrapper.find('label');

    expect(label.text()).toContain('Light');
  });

  it('emits input event', async () => {
    const wrapper = shallowMount(ColorPicker, {
      propsData: {
        label: 'Light',
        defaultValue: '#ffffff',
      },
    });

    const input = wrapper.find('input');

    input.element.value = '#f5f5f5';
    input.trigger('input');

    expect(wrapper.emitted().input).toBeTruthy();
  });
});
