<template>
  <div
    class="
      mx-auto
      lg:w-3/4
      md:w-4/5
      sm:w-9/12 sm:h-auto sm:mb-0
      w-11/12
      md:mt-16
      mb-12
      sm:-mt-20
      -mt-32
    "
  >
    <span class="font-nick xl:text-5xl md:text-4xl text-3xl text-center"
      ><mark>rmb'nin açılımı</mark></span
    >
    
    <div class="grid grid-cols-3 text-center font-bebas pt-3">
      <div class="grid grid-rows-4 mx-auto">
        <img class="row-span-3 lg:h-56 md:h-48 h-36" src="../src/img/raskov.png">
        <div><span class="text-5xl">R</span><span class="text-2xl">askov</span></div>
      </div>
      <div class="grid grid-rows-4 mx-auto">
        <img class="row-span-3 lg:h-56 md:h-48 h-36" src="../src/img/madonna.png">
        <div><span class="text-5xl">m</span><span class="text-2xl">adonna</span></div>
      </div>
      <div class="grid grid-rows-4 mx-auto">
        <img class="row-span-3 lg:h-56 md:h-48 h-36" src="../src/img/bihter.png">
        <div><span class="text-5xl">B</span><span class="text-2xl">İHter</span></div>
      </div>
      <div class="col-span-3 lg:px-36 md:px-16 px-12 font-robol">Aynı youtube kanalımı açmam gibi burada da kedilerim payı büyük ve bende bunun bir simgesi olarak mağazamın 
adını onların baş harfleri koymak istedim.</div>
    </div>
    </div>
</template>

<script>
export default {
name: 'RmbMeaning'
}
</script>

<style scoped>
mark {
  display: inline-block;
  line-height: 0.03em;
  background: #ffcf16;
  padding-bottom: 0.3em;
  width: 6em;
  border-radius: 20px;
}
</style>
