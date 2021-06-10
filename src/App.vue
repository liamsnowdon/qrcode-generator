<template>
  <div id="app">
    <Header />

    <div class="px-16 py-10">
      <div class="max-w-7xl my-0 mx-auto">
        <div class="flex flex-wrap -mx-10">
          <div class="flex flex-col flex-1 px-10">
            <Canvas />

            <div
              class="flex items-center justify-center p-3 mt-4 rounded border border-border"
            >
              <div
                aria-hidden="true"
                class="h-8 w-8 mr-3 flex items-center justify-center text-2xl font-bold rounded-full bg-primary"
              >
                !
              </div>
              <span>Don't forget to scan me to make sure I'm readable!</span>
            </div>
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
import Canvas from '@/components/Canvas.vue';
import Settings from '@/components/Settings.vue';

export default {
  name: 'App',
  components: {
    Header,
    Canvas,
    Settings,
  },
};
</script>
