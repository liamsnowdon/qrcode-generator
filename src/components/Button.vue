<template>
  <button
    class="bg-primary rounded mt-5 px-4 py-2 font-bold hover:bg-primary-dark transition-colors duration-300;"
    :type="type"
    @click="onClick"
  >
    {{ text }}
  </button>
</template>

<script>
export default {
  name: 'Button',

  props: {
    text: {
      type: String,
      required: true,
    },

    type: {
      type: String,
      required: false,
      default: 'button',
    },
  },

  methods: {
    onClick(event) {
      this.$emit('click', event);
    },
  },
};
</script>
