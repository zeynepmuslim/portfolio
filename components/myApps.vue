<template>
  <div class="mx-auto                  xl:mt-20   
                      lg:w-3/4 lg:h-96 lg:mt-44
                      md:w-4/5 md:h-96 md:mt-40">
    <span class="font-nick xl:text-5xl md:text-4xl text-center"
      ><mark>uygulamalarım</mark></span
    >
    <div class="grid md:grid-cols-3 md:mt-8">
      <App>
        <template #text>
          <span
            class="text-center font-robol md:h-5 md:row-span-2 md:py-4 md:px-2"
            >En çok fonksiyonel ve özelllik barındıran ve büyük çaplı
            oyunum.</span
          >
        </template>
        <template #icon>
          <div
            class="
              xl:h-20 xl:w-20
              md:h-16 md:w-16
              hover:bg-bat
              bg-contain bg-no-repeat bg-batYellow
            "
          ></div>
        </template>
        <template #title>
          <span class="text-center font-robom lg:text-xl lg:py-1.5
                                              md:text-lg md:py-1"
            >Tap and Rise</span
          >
        </template>
      </App>
      <App>
        <template #text>
          <span
            class="text-center font-robol md:h-5 md:row-span-2 md:py-4 md:px-2"
            >Kendi kendime bir challenge olarak belirlediğim 12 saatte sıfırdan
            uygulama çıkartmak hedefimin ürünü.</span
          >
        </template>
        <template #icon>
          <div
            class="
              xl:h-20 xl:w-20
              md:h-16 md:w-16
              hover:bg-paw
              bg-contain bg-no-repeat bg-pawYellow
            "
          ></div>
        </template>
        <template #title>
          <span class="text-center font-robom lg:text-xl lg:py-1.5
                                              md:text-lg md:py-1"
            >Catch Game For Cats</span
          >
        </template>
      </App>
      <App>
        <template #text>
          <span
            class="text-center font-robol md:h-5 md:row-span-2 md:py-4 md:px-2"
            >İlk göz bebeğim, sistemi deneyerek tanımak ve öğrenmek için
            geliştirdiğim oyunum.</span
          >
        </template>
        <template #icon>
          <div
            class="
              xl:h-20 xl:w-20
              md:h-16 md:w-16
              hover:bg-four
              bg-contain bg-no-repeat bg-fourYellow
            "
          ></div>
        </template>
        <template #title>
          <span class="text-center font-robom lg:text-xl lg:py-1.5
                                              md:text-lg md:py-1"
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
