<template>
  <div>
    <div class="mb-8">
      <label class="block mb-5 text-2xl" for="value">Value</label>
      <input
        v-model="value"
        type="text"
        name="value"
        id="value"
        class="h-12 border border-border p-3 rounded outline-none focus:border-primary w-full"
        @input="onValueInput"
      />
    </div>

    <div class="mb-8">
      <h3 class="text-2xl">Colours</h3>

      <div class="border-l-8 border-border p-3 my-5">
        <span class="font-bold">Tip:</span> be careful when changing the colour
        of the QR code as it may make it unreadable.
      </div>

      <div class="flex">
        <div class="color-picker border-border">
          <label for="lightColor">Light</label>
          <input
            v-model="lightColor"
            id="lightColor"
            type="color"
            name="light"
            class="border-border"
            @input="onLightColorInput"
          />
        </div>

        <div class="color-picker border-border">
          <label for="darkColor">Dark</label>
          <input
            v-model="darkColor"
            id="darkColor"
            type="color"
            name="dark"
            class="border-border"
            @input="onDarkColorInput"
          />
        </div>
      </div>
    </div>

    <div>
      <h3 class="mb-5 text-2xl">Download File Type</h3>

      <div class="flex">
        <label
          class="relative border border-l-0 first:border-l first:rounded-tl-md first:rounded-bl-md border-border px-3 py-1 cursor-pointer last:rounded-tr-md last:rounded-br-md focus-within:bg-primary-light uppercase"
          :class="{ 'bg-primary': fileType === selectedFileType }"
          v-for="fileType in availableFileTypes"
          :key="fileType"
        >
          <input
            v-model="selectedFileType"
            :value="fileType"
            :id="`file-type-${fileType}`"
            type="radio"
            :name="`file-type-${fileType}`"
            class="absolute left-0 opacity-0 top-0"
            @change="onFileTypeChange"
          />
          <span>{{ fileType }}</span>
        </label>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Settings',

  data() {
    return {
      value: '',
      selectedFileType: '',
      availableFileTypes: ['png', 'jpeg', 'webp'],
      lightColor: '',
      darkColor: '',
    };
  },

  mounted() {
    this.value = this.$store.state.qrValue;
    this.selectedFileType = this.$store.state.fileType;
    this.lightColor = this.$store.state.qrLightColor;
    this.darkColor = this.$store.state.qrDarkColor;
  },

  methods: {
    onValueInput() {
      this.$store.commit('setQrValue', this.value);
    },

    onFileTypeChange() {
      this.$store.commit('setFileType', this.selectedFileType);
    },

    onLightColorInput() {
      this.$store.commit('setQrLightColor', this.lightColor);
    },

    onDarkColorInput() {
      this.$store.commit('setQrDarkColor', this.darkColor);
    },
  },
};
</script>

<style lang="scss">
.color-picker {
  @apply align-middle border flex mr-5 rounded focus-within:border-primary overflow-hidden;

  label {
    @apply px-3 py-1;
  }

  input {
    @apply border-l w-8 h-8;

    &::-webkit-color-swatch-wrapper {
      padding: 0;
    }

    &::-webkit-color-swatch {
      border: none;
    }
  }
}
</style>
