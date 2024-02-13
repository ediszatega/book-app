import { createStore } from "vuex";
import axiosClient from "../axiosClient.js";

const store = createStore({
  state() {
    return {
      searchBooksQuery: "",
      books: [],
      bookDetails: {},
      favouriteBooks: JSON.parse(localStorage.getItem("favouriteBooks")),
      sortBy: "",
      numberOfBooks: 0,
    };
  },
  actions: {
    async fetchBooks(context) {
      try {
        const response = await axiosClient.get("recent");
        context.commit("setBooks", response.data);
      } catch (error) {
        console.error("Error fetching books:", error);
      }
    },
    async searchBooks(context, searchQuery) {
      try {
        const response = await axiosClient.get(`search/${searchQuery}`);
        context.commit("setBooks", response.data);
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
    updateSortBy(context, selectedSort) {
      context.commit("setSortBy", selectedSort);
    },

    sortBooks(context, selectedSort) {
      context.commit("sortBooks", selectedSort);
    },

    async resetBooks(context, searchQuery) {
      try {
        if (searchQuery === "") {
          const response = await axiosClient.get("recent");
          context.commit("setBooks", response.data.books);
        } else {
          const response = await axiosClient.get(`search/${searchQuery}`);
          context.commit("setBooks", response.data.books);
        }
      } catch (error) {
        console.error("Error fetching books:", error);
      }
    },
  },
  mutations: {
    setBooks(state, response) {
      state.books = response.books;
      state.numberOfBooks = response.total;
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
    setSortBy(state, selectedSort) {
      state.sortBy = selectedSort;
    },

    sortBooks(state, selectedSort) {
      if (selectedSort === "asc") {
        state.books.sort((a, b) => {
          const nameA = a.title.toUpperCase();
          const nameB = b.title.toUpperCase();
          if (nameA < nameB) {
            return -1;
          }
          if (nameA > nameB) {
            return 1;
          }
          return 0;
        });
      } else if (selectedSort === "desc") {
        state.books.sort((a, b) => {
          const nameA = a.title.toUpperCase();
          const nameB = b.title.toUpperCase();
          if (nameA < nameB) {
            return 1;
          }
          if (nameA > nameB) {
            return -1;
          }
          return 0;
        });
      }
    },
  },
  getters: {
    allBooks: (state) => state.books,
    bookDetails: (state) => state.bookDetails,
    allFavouriteBooks: (state) => state.favouriteBooks,
  },
});

export default store;
