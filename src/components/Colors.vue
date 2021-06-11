<template>
  <div>
    <h3 class="text-2xl">Colours</h3>

    <SettingsWarning>
      <span class="font-bold">Tip:</span> be careful when changing the colour of
      the QR code as it may make it unreadable.
    </SettingsWarning>

    <div class="flex">
      <ColorPicker
        label="Light"
        default-value="#ffffff"
        @input="onLightColorInput"
      />
      <ColorPicker
        label="Dark"
        default-value="#000000"
        @input="onDarkColorInput"
      />
    </div>
  </div>
</template>

<script>
import ColorPicker from '@/components/ColorPicker.vue';
import SettingsWarning from '@/components/SettingsWarning.vue';

export default {
  name: 'Colors',

  components: {
    ColorPicker,
    SettingsWarning,
  },

  methods: {
    onLightColorInput(value) {
      this.$store.commit('setQrLightColor', value);
    },

    onDarkColorInput(value) {
      this.$store.commit('setQrDarkColor', value);
    },
  },
};
</script>
