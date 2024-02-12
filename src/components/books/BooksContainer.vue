<template>
  <div class="books-container">
    <BookCardComponent
      v-for="book in this.$store.state.books"
      :key="book.id"
      :bookData="book"
    />
  </div>
</template>

<script>
import BookCardComponent from "./BookCard.vue";
export default {
  name: "BooksContainerComponent",
  components: { BookCardComponent },
  methods: {
    async getData() {
      await this.$store.dispatch("fetchBooks");
      console.log(this.$store.state.books);
    },
  },
  mounted() {
    this.getData();
  },
};
</script>

<style>
.books-container {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(270px, 1fr));
  gap: 14px;
  padding-bottom: 2rem;
}
</style>
