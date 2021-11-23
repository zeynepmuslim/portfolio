<template>
  <div class="mx-auto xl:my-16 lg:w-3/4 md:w-4/5 sm:w-9/12 w-11/12">
  <span
        class="
          font-nick
          text-center
          xl:text-5xl
          md:text-4xl
          sm:text-3xl
          text-2xl
        "
        ><mark>içeriklerim</mark></span
      >
      <div class="grid lg:grid-cols-5 lg:h-24 font-bebas text-center xl:mt-2 xl:text-xl mb-44 pt-8 ">
        <div class="grid grid-rows-2">
          <div class="mb-3 xl:w-24 xl:h-24 lg:w-20 lg:h-20 md:w-16 md:h-16 mx-auto bg-contain bg-no-repeat bg-booksIconY hover:bg-booksIcon"></div>
          <span>KİTAPLAR</span>
        </div>
        <div class="grid grid-rows-2">
          <div class="xl:w-24 xl:h-24 lg:w-20 lg:h-20 md:w-16 md:h-16 mx-auto bg-contain bg-no-repeat bg-studyIconY hover:bg-studyIcon"></div>
          <span>Ders Çalışma</span>
        </div>
        <div class="grid grid-rows-2">
          <div class="xl:w-24 xl:h-24 lg:w-20 lg:h-20 md:w-16 md:h-16 mx-auto bg-contain bg-no-repeat bg-pawIconY hover:bg-pawIcon"></div>
          <span>Kedİler</span>
        </div>
        <div class="grid grid-rows-2">
          <div class="xl:w-24 xl:h-24 lg:w-20 lg:h-20 md:w-16 md:h-16 mx-auto bg-contain bg-no-repeat bg-hobbyIconY hover:bg-hobbyIcon"></div>
          <span>HoBİLER</span>
        </div>
        <div class="grid grid-rows-2">
          <div class="xl:w-24 xl:h-24 lg:w-20 lg:h-20 md:w-16 md:h-16 mx-auto bg-contain bg-no-repeat bg-vlogIconY hover:bg-vlogIcon"></div>
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

