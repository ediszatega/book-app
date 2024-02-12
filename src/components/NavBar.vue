<template>
  <header class="sticky top-0 bg-primary-color shadow-lg">
    <nav
      class="mx-auto w-4/5 flex flex items-center justify-center py-6 px-0 sm:flex-col"
    >
      <RouterLink to="/">
        <div
          class="flex items-center basis-1/5 text-2xl font-bold text-secondary-color"
        >
          Book<span class="text-background-color font-bold">Finder</span>
        </div>
      </RouterLink>
      <div class="flex justify-end basis-3/5 text-base">
        <ul>
          <RouterLink to="/" class="hover:underline">Home</RouterLink>
          <RouterLink to="/favourite-books" class="pl-3 hover:underline"
            >Favorites</RouterLink
          >
        </ul>
      </div>
    </nav>
  </header>
</template>

<script setup>
import { RouterLink } from "vue-router";
</script>

<script>
export default {
  name: "NavBarComponent",
};
</script>

<style>
.router-link-active {
  font-weight: bold;
  color: #f7f8f5;
}
</style>
