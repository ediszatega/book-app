import { createStore } from "vuex";
import axiosClient from "../axiosClient.js";

const store = createStore({
  state() {
    return {
      searchBooksQuery: "",
      books: [],
      bookDetails: JSON.parse(localStorage.getItem("bookDetails")) || {},
      favouriteBooks: JSON.parse(localStorage.getItem("favouriteBooks")) || [],
      numberOfBooks: 0,
      selectedFilters: {},
      filterModalOpened: false,
      booksFiltered: [],
    };
  },
  actions: {
    async fetchBooks(context) {
      try {
        const response = await axiosClient.get("recent");
        context.state.searchBooksQuery = "";
        context.commit("setBooks", response.data);
      } catch (error) {
        console.error("Error fetching books:", error);
      }
    },

    async searchBooks(context, searchQuery) {
      try {
        const response = await axiosClient.get(`search/${searchQuery}`);
        context.state.searchBooksQuery = searchQuery;
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
      const index = context.state.favouriteBooks.findIndex(
        (book) => book.id === favouriteBook.id
      );

      if (index !== -1) {
        context.commit("removeFromFavourites", index);
      } else {
        context.commit("addToFavourites", favouriteBook);
      }
    },

    async sortBooks(context, selectedSort) {
      context.commit("sortBooks", selectedSort);
    },

    async fetchFilteredBooks(context, { year, pages }) {
      const booksData = [];
      for (const book of context.state.books) {
        if (!book.id.includes("X")) {
          const response = await axiosClient.get(`book/${book.id}`);
          booksData.push(response.data);
        }
      }
      context.commit("filterBooks", { booksData, year, pages });
    },
  },
  mutations: {
    setBooks(state, response) {
      state.books = response.books;
      state.numberOfBooks = response.total;
    },

    setBookDetails(state, bookDetails) {
      state.bookDetails = bookDetails;

      localStorage.setItem("bookDetails", JSON.stringify(state.bookDetails));
    },

    addToFavourites(state, book) {
      state.favouriteBooks.push(book);
      localStorage.setItem(
        "favouriteBooks",
        JSON.stringify(state.favouriteBooks)
      );
    },
    removeFromFavourites(state, index) {
      state.favouriteBooks.splice(index, 1);
      localStorage.setItem(
        "favouriteBooks",
        JSON.stringify(state.favouriteBooks)
      );
    },

    sortBooks(state, selectedSort) {
      state.books.sort((a, b) => {
        const nameA = a.title.toUpperCase();
        const nameB = b.title.toUpperCase();
        return selectedSort === "asc"
          ? nameA.localeCompare(nameB)
          : nameB.localeCompare(nameA);
      });
    },

    filterBooks(state, { booksData, year, pages }) {
      state.booksFiltered = booksData.filter((book) => {
        let yearCondition = true;
        let pagesCondition = true;

        if (year !== null) {
          if (year === "before2015") {
            yearCondition = book?.year <= 2015;
          } else if (year === "2016-2020") {
            yearCondition = book?.year >= 2016 && book?.year <= 2020;
          } else if (year === "after2021") {
            yearCondition = book?.year >= 2021;
          }
        }

        if (pages !== null) {
          if (pages === "100-less") {
            pagesCondition = book.pages <= 100;
          } else if (pages === "101-200") {
            pagesCondition = book.pages >= 101 && book.pages <= 200;
          } else if (pages === "more-than-200") {
            pagesCondition = book.pages > 200;
          }
        }

        return yearCondition && pagesCondition;
      });
      state.books = state.booksFiltered;
    },
  },
  getters: {
    allBooks: (state) => state.books,
    bookDetails: (state) => state.bookDetails,
    allFavouriteBooks: (state) => state.favouriteBooks,
    favouriteBooksCount(state) {
      return state.favouriteBooks.length || 0;
    },
  },
});

export default store;
