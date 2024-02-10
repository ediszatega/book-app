<template>
  <button
    class="basis-4/12 px-8 py-2 bg-white border rounded-md border-primary-color"
  >
    {{ name }}
  </button>
</template>

<script>
export default {
  name: "SecondaryButtonComponent",
  props: {
    name: {
      type: String,
      required: true,
    },
  },
};
</script>

<style></style>
