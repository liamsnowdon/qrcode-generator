import { shallowMount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import Colors from '@/components/Colors.vue';

const localVue = createLocalVue();

localVue.use(Vuex);

describe('Colors.vue', () => {
  let wrapper;
  let mutations;
  let store;

  beforeEach(() => {
    mutations = {
      setQrLightColor: jest.fn(),
      setQrDarkColor: jest.fn(),
    };

    store = new Vuex.Store({
      mutations,
    });

    wrapper = shallowMount(Colors, {
      store,
      localVue,
    });
  });

  afterEach(() => {
    wrapper.destroy();
  });

  it('commits vuex mutation for QR code light colour', () => {
    wrapper.vm.onLightColorInput('#ffffff');

    expect(mutations.setQrLightColor).toHaveBeenCalled();
  });

  it('commits vuex mutation for QR code dark colour', () => {
    wrapper.vm.onDarkColorInput('#000000');

    expect(mutations.setQrDarkColor).toHaveBeenCalled();
  });
});
