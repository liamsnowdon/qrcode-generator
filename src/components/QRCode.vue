<template>
  <div class="text-center">
    <canvas v-show="qrValue" ref="canvas" class="mx-auto"></canvas>

    <p v-show="!qrValue">Set a value</p>

    <Button v-show="qrValue" text="Download" @click="downloadImage" />
    <Button v-show="qrValue" text="Copy Data URL" @click="copyDataUrl" />
  </div>
</template>

<script>
import QRCode from 'qrcode';
import Button from '@/components/Button.vue';

export default {
  name: 'QRCode',

  components: {
    Button,
  },

  data() {
    return {};
  },

  mounted() {
    this.generateQRCode(this.qrValue);
  },

  computed: {
    qrValue() {
      return this.$store.state.qrValue;
    },

    fileType() {
      return this.$store.state.fileType;
    },

    lightColor() {
      return this.$store.state.qrLightColor;
    },

    darkColor() {
      return this.$store.state.qrDarkColor;
    },

    propertiesToWatchForQRUpdate() {
      return `${this.qrValue} ${this.lightColor} ${this.darkColor}`;
    },
  },

  watch: {
    propertiesToWatchForQRUpdate() {
      this.generateQRCode();
    },
  },

  methods: {
    generateQRCode() {
      if (!this.qrValue) return;

      QRCode.toCanvas(
        this.$refs.canvas,
        this.qrValue,
        {
          color: { light: this.lightColor, dark: this.darkColor },
          margin: 0,
        },
        (error) => {
          if (error) {
            console.log(error);
          }
        },
      );
    },

    downloadImage() {
      const MIME_TYPE = `image/${this.fileType}`;
      const url = this.$refs.canvas.toDataURL(MIME_TYPE);
      const dlLink = document.createElement('a');

      dlLink.download = 'qrcode';
      dlLink.href = url;
      dlLink.dataset.downloadurl = `${MIME_TYPE}:${dlLink.download}:${dlLink.href}`;

      dlLink.click();
    },

    copyDataUrl(event) {
      event.preventDefault();

      const MIME_TYPE = `image/${this.fileType}`;
      const data = this.$refs.canvas.toDataURL(MIME_TYPE);

      navigator.clipboard.writeText(data).then(
        () => {
          alert('Copied to clipboard!');
        },
        () => {
          alert('Error copying to clipboard :(');
        },
      );
    },
  },
};
</script>
