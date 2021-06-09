import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    qrValue: 'https://www.youtube.com/watch?v=oHg5SJYRHA0',
    qrLightColor: '#ffffff',
    qrDarkColor: '#000000',
    fileType: 'png',
  },
  mutations: {
    setQrValue(state, value) {
      state.qrValue = value;
    },

    setFileType(state, value) {
      state.fileType = value;
    },

    setQrLightColor(state, value) {
      state.qrLightColor = value;
    },

    setQrDarkColor(state, value) {
      state.qrDarkColor = value;
    },
  },
  actions: {},
  modules: {},
});
