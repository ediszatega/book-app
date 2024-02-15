<script setup>
import PageTitleComponent from "../components/common/PageTitle.js";
import BooksContainerComponent from "../components/books/BooksContainer.vue";
</script>

<script>
export default {
  components: { PageTitleComponent },
  computed: {
    favouriteBooks() {
      return this.$store.state.favouriteBooks;
    },
  },
};
</script>

<template>
  <main class="mx-auto w-3/5 h-full flex flex-col bg-background-color md:w-4/5">
    <PageTitleComponent title="Favourite books" class="pt-6" />
    <BooksContainerComponent flag="favBooks" :booksArray="favouriteBooks" />
  </main>
</template>
