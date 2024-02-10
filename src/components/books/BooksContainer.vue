<template>
  <div class="books-container">
    <BookCardComponent v-for="book in 10" />
  </div>
</template>

<script setup>
import BookCardComponent from "./BookCard.vue";
</script>

<script>
export default {
  name: "BooksContainerComponent",
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
