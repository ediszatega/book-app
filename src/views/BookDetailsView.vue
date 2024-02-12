<script setup>
import BookDetailsComponent from "../components/books/BookDetails.vue";
import SecondaryButtonComponent from "../components/common/SecondaryButton.vue";
</script>

<template>
  <main
    class="mx-auto w-3/5 h-full py-8 flex justify-center bg-background-color md:w-4/5 md:flex-wrap"
  >
    <img
      :src="this.$store.state.bookDetails.image"
      alt="Book Example Image"
      class="basis-2/6 h-full md:w-full"
    />
    <div class="basis-4/6 pl-8 md:pl-0 md:w-full md:grow">
      <div class="text-4xl font-medium">
        {{ this.$store.state.bookDetails.title }}
      </div>
      <div class="text-xl pb-4">
        {{ this.$store.state.bookDetails.subtitle }}
      </div>
      <BookDetailsComponent>
        <template #detail-info> Authors </template>
        <template #detail-info-value>
          {{ this.$store.state.bookDetails.authors }}
        </template>
      </BookDetailsComponent>
      <BookDetailsComponent>
        <template #detail-info> Publisher </template>
        <template #detail-info-value>
          {{ this.$store.state.bookDetails.publisher }}
        </template>
      </BookDetailsComponent>
      <BookDetailsComponent>
        <template #detail-info> Pages </template>
        <template #detail-info-value>
          {{ this.$store.state.bookDetails.pages }}
        </template>
      </BookDetailsComponent>
      <BookDetailsComponent>
        <template #detail-info> Year </template>
        <template #detail-info-value>
          {{ this.$store.state.bookDetails.year }}
        </template>
      </BookDetailsComponent>
      <div class="py-4">
        <p class="font-medium">Description</p>
        <p class="text-justify text-sm">
          {{ this.$store.state.bookDetails.description }}
        </p>
      </div>
      <div class="flex gap-4 sm:flex-col">
        <SecondaryButtonComponent name="More details" />
        <SecondaryButtonComponent name="Download" />
      </div>
    </div>
  </main>
</template>
