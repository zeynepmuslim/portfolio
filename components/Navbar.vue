<template>
  <div class="w-full fixed xl:-mt-16 bg-white mb-6">
    <ul
      class="
        bg-white
        grid
        font-bebas
        align-baseline
        text-center
        lg:h-8 lg:grid-cols-7 lg:text-l lg:mt-3
        md:h-7 md:grid-cols-7 lg:text-l md:mt-2
      "
    >
      <li></li>
      <li><NuxtLink to="/">ANA SAYFA</NuxtLink></li>
      <li><NuxtLink to="/">YAZILIM</NuxtLink></li>
      <li><NuxtLink to="/">YOUTUBE</NuxtLink></li>
      <li><NuxtLink to="/">TASARIM</NuxtLink></li>
      <li><NuxtLink to="/">İLETİŞİM</NuxtLink></li>
      <li></li>
    </ul>
    <div class="grid lg:h-2 lg:grid-cols-7 md:h-2 md:grid-cols-7">
      <div class="bg-softYellow lg:h-2 md:h-1.5"></div>
      <div class="bg-yellow rounded-b-md lg:h-3 md:h-2"></div>
      <div class="bg-softYellow lg:h-2 md:h-1.5"></div>
      <div class="bg-softYellow lg:h-2 md:h-1.5"></div>
      <div class="bg-softYellow lg:h-2 md:h-1.5"></div>
      <div class="bg-softYellow lg:h-2 md:h-1.5"></div>
      <div class="bg-softYellow lg:h-2 md:h-1.5"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
}
</script>
