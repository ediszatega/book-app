<template>
  <header class="sticky top-0 bg-primary-color shadow-lg">
    <nav
      class="container flex flex-col items-center justify-center py-6 px-0 sm:flex-row"
    >
      <RouterLink to="/">
        <div class="flex items-center basis-1/5 text-2xl text-secondary-color">
          Book<span class="text-background-color font-bold">Finder</span>
        </div>
      </RouterLink>
      <div class="flex justify-end basis-4/5 text-base">
        <ul>
          <RouterLink to="/" class="hover:underline">Home</RouterLink>
          <RouterLink to="/s" class="pl-3 hover:underline"
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
