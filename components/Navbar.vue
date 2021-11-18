<template>
  <div class="w-full fixed -mt-16 bg-white mb-6">
    <ul class="bg-white h-8 grid grid-cols-7 font-bebas text-center text-l mt-3 align-baseline">
      <li></li>
      <li><NuxtLink to="/">ANA SAYFA</NuxtLink></li>
      <li><NuxtLink to="/">YAZILIM</NuxtLink></li>
      <li><NuxtLink to="/">YOUTUBE</NuxtLink></li>
      <li><NuxtLink to="/">TASARIM</NuxtLink></li>
      <li><NuxtLink to="/">İLETİŞİM</NuxtLink></li>
      <li></li>
    </ul>
    <div class="h-2 grid grid-cols-7">
      <div class="bg-softYellow h-2"></div>
      <div class="bg-yellow h-3 rounded-b-md"></div>
      <div class="bg-softYellow h-2"></div>
      <div class="bg-softYellow h-2"></div>
      <div class="bg-softYellow h-2"></div>
      <div class="bg-softYellow h-2"></div>
      <div class="bg-softYellow h-2"></div>
    </div>
  </div>
</template>

<script>
export default {
    name: 'Navbar'
}
</script>
