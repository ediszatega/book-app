<template>
  <button
    @click="handleClick"
    :value="name"
    class="basis-4/12 px-8 py-2 bg-white border rounded-md border-primary-color grow"
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
  methods: {
    handleClick(event) {
      if (event.target.value === "Filter") {
        this.$store.state.filterModalOpened = true;
      }
    },
  },
};
</script>

<style></style>
