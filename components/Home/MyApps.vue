<template>
  <div
    class="
      mx-auto
      xl:mt-20
      g:mt-44
      sm:h-auto sm:mt-40 sm:mb-0
      h-suto
      mt-4
      mb-12
      resp-w
    "
  >
    <span class="header-style"><mark>uygulamalarım</mark></span>
    <div class="grid sm:mt-8 grid-cols-3 mt-8">
      <App>
        <template #text>
          <span class="text-style"
            >En çok fonksiyonel ve özelllik barındıran ve büyük çaplı
            oyunum.</span
          >
        </template>
        <template #icon>
          <div class="icon-size hover:bg-bat bg-batYellow"></div>
        </template>
        <template #title>
          <span class="title-style">Tap and Rise</span>
        </template>
      </App>
      <App>
        <template #text>
          <span class="text-style"
            >Kendi kendime bir challenge olarak belirlediğim 12 saatte sıfırdan
            uygulama çıkartmak hedefimin ürünü.</span
          >
        </template>
        <template #icon>
          <div class="icon-size hover:bg-paw bg-pawYellow"></div>
        </template>
        <template #title>
          <span class="title-style">Catch Game For Cats</span>
        </template>
      </App>
      <App>
        <template #text>
          <span class="text-style"
            >İlk göz bebeğim, sistemi deneyerek tanımak ve öğrenmek için
            geliştirdiğim oyunum.</span
          >
        </template>
        <template #icon>
          <div class="icon-size hover:bg-four bg-fourYellow"></div>
        </template>
        <template #title>
          <span class="title-style">4 İşlem Oyunu</span>
        </template>
      </App>
    </div>
  </div>
</template>

<script>
import App from '~/components/App.vue'
export default {
  name: 'MyApps',
  components: {
    App,
  },
}
</script>

<style scoped>
mark {
  width: 6em;
}

.icon-size {
  @apply xl:h-20 xl:w-20 md:h-16 md:w-16 h-14 w-14   bg-contain bg-no-repeat;
}

.title-style {
  @apply text-center font-robom lg:text-xl lg:py-1.5 sm:py-1;
}

.text-style {
  @apply text-center font-robol md:py-4 sm:text-sm row-span-2 py-2 px-2 text-xs lg:h-24 md:h-28 sm:h-36 h-20;
}
</style>
