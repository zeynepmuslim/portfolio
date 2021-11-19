<template>
  <div class="mx-auto xl:w-3/4 xl:h-96 xl:mt-20 
                      lg:w-3/4 lg:h-96 lg:mt-44">
    <span class="font-nick xl:text-5xl lg:text-4xl text-center"
      ><mark>uygulamalarım</mark></span
    >
    <div class="grid xl:grid-cols-3 xl:mt-8
                     lg:grid-cols-3 lg:mt-8">
      <App>
        <template #text>
          <span
            class="text-center font-robol xl:h-5 xl:row-span-2 xl:py-4 xl:px-2
                                          lg:h-5 lg:row-span-2 lg:py-4 lg:px-2"
            >En çok fonksiyonel ve özelllik barındıran ve büyük çaplı
            oyunum.</span
          >
        </template>
        <template #icon>
          <div
            class="
              xl:h-20 xl:w-20
              lg:h-16 lg:w-16
              hover:bg-bat
              bg-contain bg-no-repeat bg-batYellow
            "
          ></div>
        </template>
        <template #title>
          <span class="text-center font-robom xl:text-xl xl:py-1.5
                                              lg:text-xl lg:py-1.5"
            >Tap and Rise</span
          >
        </template>
      </App>
      <App>
        <template #text>
          <span
            class="text-center font-robol xl:h-5 xl:row-span-2 xl:py-4 xl:px-2
                                          lg:h-5 lg:row-span-2 lg:py-4 lg:px-2"
            >Kendi kendime bir challenge olarak belirlediğim 12 saatte sıfırdan
            uygulama çıkartmak hedefimin ürünü.</span
          >
        </template>
        <template #icon>
          <div
            class="
              xl:h-20 xl:w-20
              lg:h-16 lg:w-16
              hover:bg-paw
              bg-contain bg-no-repeat bg-pawYellow
            "
          ></div>
        </template>
        <template #title>
          <span class="text-center font-robom xl:text-xl xl:py-1.5
                                              lg:text-xl lg:py-1.5"
            >Catch Game For Cats</span
          >
        </template>
      </App>
      <App>
        <template #text>
          <span
            class="text-center font-robol xl:h-5 xl:row-span-2 xl:py-4 xl:px-2
                                          lg:h-5 lg:row-span-2 lg:py-4 lg:px-2"
            >İlk göz bebeğim, sistemi deneyerek tanımak ve öğrenmek için
            geliştirdiğim oyunum.</span
          >
        </template>
        <template #icon>
          <div
            class="
              xl:h-20 xl:w-20
              lg:h-16 lg:w-16
              hover:bg-four
              bg-contain bg-no-repeat bg-fourYellow
            "
          ></div>
        </template>
        <template #title>
          <span class="text-center font-robom xl:text-xl xl:py-1.5
                                              lg:text-xl lg:py-1.5"
            >4 İşlem Oyunu</span
          >
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
  display: inline-block;
  line-height: 0.03em;
  background: #ffcf16;
  padding-bottom: 0.3em;
  width: 6em;
  border-radius: 20px;
}
</style>
