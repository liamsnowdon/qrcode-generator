<template>
  <div>
    <h3 class="text-2xl">Colours</h3>

    <div class="border-l-8 border-border p-3 my-5">
      <span class="font-bold">Tip:</span> be careful when changing the colour of
      the QR code as it may make it unreadable.
    </div>

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

export default {
  name: 'Colors',

  components: {
    ColorPicker,
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
