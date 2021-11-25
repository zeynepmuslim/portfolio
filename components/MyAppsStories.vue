<template>
  <div class="mx-auto                  xl:mt-20   
                      lg:w-3/4 lg:mt-44
                      md:w-4/5 
                      sm:w-9/12  sm:h-auto sm:mt-40 sm:mb-0
                      w-11/12 h-suto mt-4 mb-12">
    <span class="font-nick xl:text-5xl md:text-4xl text-3xl text-center"
      ><mark>uygulamalarım</mark></span
    >
    <div class="grid sm:grid-cols-3 sm:mt-8 grid-cols-3 mt-8">
      <App>
        <template #text>
          <span
            class="text-center font-robol              md:py-4
                                          sm:row-span-2 sm:py-2 sm:px-2 sm:text-sm
                                             row-span-2    py-2    px-2    text-xs bg-red-400"
            >Oyun motoru eğimlerim sırasında öğrendiğim ünlü “Flappy Bird” mekanikleri ardından daha da geliştererek 4 farklı dil, online skor tablosu, level sistemi, görünüş değiştirme gibi ekletiler ile güçlendirdiğim en fonksiyonel uygulamam.</span
          >
        </template>
        <template #icon>
          <div
            class="
              xl:h-20 xl:w-20
              md:h-16 md:w-16
              sm:h-14 sm:w-14
              h-14 w-14
              hover:bg-bat
              bg-contain bg-no-repeat bg-batYellow
            "
          ></div>
        </template>
        <template #title>
          <span class="text-center font-robom lg:text-xl lg:py-1.5
                                              sm:text-lg sm:py-1
                                              text-sm"
            >Tap and Rise</span
          >
        </template>
      </App>
      <App>
        <template #text>
          <span
            class="text-center font-robol              md:py-4
                                          sm:row-span-2 sm:py-2 sm:px-2 sm:text-sm
                                             row-span-2    py-2    px-2    text-xs bg-red-400"
            >Kedim için indirdiğim uygulamların reklam dolu olması ile “Ben bu oyunu bozarım!” diyip üstüne de kendi kendime bir challenge olarak belirlediğim 12 saatte sıfırdan uygulama çıkartmak hedefimin ürünü.</span
          >
        </template>
        <template #icon>
          <div
            class="
              xl:h-20 xl:w-20
              md:h-16 md:w-16
              sm:h-14 sm:w-14
              h-14 w-14
              hover:bg-paw
              bg-contain bg-no-repeat bg-pawYellow
            "
          ></div>
        </template>
        <template #title>
          <span class="text-center font-robom lg:text-xl lg:py-1.5
                                              sm:text-lg sm:py-1
                                              text-sm"
            >Catch Game For Cats</span
          >
        </template>
      </App>
      <App>
        <template #text>
          <span
            class="text-center font-robol              md:py-4
                                          sm:row-span-2 sm:py-2 sm:px-2 sm:text-sm
                                             row-span-2    py-2    px-2    text-xs bg-red-400"
            >    İlk göz bebeğim, sistemi deneyerek tanımak ve öğrenmek için geliştirdiğim oyunum. İçine özellikle 2 versiyon buluyor ve biri daha 15 yaşında iken kodladığım ilk projenin kopyası diğeri ise onun gelişmiş hali.</span
          >
        </template>
        <template #icon>
          <div
            class="
              xl:h-20 xl:w-20
              md:h-16 md:w-16
              h-14 w-14
              hover:bg-four
              bg-contain bg-no-repeat bg-fourYellow
            "
          ></div>
        </template>
        <template #title>
          <span class="text-center font-robom lg:text-xl lg:py-1.5
                                              sm:text-lg sm:py-1
                                              text-sm"
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
  name: 'MyAppsStories',
  components: {
    App,
  },
}
</script>

<style>

</style>