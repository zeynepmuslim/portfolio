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
      <div class="grid font-bebas text-center pt-8 md:hidden grid-cols-6 grid-rows-3">
        <div class="grid grid-rows-5 col-span-2">
          <div class="row-span-3 h-24 w-24 mx-auto bg-contain bg-no-repeat bg-booksIconY hover:bg-booksIcon"></div>
          <span class="pt-1 mb-2">KİTAPLAR</span>
          <ButtonForMobile>OynatmaLİsteSİ</ButtonForMobile>
        </div>
        <div class="grid grid-rows-5 col-span-2">
          <div class="row-span-3 h-24 w-24 mx-auto bg-contain bg-no-repeat bg-studyIconY hover:bg-studyIcon"></div>
          <span>Ders Çalışma</span>
          <ButtonForMobile>OynatmaLİsteSİ</ButtonForMobile>
        </div>
        <div class="grid grid-rows-5 col-span-2">
          <div class="row-span-3 h-24 w-24 mx-auto bg-contain bg-no-repeat bg-pawIconY hover:bg-pawIcon"></div>
          <span>Kedİler</span>
          <ButtonForMobile>OynatmaLİsteSİ</ButtonForMobile>
        </div>
        <div class="grid grid-rows-5 col-span-2 col-start-2 mt-8">
          <div class="row-span-3 h-24 w-24 mx-auto bg-contain bg-no-repeat bg-hobbyIconY hover:bg-hobbyIcon"></div>
          <span>HoBİLER</span>
          <ButtonForMobile>OynatmaLİsteSİ</ButtonForMobile>
        </div>
        <div class="grid grid-rows-5 col-span-2 col-start-4 mt-8">
          <div class="row-span-3 h-24 w-24 mx-auto bg-contain bg-no-repeat bg-vlogIconY hover:bg-vlogIcon"></div>
          <span>Vlog</span>
          <ButtonForMobile>OynatmaLİsteSİ</ButtonForMobile>
        </div>
      </div>

      <div class="md:grid sm:grid-cols-5 lg:h-24 font-bebas text-center xl:mt-2 xl:text-xl mb-44 pt-8 hidden">
        <div class="grid grid-rows-5">
          <div class="row-span-3 mb-3 lg:w-24 lg:h-24 md:w-20 md:h-20 mx-auto bg-contain bg-no-repeat bg-booksIconY hover:bg-booksIcon"></div>
          <span>KİTAPLAR</span>
          <Button>Oynatma LİSTESİ</Button>
        </div>
        <div class="grid grid-rows-5">
          <div class="row-span-3 lg:w-24 lg:h-24 md:w-20 md:h-20 mx-auto bg-contain bg-no-repeat bg-studyIconY hover:bg-studyIcon"></div>
          <span>Ders Çalışma</span>
          <Button>Oynatma LİSTESİ</Button>
        </div>
        <div class="grid grid-rows-5">
          <div class="row-span-3 lg:w-24 lg:h-24  md:w-20 md:h-20 mx-auto bg-contain bg-no-repeat bg-pawIconY hover:bg-pawIcon"></div>
          <span>Kedİler</span>
          <Button>Oynatma LİSTESİ</Button>
        </div>
        <div class="grid grid-rows-5">
          <div class="row-span-3 lg:w-24 lg:h-24 md:w-20 md:h-20 mx-auto bg-contain bg-no-repeat bg-hobbyIconY hover:bg-hobbyIcon"></div>
          <span>HoBİLER</span>
          <Button>Oynatma LİSTESİ</Button>
        </div>
        <div class="grid grid-rows-5 ">
          <div class="row-span-3 lg:w-24 lg:h-24 md:w-20 md:h-20 mx-auto bg-contain bg-no-repeat bg-vlogIconY hover:bg-vlogIcon"></div>
          <span class="">Vlog</span>
          <Button>Oynatma LİSTESİ</Button>
        </div>
      </div>
  </div>
</template>

<script>
import Button from '~/components/Button.vue'
import ButtonForMobile from '~/components/ButtonForMobile.vue'
export default {
    name: 'PlayLists',
    components: {
    Button,
    ButtonForMobile
  },
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

