<template>
  <select
    v-model="selectedSort"
    @change="handleChange"
    name="sortBy"
    class="basis-8/12 px-8 py-2 bg-white border rounded-md border-primary-color"
  >
    <option value="initial">Initial</option>
    <option value="asc">Title ascending</option>
    <option value="desc">Title descending</option>
  </select>
</template>

<script>
import { ref } from "vue";

export default {
  name: "SortByComponent",
  data() {
    return {
      selectedSort: ref("initial"),
    };
  },
  methods: {
    async handleChange() {
      if (this.selectedSort === "initial") {
        const searchQuery = this.$store.state.searchBooksQuery;
        if (searchQuery === "") {
          this.$store.dispatch("fetchBooks");
        } else {
          this.$store.dispatch("searchBooks", searchQuery);
        }
      } else {
        await this.$store.dispatch("sortBooks", this.selectedSort);
      }
    },
  },
};
</script>
