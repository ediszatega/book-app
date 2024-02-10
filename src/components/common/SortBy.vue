<template>
  <select
    class="basis-8/12 px-8 py-2 bg-white border rounded-md border-primary-color"
    name="sortBy"
  >
    <option value="default">Relevantnost</option>
    <option value="default">A -> Z</option>
    <option value="default">Z -> A</option>
  </select>
</template>

<script>
export default {
  name: "SortByComponent",
};
</script>
