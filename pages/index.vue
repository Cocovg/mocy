<template>
  <!-- Header -->
  <div class=" overflow-hidden">
    <header class="relative min-h-screen flex items-center justify-center bg-cover bg-center px-4 sm:px-0 md:px-8 lg:px-16">
      <div class="absolute inset-0 bg-[#5B8264] opacity-40"></div>
      <div class="relative z-10 text-center">
        <div class="justify-center">
          <img class="mx-auto w-48 sm:w-64 md:w-80 lg:w-96" src="/public/img/Logo-White.svg">
        </div>
        <h1 class="uppercase text-lg sm:text-xl md:text-2xl lg:text-7xl pb-0">
          <span class="text-[#6FDB77]">Mo</span>tiveer re<span class="text-[#6FDB77]">cy</span>ling
        </h1>
        <h2 class="uppercase text-sm sm:text-base md:text-xl lg:text-2xl pt-0">
          <span class="text-[#6FDB77] bg-white px-2">Duurzaamheid</span> begint bij ons.
        </h2>
        <div class="justify-center relative z-10 text-center block lg:hidden">
          <img class="mx-auto flex flex-end mt-24 sm:w-16 md:w-80 lg:w-16 opacity-60" src="/public/img/arrow.svg">
        </div>
      </div>
    </header>


    <!-- Main Content -->
    <main class="bg-[#F4F4F4]">
      <br>
      <section class="relative flex items-center justify-center bg-cover bg-center mt-0">
      <div class="justify-center z-20 sm:mt-4 md:mt-8 lg:-mt-24">
        <img id="scrolling-pas" class="w-48 lg:px-0 md:w-80 lg:w-auto" src="/public/img/passen.svg" alt="Passen Image">
      </div>
    </section>

      <div class="flex justify-center gap-x-96 overflow-hidden lg:-mt-36 ">
        <img class="w-1/2 h-auto sm:w-97 lg:w-97 hidden lg:block" src="/public/img/bush.png">
        <img class="w-1/2 h-auto hidden lg:block" src="/public/img/bush.png">
      </div>
      <section class=" sm:mt-12 lg:-mt-48">
      <div class="relative">
        <!-- Field image: Alleen zichtbaar op desktop (lg+) -->
        <img class="hidden lg:block absolute pt-20 w-full min-h-screen bg-cover bg-center z-0" src="/public/img/mid-field.svg" alt="Field Image">

        <!-- Inhoud (square en tekst) komt boven de field image (alleen op desktop) -->
        <div class="relative z-10 lg:text-center flex flex-col lg:items-center">
        <div class="relative max-w-3xl">
          <img src="/public/img/mid-square.svg" alt="Mid Square" class="hidden lg:block z-10 mb-4 lg:mt-48">
          <div class="lg:absolute lg:inset-0 flex flex-col items-center justify-center p-6 lg:p-6 z-20 lg:mt-48">
            <h3 class="uppercase bg-white pr-1 pl-1 sm:text-l md:text-base lg:text-2xl">Waarom MOCY?</h3>
            <p class="midtext sm:text-sm md:text-base leading-5 text-justify max-w-sm leading-relaxed pt-8 sm:text-blue-700 md:text-white sm:px-4">
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
        <img class="pl-98 hidden lg:block" id="scrolling-illu1" src="/public/img/batteries.svg">
        <div class="block lg:hidden relative sm:mt-24 lg:mt-0">
          <img class="absolute w-full h-auto -mt-24" src="/public/img/bush.png">
        </div>
        <div class="relative md:flex md:justify-between md:mr-48 md:ml-48  overflow-hidden mt-12">
          <div class="relative bg-[#6FDB77] text-white md:rounded-full sm:w-[75px] sm:h-[75px] md:w-[600px] md:h-[600px] flex items-center justify-center shadow-md p-6 md:p-8 ">
            <div class="text-center lg:px-4">
              <h2 class="uppercase">
                <span class="text-[#6FDB77] font-bold bg-white pr-1 pl-1">Duurzaamheid</span> begint bij ons.
              </h2>
              <p class="ellipsetext leading-5 max-w-sm leading-relaxed">
                Altijd al willen recyclen, maar is de motivatie niet hoog genoeg om dit te doen? Of bent je altijd al
                gemotiveerd geweest maar ontvang je graag een beloning voor alle moeite? MOCY biedt mogelijkheden om deze motivatie te verhogen, met kortingen, cadeaubonnen of het ondersteunen van goede doelen.
              </p>
            </div>
          </div>
          <div class="relative bg-[#A7DBEF] text-white md:rounded-full sm:w-[75px] sm:h-[75px] md:w-[500px] md:h-[500px] md:mt-96 flex items-center justify-center shadow-md p-6 md:p-8 ">
            <div class="text-center px-4">
              <h2 class="uppercase">AANVRAGEN PAS.</h2>
              <p class="ellipsetext leading-5 max-w-sm leading-relaxed">
                Vraag nu een pas aan bij uw locale supermarkt, of locatie waar u uw spullen wilt inleveren.
                <br><br>
                Nadat u uw gegevens heeft ingevuld kunt u gebruikt maken van de pas!
              </p>
            </div>
          </div>

        </div>
        <img class="pl-16 pb-96 -mt-96 hidden lg:block" id="scrolling-illu2"  src="/public/img/lights.svg">
      </section>
      <section>
        <div class="flex justify-center gap-x-96 overflow-hidden -mt-36 z-0">
          <img class="w-1/2 h-auto" src="/public/img/bush.png">
          <img class="w-1/2 h-auto" src="/public/img/bush.png">
        </div>
      </section>
    </main>
    <div class="block lg:hidden">
      <img src="/public/img/bush.png">
    </div>

    <!-- Footer -->
    <footer class="bg-[#6FDB77] text-white -mt-48 p-4 z-5 relative">
      <div class="container flex flex-col md:flex-row items-center justify-center gap-8 sm:gap-64 p-8">
        <img class="w-32 sm:w-48 lg:w-64" src="/public/img/Logo-White.svg">
        <p class="text-center md:text-left">
          <span class="font-bold">Contact</span><br>
          Postbus 999<br>
          1234 AB Woonplaats<br>
          info@MOCY.com<br>
          123-12345678
        </p>
      </div>
    </footer>

  </div>
