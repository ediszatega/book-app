<script setup>
import BookDetailsComponent from "../components/books/BookDetails.vue";
import SecondaryButtonComponent from "../components/common/SecondaryButton.vue";
</script>

<template>
  <main
    class="mx-auto w-3/5 h-full py-8 flex justify-center bg-background-color md:w-4/5 md:flex-wrap"
  >
    <img
      src="../assets/bookExample.jpg"
      alt="Book Example Image"
      class="basis-2/6 h-full md:w-full"
    />
    <div class="basis-4/6 pl-8 md:pl-0 md:w-full md:grow">
      <div class="text-4xl font-medium">Book title</div>
      <div class="text-xl pb-4">Book subtitle</div>
      <BookDetailsComponent>
        <template #detail-info> Authors </template>
        <template #detail-info-value> Ime Prezime </template>
      </BookDetailsComponent>
      <BookDetailsComponent>
        <template #detail-info> Publisher </template>
        <template #detail-info-value> Ime izdavaca </template>
      </BookDetailsComponent>
      <BookDetailsComponent>
        <template #detail-info> Pages </template>
        <template #detail-info-value> 123 </template>
      </BookDetailsComponent>
      <BookDetailsComponent>
        <template #detail-info> Year </template>
        <template #detail-info-value> 2024 </template>
      </BookDetailsComponent>
      <div class="py-4">
        <p class="font-medium">Description</p>
        <p class="text-justify text-sm">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
      </div>
      <div class="flex gap-4 sm:flex-col">
        <SecondaryButtonComponent name="More details" />
        <SecondaryButtonComponent name="Download" />
      </div>
    </div>
  </main>
</template>
