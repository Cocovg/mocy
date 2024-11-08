<template>
  <!-- Header -->
  <div class="">
      <header class="relative min-h-screen flex items-center justify-center bg-cover bg-center">
        <div class="absolute inset-0 bg-[#5B8264] opacity-40"></div>
        <div class="relative z-10 text-center">
          <div class="justify-center"><img class="mx-auto w-96  " src="/public/img/Logo-White.svg"></div>
          <h1 class="uppercase pb-0"><span class="text-[#6FDB77]">Mo</span>tiveer re<span class="text-[#6FDB77]">cy</span>ling</h1>
          <h2 class="uppercase pt-0"><span class="text-[#6FDB77] bg-white">&nbsp;Duurzaamheid&nbsp;</span> begint bij ons.</h2>
        </div>
      </header>


    <!-- Main Content -->
    <main class="">
      <section class="relative flex items-center justify-center bg-cover bg-center mt-0">
        <div class="justify-center -mt-20">
          <img id="scrolling-img" src="/public/img/passen.svg" alt="Passen Image">
        </div>
      </section>
      <div class="flex justify-center gap-x-96 overflow-hidden -mt-36">
        <img class="w-1/2 h-auto" src="/public/img/bush.png">
        <img class="w-1/2 h-auto" src="/public/img/bush.png">
      </div>
      <section class="-mt-48">
        <div class="midpart relative min-h-screen flex items-center justify-center bg-contain bg-center">
          <div class="relative z-10 text-center flex flex-col items-center">
            <div class="relative">
              <img src="/public/img/mid-square.svg" alt="Mid Square" class="z-10 mb-4">
              <div class="absolute inset-0 flex flex-col items-center justify-center p-6 text-white">
                <h3 class="uppercase bg-white pr-1 pl-1">Waarom MOCY?</h3>
                <p class="midtext leading-5 text-justify max-w-sm leading-relaxed pt-8">
                  <span class="text-[#6FDB77] font-bold bg-white pr-1 pl-1">MOCY</span> is een bedrijf dat achter duurzaamheid staat. Door middel van de <span class="text-[#6FDB77] font-bold bg-white pr-1 pl-1">MOCY RECYCLE PAS</span>, is het mogelijk producten te recyclen tegen een beloning die bij jou past! Denk hierbij aan kortingsbonnen, cadeaukaarten of ondersteun goede doelen.
                  Wij bij <span class="text-[#6FDB77] font-bold bg-white pr-1 pl-1">MOCY</span> willen mensen motiveren om te recyclen. Zo zijn bijvoorbeeld batterijen en lampen gemaakt van meerdere materialen die weer kunnen worden gebruikt voor nieuwe producten, waarbij circa 92% van de grondstoffen van lampen wordt hergebruikt.
                  <span class="text-[#6FDB77] font-bold bg-white pr-1 pl-1">MOCY</span> biedt een makkelijke en belonende motivatie voor recyclen. Hierdoor denken wij allemaal een klein beetje meer aan duurzaamheid en de toekomst van ons milieu.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div>
          <div class="ellipse1"></div>
          <div class="ellipse2"></div>
        </div>
      </section>
      <div class="flex justify-center gap-x-96 overflow-hidden -mt-36">
        <img class="w-1/2 h-auto" src="/public/img/bush.png">
        <img class="w-1/2 h-auto" src="/public/img/bush.png">
      </div>
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
// JavaScript om de afbeelding te verschuiven bij scrollen
window.addEventListener('scroll', function() {
  const img = document.getElementById('scrolling-img');
  const scrollPosition = window.scrollY; // Bepaal de scrollpositie

  // Schaal de afbeelding een beetje op basis van de scrollpositie
  img.style.transform = `translateY(${scrollPosition * 0.1}px)`; // Verschuif de afbeelding licht
});
</script>