</template>


<script setup lang="ts">
onMounted(() => {
  // JavaScript om de afbeelding te verschuiven bij scrollen
  window.addEventListener('scroll', function() {
    const img = document.getElementById('scrolling-pas');
    const scrollPosition = window.scrollY;

    // Check if screen width is greater than 768px before applying transform
    if (window.innerWidth > 768) {
      img.style.transform = `translateY(${scrollPosition * 0.2}px)`; // Move image slightly
    } else {
      // Reset transformation on mobile
      img.style.transform = 'translateY(0)';
    }
  });

  // Optional: Add an event listener to reset transform on window resize
  window.addEventListener('resize', function() {
    const img = document.getElementById('scrolling-pas');
    if (window.innerWidth <= 768) {
      img.style.transform = 'translateY(0)';
    }
  });
});
onMounted(() => {
  // JavaScript om de afbeelding te verschuiven bij scrollen
  window.addEventListener('scroll', function() {
    const img = document.getElementById('scrolling-illu1');
    const scrollPosition = window.scrollY; // Bepaal de scrollpositie

    // Schaal de afbeelding een beetje op basis van de scrollpositie
    img.style.transform = `translateY(${scrollPosition * 0.1}px)`; // Verschuif de afbeelding licht
  });
window.addEventListener('scroll', function() {
  const img = document.getElementById('scrolling-illu2');
  const scrollPosition = window.scrollY; // Bepaal de scrollpositie

  // Schaal de afbeelding een beetje op basis van de scrollpositie
  img.style.transform = `translateY(${scrollPosition * 0.1}px)`; // Verschuif de afbeelding licht
});
})

</script>