<template>
  <p class="text-3xl font-medium pb-8">{{ title }}</p>
</template>

<script>
export default {
  name: "PageTitleComponent",
  props: {
    title: {
      type: String,
      required: true,
    },
  },
};
</script>
