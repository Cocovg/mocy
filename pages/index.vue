<template>
  <div class="w-full bg-gray-100 flex flex-col">
    <!-- Header -->
    <div>
      <header class=""><img src="/public/img/header.jpg"></header>
      <img src="">
    </div>
    <!-- Main Content -->
    <main class="flex-1 container mx-auto p-6">
      <section class="bg-white shadow-lg rounded-lg p-6">
        <h2 class="text-2xl font-semibold mb-4">Welkom op de Hoofdpagina</h2>
        <p class="text-gray-700 mb-6">Dit is een voorbeeld van een website gemaakt met Nuxt 3 en gestyled met Tailwind CSS.</p>

        <p class="text-gray-700 mb-4">Met deze setup kun je eenvoudig responsive en moderne webpagina's maken. Tailwind CSS biedt utility-first klassen waarmee je snel kunt stylen zonder extra CSS te schrijven.</p>

        <button class="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
          Leer Meer
        </button>
      </section>
    </main>

    <!-- Footer -->
    <footer class="bg-gray-800 text-white p-4">
      <div class="container mx-auto text-center">
        <p>&copy; 2023 Mijn Nuxt + Tailwind Website</p>
      </div>
    </footer>
  </div>
</template>


<script setup lang="ts">
</script>