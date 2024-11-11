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
      </div>
    </header>



    <!-- Main Content -->
    <main class="bg-[#F4F4F4]">
      <section class="relative flex items-center justify-center bg-cover bg-center mt-0">
        <div class="justify-center z-20 -mt-0">
          <img id="scrolling-pas" class="sm: w-48 px-0 md:w-80 lg:w-auto" src="/public/img/passen.svg" alt="Passen Image">
        </div>
      </section>
      <div class="flex justify-center gap-x-96 overflow-hidden -mt-36">
        <img class="w-1/2 h-auto sm:w-97 lg:w-97" src="/public/img/bush.png">
        <img class="w-1/2 h-auto" src="/public/img/bush.png">
      </div>
      <section class="-mt-48">
        <div class="midpart sm:opacity-0 lg:opacity-100 relative min-h-screen flex items-center justify-center bg-contain bg-center">
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
        <img class="pl-98" id="scrolling-illu1" src="/public/img/batteries.svg">
        <div class="relative flex justify-between mr-48 ml-48 overflow-hidden -mt-12">
          <div class="relative bg-[#6FDB77] text-white rounded-full w-[600px] h-[600px] flex items-center justify-center shadow-md">
            <div class="text-center px-4">
              <h2 class="uppercase"><span class="text-[#6FDB77] font-bold bg-white pr-1 pl-1">Duurzaamheid</span> begint bij ons.</h2>
            <p class="ellipsetext leading-5 max-w-sm leading-relaxed">
              Altijd al willen recyclen, maar is de motivatie niet hoog genoeg om dit te doen? Of bent je altijd al
              gemotiveerd geweest maar ontvang je graag een beloning voor alle moeite? MOCY biedt mogelijkheden om deze motivatie te verhogen, met kortingen, cadeaubonnen of het ondersteunen van goede doelen.
            </p>
            </div>
          </div>
          <div class="relative bg-[#A7DBEF] text-white rounded-full w-[500px] h-[500px] mt-96 flex items-center justify-center shadow-md p-">
            <div class="text-center px-4">
              <h2 class="uppercase">AANVRAGEN PAS.</h2>
              <p class="ellipsetext leading-5 max-w-sm leading-relaxed">
                Vraag nu een pas aan bij uw gemeente en ontvang deze via de post. De pas is onbeperkt geldig en is verbonden aan uw adres.
                <br><br>
                Elke maand hebben we speciale acties bij goede doelen en partners.
              </p>
            </div>
          </div>
        </div>
        <img class="pl-16 pb-96 -mt-96" id="scrolling-illu2"  src="/public/img/lights.svg">
      </section>
      <section>
        <div class="flex justify-center gap-x-96 overflow-hidden -mt-36 z-0">
          <img class="w-1/2 h-auto" src="/public/img/bush.png">
          <img class="w-1/2 h-auto" src="/public/img/bush.png">
        </div>
      </section>
    </main>


    <!-- Footer -->
    <footer class="bg-[#6FDB77] text-white -mt-48 p-4 z-5 relative  ">
      <div class="container flex items-center justify-center space-x-64 p-24 ">
        <img class="w-[270px]" src="/public/img/Logo-White.svg">
        <p><span class="font-bold">Contact</span><br>
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
    const scrollPosition = window.scrollY; // Bepaal de scrollpositie

    // Schaal de afbeelding een beetje op basis van de scrollpositie
    img.style.transform = `translateY(${scrollPosition * 0.1}px)`; // Verschuif de afbeelding licht
  });
})
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