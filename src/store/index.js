import { createStore } from "vuex";
import axiosClient from "../axiosClient.js";

const store = createStore({
  state() {
    return {
      searchBooksQuery: "",
      books: [],
      bookDetails: {},
      favouriteBooks: JSON.parse(localStorage.getItem("favouriteBooks")) || [],
      numberOfBooks: 0,
      filterModalOpened: false,
      booksFiltered: [],
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

    async sortBooks(context, selectedSort) {
      const sortedBooks = context.state.books.slice().sort((a, b) => {
        const nameA = a.title.toUpperCase();
        const nameB = b.title.toUpperCase();
        if (selectedSort === "asc") {
          return nameA.localeCompare(nameB);
        } else if (selectedSort === "desc") {
          return nameB.localeCompare(nameA);
        }
      });
      context.commit("sortBooks", sortedBooks);
    },

    async fetchFilteredBooks(context, { year, pages }) {
      const responses = await Promise.all(
        context.state.books.map(async (book) => {
          if (!book.id.includes("X")) {
            const response = await axiosClient.get(`book/${book.id}`);
            return response;
          }
        })
      );

      const booksData = responses
        .filter((response) => response !== undefined)
        .map((response) => response.data);

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

    sortBooks(state, sortedBooks) {
      state.books = sortedBooks;
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
          } else {
            yearCondition = book?.year >= 2021;
          }
        }

        if (pages !== null) {
          if (pages === "100-less") {
            pagesCondition = book.pages <= 100;
          } else if (pages === "101-200") {
            pagesCondition = book.pages >= 101 && book.pages <= 200;
          } else {
            pagesCondition = book.pages > 200;
          }
        }

        return yearCondition && pagesCondition;
      });
      state.books = state.booksFiltered;
      console.log(state.booksFiltered);
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
