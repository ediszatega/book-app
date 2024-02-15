<template>
  <input
    v-model="searchQuery"
    @input="searchData"
    type="text"
    placeholder="Search books"
    class="basis-1/2 pl-3 pr-32 py-2 border rounded-md border-primary-color"
  />
</template>

<script>
export default {
  name: "SearchBarComponent",
  data() {
    return {
      timer: null,
      searchQuery: "",
    };
  },
  methods: {
    searchData() {
      clearTimeout(this.timer);

      this.timer = setTimeout(() => {
        if (this.searchQuery === "") {
          this.$store.dispatch("fetchBooks");
        } else if (this.searchQuery.length > 2) {
          this.$store.dispatch("searchBooks", this.searchQuery);
        }
      }, 500);
    },
  },
};
</script>
