<template>
  <div class="mx-auto sm:h-auto sm:mb-0 mt-6 mb-12 resp-w">
    <span class="header-style"><mark>uygulamalarımın hikayeleri</mark></span>
    <div class="md:grid grid-cols-3 mt-8 hidden">
      <App>
        <template #text>
          <span class="text-style"
            >Oyun motoru eğimlerim sırasında öğrendiğim ünlü “Flappy Bird”
            mekanikleri ardından daha da geliştererek 4 farklı dil, online skor
            tablosu, level sistemi, görünüş değiştirme gibi ekletiler ile
            güçlendirdiğim en fonksiyonel uygulamam.</span
          >
        </template>
        <template #icon>
          <div class="app-icon hover:bg-bat bg-batYellow"></div>
        </template>
        <template #title>
          <span class="title-style">Tap and Rise</span>
        </template>
      </App>
      <App>
        <template #text>
          <span class="text-style"
            >Kedim için indirdiğim uygulamların reklam dolu olması ile “Ben bu
            oyunu bozarım!” diyip üstüne de kendi kendime bir challenge olarak
            belirlediğim 12 saatte sıfırdan uygulama çıkartmak hedefimin
            ürünü.</span
          >
        </template>
        <template #icon>
          <div class="app-icon hover:bg-paw bg-pawYellow"></div>
        </template>
        <template #title>
          <span class="title-style">Catch Game For Cats</span>
        </template>
      </App>
      <App>
        <template #text>
          <span class="text-style">
            İlk göz bebeğim, sistemi deneyerek tanımak ve öğrenmek için
            geliştirdiğim oyunum. İçine özellikle 2 versiyon buluyor ve biri
            daha 15 yaşında iken kodladığım ilk projenin kopyası diğeri ise onun
            gelişmiş hali.</span
          >
        </template>
        <template #icon>
          <div class="app-icon hover:bg-four bg-fourYellow"></div>
        </template>
        <template #title>
          <span class="title-style">4 İşlem Oyunu</span>
        </template>
      </App>
    </div>
    <div class="grid grid-cols-3 mt-8 md:hidden"></div>
    <AppForStoryMobile>
      <template #icon
        ><div class="app-icon-m bg-batYellow hover:bg-bat"></div
      ></template>
      <template #title> Tap and Rise </template>
      <template #text>
        Oyun motoru eğimlerim sırasında öğrendiğim ünlü “Flappy Bird”
        mekanikleri ardından daha da geliştererek 4 farklı dil, online skor
        tablosu, level sistemi, görünüş değiştirme gibi ekletiler ile
        güçlendirdiğim en fonksiyonel uygulamam.
      </template>
    </AppForStoryMobile>
    <AppForStoryMobile>
      <template #icon
        ><div class="app-icon-m bg-pawYellow hover:bg-paw"></div
      ></template>
      <template #title> Catch Game For Cats </template>
      <template #text>
        Kedim için indirdiğim uygulamların reklam dolu olması ile “Ben bu oyunu
        bozarım!” diyip üstüne de kendi kendime bir challenge olarak
        belirlediğim 12 saatte sıfırdan uygulama çıkartmak hedefimin ürünü.
      </template>
    </AppForStoryMobile>
    <AppForStoryMobile>
      <template #icon
        ><div class="app-icon-m bg-fourYellow hover:bg-four"></div
      ></template>
      <template #title> 4 İşlem Oyunu </template>
      <template #text>
        İlk göz bebeğim, sistemi deneyerek tanımak ve öğrenmek için
        geliştirdiğim oyunum. İçine özellikle 2 versiyon buluyor ve biri daha 15
        yaşında iken kodladığım ilk projenin kopyası diğeri ise onun gelişmiş
        hali.
      </template>
    </AppForStoryMobile>
    <div class="mt-8 md:w-3/4 mx-auto">
      <div
        class="
          bg-lightGray
          grid grid-cols-4
          rounded-3xl
          shadow-xl
          hover:shadow-inner
          p-4
        "
      >
        <div class="my-auto mx-auto">
          <div
            class="
              bg-tumTreeY
              hover:bg-tumTree
              bg-contain bg-no-repeat
              lg:h-28 lg:w-48
              h-24
              w-40
            "
          ></div>
        </div>
        <div class="col-span-3 grid my-auto pl-8">
          <div class="font-robol sm:text-sm text-xs mb-4 text-center pl-6">
            <span name="text">
              YouTubeb kanalımda kendisinin yapıldığı o 12 saat ve ardından 36.
              saatte yayına girmesi süreçlerini anlatan bir video da
              bulunmakta.</span
            >
          </div>
          <div
            class="
              transition
              duration-500
              ease-in-out
              group
              bg-yellow
              hover:bg-black hover:text-yellow
              rounded-full
              mx-auto
              grid
              xl:h-10
              md:w-36
              w-32
              grid-cols-3
              h-8
            "
          >
            <div
              class="
                transition
                duration-500
                ease-in-out
                my-auto
                bg-youtubeBlFill bg-contain bg-no-repeat
                group-hover:bg-youtubeYeFill
                md:ml-6
                bt-1
                h-4
                w-5
                ml-6
              "
            ></div>
            <span
              class="
                font-bebas
                my-auto
                lg:text-lg lg:pl-2
                md:pl-3
                col-span-2
                text-md
                pt-1
                pl-2
              "
              >YouTube</span
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import App from '~/components/App.vue'
import AppForStoryMobile from '~/components/Programming/AppForStoryMobile.vue'
export default {
  name: 'MyAppsStories',
  components: {
    App,
    AppForStoryMobile,
  },
}
</script>

<style scoped>
mark {
  width: 10em;
}
.text-style {
  @apply text-center font-robol md:py-4 sm:text-sm row-span-2 py-2 px-2 text-xs xl:h-36 lg:h-48 md:h-52;
}
.title-style {
  @apply text-center font-robom lg:text-xl lg:py-1.5 sm:text-lg sm:py-1 text-sm;
}
.app-icon {
  @apply xl:h-20 xl:w-20 md:h-16 md:w-16 h-14 w-14 bg-contain bg-no-repeat;
}
.app-icon-m {
  @apply object-cover w-20 h-20 bg-contain bg-no-repeat;
}
</style>
