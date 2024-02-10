<template>
  <div
    class="bg-white border rounded-md flex flex-col justify-center py-4 hover:border-primary-color"
  >
    <img
      class="w-64 h-52 mx-auto rounded object-cover px-2"
      src="../../assets/bookExample.jpg"
      alt="Slika"
    />
    <div class="px-4 pt-2">
      <p class="text-xl font-medium">Naslov knjige</p>
      <p class="text-base text-gray-500">Autor knjige</p>
      <div class="flex flex-wrap gap-2 justify-between pt-3">
        <button
          class="flex grow justify-center py-1 bg-primary-color rounded-md text-white"
        >
          Details
        </button>
        <button
          class="flex grow justify-center py-1 bg-white border rounded-md border-primary-color text-secondary-color"
        >
          Add to favorites
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BookCardComponent",
};
</script>
