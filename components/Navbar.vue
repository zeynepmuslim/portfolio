<template>
  <div class="w-full fixed xl:-mt-16 bg-white mb-6">
    <ul
      class="
        grid
        font-bebas
        align-baseline
        text-center
        lg:h-8 lg:text-l lg:mt-3
        md:h-4 md:grid-cols-7 md:mt-2
        grid-cols-7 sm:h-12 h-9
      "
    >
      <div class="grid grid-rows-2 mt-5">
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
      <div class="grid grid-rows-2 mt-5">
        <li class="md:block hidden pb-1"></li>
        <div class="bg-softYellow lg:h-2 h-1"></div>
      </div>

</ul>
<ul>
      <NuxtLink to="/"><li class="md:hidden block mx-auto sm:w-7 w-5 pt-1"><img src="../src/icons/home.png"></li></NuxtLink>
      <NuxtLink to="/programming"><li class="md:hidden block mx-auto sm:w-7 w-5 pt-1"><img src="../src/icons/code.png"></li></NuxtLink>
      <NuxtLink to="/youtube"><li class="md:hidden block mx-auto sm:w-7 w-5 pt-1"><img src="../src/icons/youtube.png"></li></NuxtLink>
      <NuxtLink to="/design"><li class="md:hidden block mx-auto sm:w-7 w-5 pt-1"><img src="../src/icons/design.png"></li></NuxtLink>
      <NuxtLink to="/communication"><li class="md:hidden block mx-auto sm:w-7 w-5 pt-1"><img src="../src/icons/phone.png"></li></NuxtLink>
      
    </ul>
  
  </div>
</template>

<script>
export default {
  name: 'Navbar',
}
</script>
