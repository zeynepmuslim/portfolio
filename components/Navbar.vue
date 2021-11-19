<template>
  <div class="w-full fixed xl:-mt-16 bg-white mb-6">
    <ul
      class="
        bg-white
        grid
        font-bebas
        align-baseline
        text-center
        xl:h-8 xl:grid-cols-7 xl:text-l xl:mt-3
        lg:h-8 lg:grid-cols-7 lg:text-l lg:mt-3
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
    <div class="grid xl:h-2 xl:grid-cols-7 lg:h-2 lg:grid-cols-7 ">
      <div class="bg-softYellow xl:h-2 lg:h-2"></div>
      <div class="bg-yellow rounded-b-md xl:h-3 lg:h-3"></div>
      <div class="bg-softYellow xl:h-2 lg:h-2"></div>
      <div class="bg-softYellow xl:h-2 lg:h-2"></div>
      <div class="bg-softYellow xl:h-2 lg:h-2"></div>
      <div class="bg-softYellow xl:h-2 lg:h-2"></div>
      <div class="bg-softYellow xl:h-2 lg:h-2"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
}
</script>
