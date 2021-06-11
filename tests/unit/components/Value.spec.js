import { shallowMount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import Value from '@/components/Value.vue';

const localVue = createLocalVue();

localVue.use(Vuex);

const mutations = {
  setQrValue: jest.fn(),
};

describe('Value.vue', () => {
  it('commits vuex mutation for QR code value on input', () => {
    const wrapper = shallowMount(Value, {
      store: new Vuex.Store({ mutations }),
      localVue,
    });

    const input = wrapper.find('input');

    input.element.value = 'You know the rules, and so do I.';
    input.trigger('input');

    expect(mutations.setQrValue).toHaveBeenCalled();
  });
});
