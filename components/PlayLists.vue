<template>
  <div class="mx-auto xl:my-16 resp-w xl:-mt-4 sm:mt-7 mt-10">
    <span class="header-style"><mark>içeriklerim</mark></span>
    <div
      class="grid font-bebas text-center pt-8 md:hidden grid-cols-6 grid-rows-2"
    >
      <div class="grid grid-rows-4 col-span-2">
        <div class="icon bg-booksIconY hover:bg-booksIcon"></div>
        <span class="title">KİTAPLAR</span>
        <Button>OynatmaLİsteSİ</Button>
      </div>
      <div class="grid grid-rows-4 col-span-2">
        <div class="icon bg-studyIconY hover:bg-studyIcon">
        </div>
        <span class="title">Ders Çalışma</span>
        <Button>OynatmaLİsteSİ</Button>
      </div>
      <div class="grid grid-rows-4 col-span-2">
        <div class="icon bg-pawIconY hover:bg-pawIcon"></div>
        <span class="title">Kedİler</span>
        <Button>OynatmaLİsteSİ</Button>
      </div>
      <div class="grid grid-rows-4 col-span-2 col-start-2 mt-8">
        <div class="icon bg-hobbyIconY hover:bg-hobbyIcon"></div>
        <span class="title">HoBİLER</span>
        <Button>OynatmaLİsteSİ</Button>
      </div>
      <div class="grid grid-rows-4 col-span-2 col-start-4 mt-8">
        <div class="icon bg-vlogIconY hover:bg-vlogIcon"></div>
        <span class="title">Vlog</span>
        <Button>OynatmaLİsteSİ</Button>
      </div>
    </div>

    <div
      class="
        md:grid
        sm:grid-cols-5
        lg:h-24
        font-bebas
        text-center
        xl:mt-2 xl:text-xl
        mb-44
        pt-8
        hidden
      "
    >
      <div class="grid grid-rows-5">
        <div class="icon-m bg-booksIconY hover:bg-booksIcon"></div>
        <span>KİTAPLAR</span>
        <Button>Oynatma LİSTESİ</Button>
      </div>
      <div class="grid grid-rows-5">
        <div class="icon-m bg-studyIconY hover:bg-studyIcon"></div>
        <span>Ders Çalışma</span>
        <Button>Oynatma LİSTESİ</Button>
      </div>
      <div class="grid grid-rows-5">
        <div class="icon-m bg-pawIconY hover:bg-pawIcon"></div>
        <span>Kedİler</span>
        <Button>Oynatma LİSTESİ</Button>
      </div>
      <div class="grid grid-rows-5">
        <div class="icon-m bg-hobbyIconY hover:bg-hobbyIcon"></div>
        <span>HoBİLER</span>
        <Button>Oynatma LİSTESİ</Button>
      </div>
      <div class="grid grid-rows-5">
        <div class="icon-m bg-vlogIconY hover:bg-vlogIcon"></div>
        <span>Vlog</span>
        <Button>Oynatma LİSTESİ</Button>
      </div>
    </div>
  </div>
</template>

<script>
import Button from '~/components/Button.vue'
export default {
  name: 'PlayLists',
  components: {
    Button,
  },
}
</script>

<style scoped>
mark {
  width: 4.2em;
}
.div-style {
  @apply grid grid-rows-5 col-span-2;
}
.icon {
  @apply row-span-2 sm:h-24 sm:w-24 h-20 w-20 mx-auto bg-contain bg-no-repeat;
}
.title {
  @apply pt-1 mb-2;
}
.div-style-m {
  @apply grid grid-rows-5;
}
.icon-m {
  @apply row-span-3 mb-3 lg:w-24 lg:h-24 md:w-20 md:h-20 mx-auto bg-contain bg-no-repeat;
}
</style>
