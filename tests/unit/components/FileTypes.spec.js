import { shallowMount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import FileTypes from '@/components/FileTypes.vue';
import SettingsWarning from '@/components/SettingsWarning.vue';

const localVue = createLocalVue();

localVue.use(Vuex);

describe('FileTypes.vue', () => {
  let wrapper;
  let mutations;
  let store;

  beforeEach(() => {
    mutations = {
      setFileType: jest.fn(),
    };

    store = new Vuex.Store({
      mutations,
    });

    wrapper = shallowMount(FileTypes, {
      store,
      localVue,
    });
  });

  afterEach(() => {
    wrapper.destroy();
  });

  it('renders a radio button for each available file type', () => {
    const radioButtons = wrapper.findAll('[type="radio"]');

    expect(radioButtons.length).toBe(wrapper.vm.availableFileTypes.length);
  });

  it('commits vuex mutation for QR code file type on change', async () => {
    const radio = wrapper.find('[type="radio"]:not(:checked)');

    await radio.setChecked();

    expect(radio.element.checked).toBeTruthy();
    expect(mutations.setFileType).toHaveBeenCalled();
  });

  it('shows warning message about changing colours', () => {
    expect(wrapper.findComponent(SettingsWarning).exists()).toBe(true);
  });
});
