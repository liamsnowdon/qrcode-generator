<template>
  <div id="app">
    <Header />

    <div class="flex flex-wrap px-16 py-10 max-w-7xl my-0 mx-auto">
      <div class="flex-1 flex justify-center items-center">
        <QRCode />
      </div>

      <div class="flex-1">
        <Settings />
      </div>
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header.vue';
import QRCode from '@/components/QRCode.vue';
import Settings from '@/components/Settings.vue';

export default {
  name: 'App',
  components: {
    Header,
    QRCode,
    Settings,
  },
};
</script>
