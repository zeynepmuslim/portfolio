<template>
  <div class="mx-auto resp-w sm:h-auto sm:mb-0 md:mt-16 mb-12 sm:-mt-20 -mt-32">
    <span class="header-style"><mark>rmb'nin açılımı</mark></span>
    <div class="grid grid-cols-3 text-center font-bebas pt-3">
      <div class="img-div">
        <img class="img-size" src="../src/img/raskov.png" />
        <div>
          <span class="first-letter">R</span><span class="name">askov</span>
        </div>
      </div>
      <div class="img-div">
        <img class="img-size" src="../src/img/madonna.png" />
        <div>
          <span class="first-letter">m</span><span class="name">adonna</span>
        </div>
      </div>
      <div class="img-div">
        <img class="img-size" src="../src/img/bihter.png" />
        <div>
          <span class="first-letter">B</span><span class="name">İHter</span>
        </div>
      </div>
      <div class="col-span-3 lg:px-36 md:px-16 px-12 font-robol">
        Aynı youtube kanalımı açmam gibi burada da kedilerim payı büyük ve bende
        bunun bir simgesi olarak mağazamın adını onların baş harfleri koymak
        istedim.
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RmbMeaning',
}
</script>

<style scoped>
mark {
  width: 6em;
}
.first-letter {
  @apply text-5xl;
}
.name {
  @apply text-2xl;
}
.img-size {
  @apply row-span-3 lg:h-56 md:h-48 h-36;
}
.img-div {
  @apply grid grid-rows-4 mx-auto;
}
</style>
