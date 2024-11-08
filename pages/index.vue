<template>
  <!-- Header -->
  <div class="">
      <header class="relative min-h-screen flex items-center justify-center bg-cover bg-center">
        <div class="absolute inset-0 bg-black opacity-50"></div>
        <div class="relative z-10 text-center">
          <div class="justify-center"><img class="mx-auto w-96  " src="/public/img/Logo-White.svg"></div>
          <h1 class="uppercase pb-0"><span class="text-[#6FDB77]">Mo</span>tiveer re<span class="text-[#6FDB77]">cy</span>ling</h1>
          <h2 class="uppercase pt-0"><span class="text-[#6FDB77] bg-white">&nbsp;Duurzaamheid&nbsp;</span> begint bij ons.</h2>
        </div>
      </header>


    <!-- Main Content -->
    <main class="">
      <section class="relative flex items-center justify-center bg-cover bg-center mt-0" >
        <div class="justify-center -mt-20"><img src="/public/img/passen.svg"></div>
      </section>
      <div class="flex justify-center gap-x-4">
        <img class="w-1/2 h-auto" src="/public/img/bush.png">
        <img class="w-1/2 h-auto" src="/public/img/bush.png">
      </div>
      <section>
        <div><img src="/public/img/mid-field.jpg"></div>
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