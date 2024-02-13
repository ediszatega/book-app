<template>
  <div class="flex flex-col items-center">
    <div class="books-container">
      <BookCardComponent
        v-for="book in displayedBooks"
        :key="book.id"
        :bookData="book"
      />
    </div>
    <vue-awesome-paginate
      :total-items="totalBooks"
      :items-per-page="booksPerPage"
      :max-pages-shown="5"
      v-model="currentPage"
      @page-clicked="handlePageChange"
      :container-class="'pagination-container'"
      class="pb-8"
    />
  </div>
</template>

<script>
import BookCardComponent from "./BookCard.vue";
import Pagination from "../common/Pagination.vue";

export default {
  name: "BooksContainerComponent",
  components: { BookCardComponent },
  props: {
    booksArray: {
      required: true,
    },
  },
  data() {
    return {
      currentPage: 1,
      booksPerPage: 10,
      pagesShown: 0, // Initialize pagesShown as a data property
    };
  },
  methods: {
    handlePageChange(data) {
      this.currentPage = data.currentPage;
    },
    calculatePagesShown() {
      this.pagesShown = Math.ceil(this.totalBooks / this.booksPerPage);
    },
  },
  computed: {
    displayedBooks: function () {
      const startIndex =
        this.currentPage * this.booksPerPage - this.booksPerPage;
      const endIndex = startIndex + this.booksPerPage;

      return this.booksArray.slice(startIndex, endIndex);
    },
    totalBooks() {
      return parseInt(this.$store.state.numberOfBooks);
    },
  },
  watch: {
    totalBooks() {
      this.calculatePagesShown();
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
