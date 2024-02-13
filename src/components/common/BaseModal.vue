<template>
  <div
    @click="closeModal"
    class="absolute w-full bg-secondary-color bg-opacity-30 h-screen top-0 left-0 flex justify-center"
  >
    <div class="py-6 px-8 bg-background-color self-start mt-32 max-w-screen-md">
      <p class="text-2xl font-medium pb-2">Filter</p>
      <div>
        <div class="py-2">
          <p class="pb-1">YEAR</p>
          <input
            type="radio"
            id="before2015"
            name="year"
            value="before2015"
            v-model="selectedYear"
          />
          <label for="before2015">Before 2015</label><br />
          <input
            type="radio"
            id="2016-2020"
            name="year"
            value="2016-2020"
            v-model="selectedYear"
          />
          <label for="2016-2020">2016 - 2020</label><br />
          <input
            type="radio"
            id="after2021"
            name="year"
            value="after2021"
            v-model="selectedYear"
          />
          <label for="after2021">After 2021</label><br />
        </div>
        <div class="py-2">
          <p class="pb-1">PAGES</p>
          <input
            type="radio"
            id="100-less"
            name="pages"
            value="100-less"
            v-model="selectedPages"
          />
          <label for="100-less">100 and less</label><br />
          <input
            type="radio"
            id="101-200"
            name="pages"
            value="101-200"
            v-model="selectedPages"
          />
          <label for="101-200">101 - 200</label><br />
          <input
            type="radio"
            id="more-than-200"
            name="pages"
            value="more-than-200"
            v-model="selectedPages"
          />
          <label for="more-than-200">More than 200</label><br />
        </div>
      </div>
      <div class="flex gap-4 grow mt-4">
        <button
          @click="filterData"
          class="basis-1/2 rounded-md text-white bg-primary-color py-2 px-8"
        >
          Filter
        </button>
        <button
          @click="closeModal"
          class="basis-1/2 rounded-md text-white bg-secondary-color py-2 px-8"
        >
          Close
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BaseModalComponent",
  data() {
    return {
      selectedYear: "",
      selectedPages: "",
    };
  },
  methods: {
    closeModal(event) {
      if (
        event.target === event.currentTarget ||
        (event.target.tagName.toLowerCase() === "button" &&
          event.target.textContent === "Close")
      ) {
        this.$store.state.filterModalOpened = false;
      }
    },
    filterData() {
      this.$store.state.filterModalOpened = false;
      this.$store.dispatch("fetchFilteredBooks", {
        year: this.selectedYear,
        pages: this.selectedPages,
      });
    },
  },
};
</script>
