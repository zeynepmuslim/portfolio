<template>
  <div class="mx-auto xl:my-16 lg:w-3/4 md:w-4/5 sm:w-9/12 w-11/12 xl:-mt-4 sm:mt-7 mt-10">
  <span
        class="
          font-nick
          text-center
          xl:text-5xl
          md:text-4xl
          text-3xl
        "
        ><mark>içeriklerim</mark></span
      >
      <div class="grid font-bebas text-center pt-8 md:hidden grid-cols-6 grid-rows-2">
        <div class="grid grid-rows-2 col-span-2">
          <div class="h-24 w-24 mx-auto bg-contain bg-no-repeat bg-booksIconY hover:bg-booksIcon"></div>
          <span>KİTAPLAR</span>
        </div>
        <div class="grid grid-rows-2 col-span-2">
          <div class="h-24 w-24 mx-auto bg-contain bg-no-repeat bg-studyIconY hover:bg-studyIcon"></div>
          <span>Ders Çalışma</span>
        </div>
        <div class="grid grid-rows-2 col-span-2">
          <div class="h-24 w-24 mx-auto bg-contain bg-no-repeat bg-pawIconY hover:bg-pawIcon"></div>
          <span>Kedİler</span>
        </div>
        <div class="grid grid-rows-2 col-span-2 col-start-2">
          <div class="h-24 w-24 mx-auto bg-contain bg-no-repeat bg-hobbyIconY hover:bg-hobbyIcon"></div>
          <span>HoBİLER</span>
        </div>
        <div class="grid grid-rows-2 col-span-2 col-start-4">
          <div class="h-24 w-24 mx-auto bg-contain bg-no-repeat bg-vlogIconY hover:bg-vlogIcon"></div>
          <span>Vlog</span>
        </div>
      </div>

      <div class="md:grid sm:grid-cols-5 lg:h-24 font-bebas text-center xl:mt-2 xl:text-xl mb-44 pt-8 hidden">
        <div class="grid grid-rows-2">
          <div class="mb-3 lg:w-24 lg:h-24 md:w-20 md:h-20 mx-auto bg-contain bg-no-repeat bg-booksIconY hover:bg-booksIcon"></div>
          <span>KİTAPLAR</span>
        </div>
        <div class="grid grid-rows-2">
          <div class="lg:w-24 lg:h-24 md:w-20 md:h-20 mx-auto bg-contain bg-no-repeat bg-studyIconY hover:bg-studyIcon"></div>
          <span>Ders Çalışma</span>
        </div>
        <div class="grid grid-rows-2">
          <div class="lg:w-24 lg:h-24  md:w-20 md:h-20 mx-auto bg-contain bg-no-repeat bg-pawIconY hover:bg-pawIcon"></div>
          <span>Kedİler</span>
        </div>
        <div class="grid grid-rows-2">
          <div class="lg:w-24 lg:h-24 md:w-20 md:h-20 mx-auto bg-contain bg-no-repeat bg-hobbyIconY hover:bg-hobbyIcon"></div>
          <span>HoBİLER</span>
        </div>
        <div class="grid grid-rows-2">
          <div class="lg:w-24 lg:h-24 md:w-20 md:h-20 mx-auto bg-contain bg-no-repeat bg-vlogIconY hover:bg-vlogIcon"></div>
          <span>Vlog</span>
        </div>
      </div>
  </div>
</template>

<script>
export default {
    name: 'PlayLists',
}
</script>

<style scoped>
mark {
  display: inline-block;
  line-height: 0.03em;
  background: #ffcf16;
  padding-bottom: 0.3em;
  width: 4.2em;
  border-radius: 20px;
}


</style>

