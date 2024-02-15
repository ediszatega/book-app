<template>
  <main
    class="mx-auto w-3/5 h-full py-8 flex justify-center bg-background-color md:w-4/5 md:flex-wrap"
  >
    <img
      :src="bookDetails.image"
      alt="Book Example Image"
      class="basis-2/6 h-full md:w-full"
    />
    <div class="basis-4/6 pl-8 md:pl-0 md:w-full md:grow">
      <div class="text-4xl font-medium">{{ bookDetails.title }}</div>
      <div class="text-xl pb-4">{{ bookDetails.subtitle }}</div>
      <BookDetailsComponent
        v-for="(value, key) in details"
        :key="key"
        :detail-info="key"
        :detail-info-value="value"
      />
      <div class="py-4">
        <p class="font-medium">Description</p>
        <p class="text-justify text-sm">{{ bookDetails.description }}</p>
      </div>
      <div class="w-full flex gap-4 sm:flex-col">
        <a :href="bookDetails.url" target="_blank" class="flex grow"
          ><SecondaryButtonComponent name="More details"
        /></a>
        <a :href="bookDetails.download" class="flex grow"
          ><SecondaryButtonComponent name="Download"
        /></a>
        <button
          @click="handleFavourites()"
          class="flex grow items-center justify-center py-2 bg-white border rounded-md border-primary-color text-secondary-color"
        >
          {{ isFavourite ? "Remove from favourites" : "Add to favourites" }}
        </button>
      </div>
    </div>
  </main>
</template>

<script setup>
import { useRoute } from "vue-router";
import BookDetailsComponent from "../components/books/BookDetails.vue";
import SecondaryButtonComponent from "../components/common/SecondaryButton.vue";
</script>

<script>
export default {
  data() {
    return {
      route: useRoute(),
    };
  },
  computed: {
    routeId() {
      return this.route.params.id;
    },
    isFavourite() {
      return this.$store.state.favouriteBooks.some(
        (book) => book.id === this.routeId
      );
    },
    bookDetails() {
      return this.$store.getters.bookDetails;
    },
    details() {
      return {
        Authors: this.bookDetails.authors,
        Publisher: this.bookDetails.publisher,
        Pages: this.bookDetails.pages,
        Year: this.bookDetails.year,
      };
    },
  },
  methods: {
    async handleFavourites() {
      await this.$store.dispatch("manageFavouriteBooks", this.bookDetails);
    },
  },
};
</script>
