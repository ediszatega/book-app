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
        .filter((response) => response !== undefined) // Filter out null responses
        .map((response) => response.data); // Extract data from responses

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

    updateFavouriteBooks(state, favouriteBooks) {
      state.favouriteBooks = favouriteBooks;
      state.favouriteBooksCount = favouriteBooks.length;
      localStorage.setItem("favouriteBooks", JSON.stringify(favouriteBooks));
    },
    filterBooks(state, { booksData, year, pages }) {
      state.booksFiltered = booksData.filter((book) => {
        let yearCondition = true;
        let pagesCondition = true;

        if (year !== null) {
          if (year === "before1990") {
            yearCondition = book?.year <= 1990;
          } else if (year === "1991-2010") {
            yearCondition = book?.year >= 1991 && book?.year <= 2010;
          } else if (year === "2011-2020") {
            yearCondition = book?.year >= 2011 && book?.year <= 2020;
          } else {
            yearCondition = book?.year >= 2021;
          }
        }

        if (pages !== null) {
          if (pages === "50-less") {
            pagesCondition = book.pages <= 50;
          } else if (pages === "51-100") {
            pagesCondition = book.pages >= 51 && book.pages <= 100;
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
      return state.favouriteBooks.length;
    },
  },
});

export default store;
