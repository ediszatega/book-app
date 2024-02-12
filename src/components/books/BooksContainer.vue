<template>
  <div class="books-container">
    <BookCardComponent
      v-for="book in booksArray"
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
  props: {
    booksArray: {
      required: true,
    },
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
