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

export default {
  name: "BooksContainerComponent",
  components: { BookCardComponent },
  props: {
    booksArray: {
      required: true,
    },
    flag: {
      type: String,
      required: false,
    },
  },
  data() {
    return {
      currentPage: 1,
      booksPerPage: 10,
      pagesShown: 0,
      totalFavouriteBooks: this.$store.getters.favouriteBooksCount,
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

      if (this.booksArray === undefined) {
        return [];
      }

      return this.booksArray.slice(startIndex, endIndex);
    },
    totalBooks() {
      if (this.flag === "favBooks") {
        return parseInt(this.totalFavouriteBooks);
      } else {
        return parseInt(this.$store.state.numberOfBooks);
      }
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
.pagination-container {
  display: flex;
  column-gap: 10px;
  flex-wrap: wrap;
  justify-content: center;
}
.paginate-buttons {
  height: 40px;
  width: 40px;
  border-radius: 20px;
  cursor: pointer;
  background-color: rgb(242, 242, 242);
  border: 1px solid rgb(217, 217, 217);
  color: black;
}
.paginate-buttons:hover {
  background-color: #d8d8d8;
}
.active-page {
  background-color: theme("colors.primary-color");
  border: 1px solid theme("colors.primary-color");
  color: white;
}
.active-page:hover {
  background-color: theme("colors.secondary-color");
  border: 1px solid theme("colors.secondary-color");
}
</style>
