<template>
  <div class="flex flex-col min-h-screen bg-background-color">
    <NavBarComponent />
    <!-- <SearchBarComponent /> -->
    <RouterView />
    <FooterComponent />
  </div>
</template>

<script setup>
import { RouterView } from "vue-router";
import NavBarComponent from "./components/NavBar.vue";
import FooterComponent from "./components/Footer.vue";
</script>

<style scoped></style>
