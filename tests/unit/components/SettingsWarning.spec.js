import { shallowMount } from '@vue/test-utils';
import SettingsWarning from '@/components/SettingsWarning.vue';

describe('SettingsWarning.vue', () => {
  it('renders slot with content', () => {
    const wrapper = shallowMount(SettingsWarning, {
      slots: {
        default: '<span>You know the rules, and so do I.</span>',
      },
    });

    const content = wrapper.find('span');

    expect(content.exists()).toBe(true);
    expect(content.text()).toBe('You know the rules, and so do I.');
  });
});
