<template>
  <div
    class="bg-white border rounded-md flex flex-col justify-center py-4 hover:border-primary-color"
  >
    <img
      class="w-64 h-52 mx-auto rounded object-cover px-2"
      :src="bookData.image"
      alt="Slika"
    />
    <div class="px-6 pt-2">
      <p class="text-xl font-medium">{{ bookData.title }}</p>
      <p class="text-base text-gray-500">{{ bookData.author }}</p>
      <div class="flex flex-wrap gap-2 justify-between pt-3">
        <RouterLink
          :to="`/book/${bookData.id}`"
          @click="loadBookDetails(bookData.id)"
          class="flex grow justify-center py-1 bg-primary-color rounded-md text-white"
        >
          Details
        </RouterLink>
        <button
          @click="handleFavourites(bookData)"
          class="flex grow justify-center py-1 bg-white border rounded-md border-primary-color text-secondary-color"
        >
          {{ isFavourite ? "Remove from favourites" : "Add to favourites" }}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { RouterLink } from "vue-router";

export default {
  name: "BookCardComponent",
  components: { RouterLink },
  props: {
    bookData: {
      required: true,
    },
  },
  computed: {
    isFavourite() {
      return this.$store.state.favouriteBooks.some(
        (book) => book.id === this.bookData.id
      );
    },
  },
  methods: {
    async loadBookDetails(id) {
      this.$store.state.bookDetails = {}; //check if the state reloads faster
      await this.$store.dispatch("fetchBookDetails", id);
    },
    async handleFavourites(book) {
      await this.$store.dispatch("manageFavouriteBooks", book);
    },
  },
};
</script>
