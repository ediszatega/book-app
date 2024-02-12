import { createStore } from "vuex";
import axiosClient from "../axiosClient.js";

const store = createStore({
  state() {
    return {
      searchBooksQuery: "",
      books: [],
      bookDetails: {},
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
  },
  mutations: {
    setBooks(state, books) {
      state.books = books;
    },
    setBookDetails(state, bookDetails) {
      state.bookDetails = bookDetails;
    },
  },
  getters: {
    allBooks: (state) => state.books,
    /* bookDetails: (state) => state.bookDetails, */
  },
});

export default store;
