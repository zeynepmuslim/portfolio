<template>
  <div class="max-w-full">
    <ul class="bg-white h-7 grid grid-cols-7 font-bebas text-center text-l mt-1 align-baseline">
      <li></li>
      <li><NuxtLink to="/">ANA SAYFA</NuxtLink></li>
      <li><NuxtLink to="/">YAZILIM</NuxtLink></li>
      <li><NuxtLink to="/">YOUTUBE</NuxtLink></li>
      <li><NuxtLink to="/">TASARIM</NuxtLink></li>
      <li><NuxtLink to="/">İLETİŞİM</NuxtLink></li>
      <li></li>
    </ul>
    <div class="h-2 grid grid-cols-7">
      <div class="bg-softYellow h-1.5"></div>
      <div class="bg-yellow h-2.5 rounded-b-md"></div>
      <div class="bg-softYellow h-1.5"></div>
      <div class="bg-softYellow h-1.5"></div>
      <div class="bg-softYellow h-1.5"></div>
      <div class="bg-softYellow h-1.5"></div>
      <div class="bg-softYellow h-1.5"></div>
    </div>
  </div>
</template>

<script>
export default {
    name: 'Navbar'
}
</script>
