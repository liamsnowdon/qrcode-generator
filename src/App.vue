<template>
  <div id="app">
    <Header />

    <div class="px-16 py-10">
      <div class="max-w-7xl my-0 mx-auto">
        <div class="flex flex-wrap -mx-10">
          <div class="flex-1 px-10">
            <QRCode />
          </div>

          <div class="flex-1 px-10">
            <Settings />
          </div>
        </div>
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
