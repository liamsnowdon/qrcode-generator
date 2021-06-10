<template>
  <div>
    <h3 class="mb-3 text-2xl">Download File Type</h3>
    <p class="mb-5">
      <span class="font-bold">Note:</span> If the browser doesn't support the
      selected file type, it will be downloaded as a PNG.
    </p>

    <div class="flex">
      <label
        class="relative border border-l-0 first:border-l first:rounded-tl-md first:rounded-bl-md border-border px-3 py-1 cursor-pointer last:rounded-tr-md last:rounded-br-md focus-within:bg-primary uppercase"
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
</template>

<script>
export default {
  name: 'FileTypes',

  data() {
    return {
      selectedFileType: '',
      availableFileTypes: ['png', 'jpeg', 'webp'],
    };
  },

  mounted() {
    this.selectedFileType = this.$store.state.fileType;
  },

  methods: {
    onFileTypeChange() {
      this.$store.commit('setFileType', this.selectedFileType);
    },
  },
};
</script>
