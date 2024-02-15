<template>
  <footer class="py-2 mt-auto bg-secondary-color text-background-color">
    <div>
        <p class="text-center p-2">&#169 {{currentYear}} BookFinder. All rights reserved.</p>
    </div>
  </footer>
</template>

<script setup>
import { ref } from 'vue';

</script>

<script>
export default {
  name: "FooterComponent",
  data() {
    return {
      currentYear: ref(new Date().getFullYear())
    }
  }
};
</script>

