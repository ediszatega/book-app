import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import BookDetailsView from "../views/BookDetailsView.vue";
import FavouriteBooksView from "../views/FavouriteBooksView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/book/:id",
      name: "bookDetails",
      component: BookDetailsView,
    },
    {
      path: "/favourite-books",
      name: "favouriteBooks",
      component: FavouriteBooksView,
    },
  ],
});

export default router;
