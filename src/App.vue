<template>
  <div id="app">
    <Header />

    <div class="px-5 py-5 md:px-16 md:py-10">
      <div class="max-w-7xl my-0 mx-auto">
        <div class="md:flex md:-mx-10">
          <div class="flex flex-col md:flex-1 md:px-10 mb-10 md:mb-0">
            <Canvas />

            <div
              class="flex items-center justify-center p-3 mt-4 rounded border border-border"
            >
              <div
                aria-hidden="true"
                class="h-8 w-8 mr-3 flex flex-shrink-0 items-center justify-center text-2xl font-bold rounded-full bg-primary"
              >
                !
              </div>
              <span>Don't forget to scan me to make sure I'm readable!</span>
            </div>
          </div>

          <div class="md:flex-1 md:px-10">
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
