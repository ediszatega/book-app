<script setup></script>

<template>
  <main class="mx-auto w-3/5 h-full flex flex-col bg-background-color md:w-4/5">
    <div
      class="container w-full flex justify-center px-0 py-8 gap-8 sear md:flex-col"
    >
      <input
        class="basis-1/2 pl-3 pr-32 py-2 border rounded-md border-primary-color"
        type="text"
        placeholder="Search books"
      />
      <div class="flex basis-1/2 gap-8 sm:flex-col">
        <button
          class="basis-4/12 px-8 py-2 bg-white border rounded-md border-primary-color"
        >
          Filter
        </button>
        <select
          class="basis-8/12 px-8 py-2 bg-white border rounded-md border-primary-color"
          name="sortBy"
        >
          <option value="default">Relevantnost</option>
          <option value="default">A -> Z</option>
          <option value="default">Z -> A</option>
        </select>
      </div>
    </div>
    <div>
      <p class="text-3xl font-medium pb-8">Search results</p>
    </div>
    <div class="books-container">
      <!-- 1 -->
      <div
        class="bg-white border rounded-md flex flex-col justify-center py-4 hover:border-primary-color"
      >
        <img
          class="w-64 h-52 mx-auto rounded object-cover px-2"
          src="../assets/bookExample.jpg"
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
      <!-- 1 -->
      <div
        class="bg-white border rounded-md flex flex-col justify-center py-4 hover:border-primary-color"
      >
        <img
          class="w-64 h-52 mx-auto rounded object-cover px-2"
          src="../assets/bookExample.jpg"
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
      <!-- 1 -->
      <div
        class="bg-white border rounded-md flex flex-col justify-center py-4 hover:border-primary-color"
      >
        <img
          class="w-64 h-52 mx-auto rounded object-cover px-2"
          src="../assets/bookExample.jpg"
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
      <!-- 1 -->
      <div
        class="bg-white border rounded-md flex flex-col justify-center py-4 hover:border-primary-color"
      >
        <img
          class="w-64 h-52 mx-auto rounded object-cover px-2"
          src="../assets/bookExample.jpg"
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
      <!-- 1 -->
      <div
        class="bg-white border rounded-md flex flex-col justify-center py-4 hover:border-primary-color"
      >
        <img
          class="w-64 h-52 mx-auto rounded object-cover px-2"
          src="../assets/bookExample.jpg"
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
      <!-- 1 -->
      <div
        class="bg-white border rounded-md flex flex-col justify-center py-4 hover:border-primary-color"
      >
        <img
          class="w-64 h-52 mx-auto rounded object-cover px-2"
          src="../assets/bookExample.jpg"
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
      <!-- 1 -->
      <div
        class="bg-white border rounded-md flex flex-col justify-center py-4 hover:border-primary-color"
      >
        <img
          class="w-64 h-52 mx-auto rounded object-cover px-2"
          src="../assets/bookExample.jpg"
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
      <!-- 1 -->
      <div
        class="bg-white border rounded-md flex flex-col justify-center py-4 hover:border-primary-color"
      >
        <img
          class="w-64 h-52 mx-auto rounded object-cover px-2"
          src="../assets/bookExample.jpg"
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
    </div>
  </main>
</template>

<style>
.books-container {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(270px, 1fr));
  gap: 14px;
  padding-bottom: 2rem;
}
</style>
