<template>
  <div class="w-full bg-white z-50">
    <ul
      class="
        md:grid
        font-bebas
        align-baseline
        text-center
        lg:h-8 lg:mt-3
        md:h-4 md:mt-2
        grid-cols-7
        sm:h-12
        h-9
        hidden
      "
    >
      <div class="row-2 lg:mt-5 mt-6 bg-white">
        <li class="md:block hidden"></li>
        <div class="bg-softYellow line-s"></div>
      </div>
      <NuxtLink class="nav-h bg-white" to="/"
        ><div class="row-2">
          <li class="text-block">Ana sayfa</li>
          <div class="bg-softYellow line-s"></div></div
      ></NuxtLink>
      <NuxtLink class="nav-h bg-white" to="/programming"
        ><div class="row-2">
          <li class="text-block">YAZILIM</li>
          <div class="bg-softYellow line-s"></div></div
      ></NuxtLink>
      <NuxtLink class="nav-h bg-white" to="/youtube"
        ><div class="row-2">
          <li class="text-block">YOUTUBE</li>
          <div class="bg-softYellow line-s"></div></div
      ></NuxtLink>
      <NuxtLink class="nav-h bg-white" to="/design"
        ><div class="row-2">
          <li class="text-block">TASARIM</li>
          <div class="bg-softYellow line-s"></div></div
      ></NuxtLink>
      <NuxtLink class="nav-h bg-white" to="/communication"
        ><div class="row-2">
          <li class="text-block">İLETİŞİM</li>
          <div class="bg-softYellow line-s"></div></div
      ></NuxtLink>
      <div class="grid grid-rows-2 lg:mt-5 mt-6 bg-white">
        <li class="md:block hidden pb-1"></li>
        <div class="bg-softYellow line-s"></div>
      </div>
    </ul>
    <ul
      class="grid font-bebas align-baseline text-center grid-cols-5 md:hidden"
    >
      <NuxtLink to="/"
        ><div class="nav-h-grid-mobile">
          <li class="icon-mobile">
            <img class="img-h" src="/icons/navbar/home.svg" />
          </li>
          <div class="bg-softYellow line-mobile"></div></div
      ></NuxtLink>
      <NuxtLink to="/programming"
        ><div class="nav-h-grid-mobile">
          <li class="icon-mobile">
            <img class="img-h" src="/icons/navbar/code.svg" />
          </li>
          <div class="bg-softYellow line-mobile"></div></div
      ></NuxtLink>
      <NuxtLink to="/youtube"
        ><div class="nav-h-grid-mobile">
          <li class="icon-mobile">
            <img class="img-h" src="/icons/navbar/youtube.svg" />
          </li>
          <div class="bg-softYellow line-mobile"></div></div
      ></NuxtLink>
      <NuxtLink to="/design"
        ><div class="nav-h-grid-mobile">
          <li class="icon-mobile">
            <img class="img-h" src="/icons/navbar/design.svg" />
          </li>
          <div class="bg-softYellow line-mobile"></div></div
      ></NuxtLink>
      <NuxtLink to="/communication"
        ><div class="nav-h-grid-mobile">
          <li class="icon-mobile">
            <img class="img-h" src="/icons/navbar/phone.svg" />
          </li>
          <div class="bg-softYellow line-mobile"></div></div
      ></NuxtLink>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
}
</script>

<style scoped>
.line-s {
  @apply lg:h-2 h-1;
}
.text-block {
  @apply hidden md:block pb-1;
}
.row-2 {
  @apply grid grid-rows-2;
}
.nav-h {
  @apply h-7;
}
.nav-h-grid-mobile {
  @apply h-9 grid grid-rows-2;
}
.line-mobile {
  @apply h-1 mt-4;
}
.icon-mobile {
  @apply md:hidden block mx-auto p-1.5 h-6;
}
.img-h {
  @apply h-6 w-6;
}
</style>
