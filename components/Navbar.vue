<template>
  <div class="w-full fixed xl:-mt-16 bg-white mb-6">
    <ul
      class="
        bg-white
        grid
        font-bebas
        align-baseline
        text-center
        lg:h-8 lg:text-l lg:mt-3
        md:h-7 md:grid-cols-7 md:mt-2
        grid-cols-5 sm:h-12 h-9
      "
    >
      <li class="md:block hidden"></li>
      <NuxtLink to="/"><li class="hidden md:block">ANA SAYFA</li></NuxtLink>
      <NuxtLink to="/programming"><li class="hidden md:block">YAZILIM</li></NuxtLink>
      <NuxtLink to="/youtube"><li class="hidden md:block">YOUTUBE</li></NuxtLink>
      <NuxtLink to="/design"><li class="hidden md:block">TASARIM</li></NuxtLink>
      <NuxtLink to="/communication"><li class="hidden md:block">İLETİŞİM</li></NuxtLink>
      <li class="md:block hidden"></li>

</ul>
<ul>
      <NuxtLink to="/"><li class="md:hidden block mx-auto sm:w-7 w-5 pt-1"><img src="../src/icons/home.png"></li></NuxtLink>
      <NuxtLink to="/programming"><li class="md:hidden block mx-auto sm:w-7 w-5 pt-1"><img src="../src/icons/code.png"></li></NuxtLink>
      <NuxtLink to="/youtube"><li class="md:hidden block mx-auto sm:w-7 w-5 pt-1"><img src="../src/icons/youtube.png"></li></NuxtLink>
      <NuxtLink to="/design"><li class="md:hidden block mx-auto sm:w-7 w-5 pt-1"><img src="../src/icons/design.png"></li></NuxtLink>
      <NuxtLink to="/communication"><li class="md:hidden block mx-auto sm:w-7 w-5 pt-1"><img src="../src/icons/phone.png"></li></NuxtLink>
      
    </ul>
    <div class="grid lg:h-2 lg:grid-cols-7 md:h-2 md:grid-cols-7 grid-cols-5">
      <div class="bg-softYellow lg:h-2 md:h-1 md:block hidden"></div>
      <div class="bg-yellow lg:h-2 h-1"></div>
      <div class="bg-softYellow lg:h-2 h-1"></div>
      <div class="bg-softYellow lg:h-2 h-1"></div>
      <div class="bg-softYellow lg:h-2 h-1"></div>
      <div class="bg-softYellow lg:h-2 h-1"></div>
      <div class="bg-softYellow lg:h-2 md:block hidden"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
}
</script>
