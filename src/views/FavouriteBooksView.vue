<script setup>
import SearchBarComponent from "../components/common/SearchBar.vue";
import SecondaryButtonComponent from "../components/common/SecondaryButton.vue";
import SortByComponent from "../components/common/SortBy.vue";
import PageTitleComponent from "../components/common/PageTitle.vue";
import BooksContainerComponent from "../components/books/BooksContainer.vue";

const favouriteBooksLS = JSON.parse(localStorage.getItem("favouriteBooks"));
</script>

<template>
  <main class="mx-auto w-3/5 h-full flex flex-col bg-background-color md:w-4/5">
    <PageTitleComponent
      title="Favourite books
    "
    />
    <BooksContainerComponent :booksArray="favouriteBooksLS" />
  </main>
</template>
