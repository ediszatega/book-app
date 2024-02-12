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
    <div
      class="container w-full flex justify-center px-0 py-8 gap-8 sear md:flex-col"
    >
      <SearchBarComponent />
      <div class="flex basis-1/2 gap-8 sm:flex-col">
        <SecondaryButtonComponent name="Filter" />
        <SortByComponent />
      </div>
    </div>
    <PageTitleComponent
      title="Favourite books
    "
    />
    <BooksContainerComponent :booksArray="favouriteBooksLS" />
  </main>
</template>
