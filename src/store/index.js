import { createStore } from "vuex";
import axiosClient from "../axiosClient.js";

const store = createStore({
  state() {
    return {
      searchBooksQuery: "",
      books: [],
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
  },
  mutations: {
    setBooks(state, books) {
      state.books = books;
    },
  },
  getters: {
    allBooks: (state) => state.books,
  },
});

export default store;
