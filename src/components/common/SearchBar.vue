<template>
  <input
    @input="searchData"
    type="text"
    placeholder="Search books"
    class="basis-1/2 pl-3 pr-32 py-2 border rounded-md border-primary-color"
  />
</template>

<script>
import { ref } from "vue";

export default {
  name: "SearchBarComponent",
  methods: {
    searchData(event) {
      const searchQuery = event.target.value;
      let timer = null;
      clearTimeout(timer);
      if (searchQuery.length > 2) {
        timer = setTimeout(
          () => this.$store.dispatch("searchBooks", searchQuery),
          500
        );
      }
    },
  },
};
</script>
