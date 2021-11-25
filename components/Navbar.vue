<template>
  <div class="w-full fixed xl:-mt-16 bg-white mb-6">
    <ul
      class="
        md:grid
        font-bebas
        align-baseline
        text-center
        lg:h-8 lg:text-l lg:mt-3
        md:h-4 md:grid-cols-7 md:mt-2
        grid-cols-7 sm:h-12 h-9
        hidden
      "
    >
      <div class="grid grid-rows-2 lg:mt-5 mt-6">
        <li class="md:block hidden"></li>
        <div class="bg-softYellow lg:h-2 h-1"></div>
      </div>
      <NuxtLink class="h-7" to="/"><div class="grid grid-rows-2">
        <li class="hidden md:block pb-1">ANA SAYFA</li>
        <div class="bg-softYellow lg:h-2 h-1"></div>
      </div></NuxtLink>
      <NuxtLink class="h-7" to="/programming"><div class="grid grid-rows-2">
        <li class="hidden md:block pb-1">YAZILIM</li>
        <div class="bg-softYellow lg:h-2 h-1"></div>
      </div></NuxtLink>
      <NuxtLink class="h-7" to="/youtube"><div class="grid grid-rows-2">
        <li class="hidden md:block pb-1">YOUTUBE</li>
        <div class="bg-softYellow lg:h-2 h-1"></div>
      </div></NuxtLink>
      <NuxtLink class="h-7" to="/design"><div class="grid grid-rows-2">
        <li class="hidden md:block pb-1">TASARIM</li>
        <div class="bg-softYellow lg:h-2 h-1"></div>
      </div></NuxtLink>
      <NuxtLink class="h-7" to="/communication"><div class="grid grid-rows-2">
        <li class="hidden md:block pb-1">İLETİŞİM</li>
        <div class="bg-softYellow lg:h-2 h-1"></div>
      </div></NuxtLink>
      <div class="grid grid-rows-2 lg:mt-5 mt-6">
        <li class="md:block hidden pb-1"></li>
        <div class="bg-softYellow lg:h-2 h-1"></div>
      </div>

</ul>
<ul
      class="
        grid
        font-bebas
        align-baseline
        text-center
        grid-cols-5 
        md:hidden
        
      "
    >
      <NuxtLink to="/"><div class="h-9 grid grid-rows-2 ">
        <li class="md:hidden block mx-auto p-1.5 h-6"><img class="h-6" src="../src/icons/home.png"></li>
        <div class="bg-softYellow h-1 mt-4"></div>
      </div></NuxtLink>
      <NuxtLink to="/programming"><div class="h-9 grid grid-rows-2 ">
        <li class="md:hidden block mx-auto p-1.5 h-6"><img class="h-6" src="../src/icons/code.png"></li>
        <div class="bg-softYellow h-1 mt-4"></div>
      </div></NuxtLink>
      <NuxtLink to="/youtube"><div class="h-9 grid grid-rows-2">
        <li class="md:hidden block mx-auto p-1.5 h-6"><img class="h-6" src="../src/icons/youtube.png"></li>
        <div class="bg-softYellow h-1 mt-4"></div>
      </div></NuxtLink>
      <NuxtLink to="/design"><div class="h-9 grid grid-rows-2">
        <li class="md:hidden block mx-auto p-1.5 h-6"><img class="h-6" src="../src/icons/design.png"></li>
        <div class="bg-softYellow h-1 mt-4"></div>
      </div></NuxtLink>
      <NuxtLink to="/communication"><div class="h-9 grid grid-rows-2">
        <li class="md:hidden block mx-auto p-1.5 h-6"><img class="h-6" src="../src/icons/phone.png"></li>
        <div class="bg-softYellow h-1 mt-4"></div>
      </div></NuxtLink>

</ul>
  
  </div>
</template>

<script>
export default {
  name: 'Navbar',
}
</script>
