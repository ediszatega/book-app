import { createStore } from "vuex";
import axiosClient from "../axiosClient.js";

const store = createStore({
  state() {
    return {
      searchBooksQuery: "",
      books: [],
      bookDetails: {},
      favouriteBooks: JSON.parse(localStorage.getItem("favouriteBooks")),
    };
  },
  actions: {
    async fetchBooks(context) {
      try {
        const response = await axiosClient.get("recent");
        context.commit("setBooks", response.data.books);
      } catch (error) {
        console.error("Error fetching books:", error);
      }
    },
    async searchBooks(context, searchQuery) {
      try {
        const response = await axiosClient.get(`search/${searchQuery}`);
        context.commit("setBooks", response.data.books);
      } catch (error) {
        console.error("Error fetching books:", error);
      }
    },
    async fetchBookDetails(context, id) {
      try {
        const response = await axiosClient.get(`book/${id}`);
        context.commit("setBookDetails", response.data);
      } catch (error) {
        console.error("Error fetching books:", error);
      }
    },
    async manageFavouriteBooks(context, favouriteBook) {
      context.commit("setFavouriteBooks", favouriteBook);
    },
  },
  mutations: {
    setBooks(state, books) {
      state.books = books;
    },
    setBookDetails(state, bookDetails) {
      state.bookDetails = bookDetails;
    },
    setFavouriteBooks(state, favouriteBook) {
      const index = state.favouriteBooks.findIndex(
        (book) => book.id === favouriteBook.id
      );

      if (index !== -1) {
        state.favouriteBooks.splice(index, 1);
      } else {
        state.favouriteBooks.push(favouriteBook);
      }

      localStorage.setItem(
        "favouriteBooks",
        JSON.stringify(state.favouriteBooks)
      );
    },
  },
  getters: {
    allBooks: (state) => state.books,
    bookDetails: (state) => state.bookDetails,
    allFavouriteBooks: (state) => state.favouriteBooks,
  },
});

export default store;
