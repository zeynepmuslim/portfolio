<template>
  <div class="mx-auto resp-w top-space">
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
          <a
            target="_blank"
            href="https://apps.apple.com/us/app/tap-and-rise/id1547185387"
            ><img
              class="app-icon yellow-shadow pointer"
              src="/icons/apps/bat.png"
          /></a>
        </template>
        <template #title>
          <a
            target="_blank"
            href="https://apps.apple.com/us/app/tap-and-rise/id1547185387"
            ><div class="title-style">Tap and Rise</div></a
          >
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
          <a
            target="_blank"
            href="https://apps.apple.com/us/app/catch-game-for-cats/id1560331647"
            ><img
              class="app-icon yellow-shadow pointer"
              src="/icons/apps/paw.png"
          /></a>
        </template>
        <template #title>
          <a
            target="_blank"
            href="https://apps.apple.com/us/app/catch-game-for-cats/id1560331647"
            ><div class="title-style">Catch Game For Cats</div></a
          >
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
          <a
            target="_blank"
            href="https://apps.apple.com/us/app/4-i-şlem-oyunu/id1528334211"
            ><img
              class="app-icon yellow-shadow pointer"
              src="/icons/apps/four.png"
          /></a>
        </template>
        <template #title>
          <a
            target="_blank"
            href="https://apps.apple.com/us/app/4-i-şlem-oyunu/id1528334211"
            ><div class="title-style">4 İşlem Oyunu</div></a
          >
        </template>
      </App>
    </div>
    <div class="grid grid-cols-3 mt-8 md:hidden"></div>
    <AppForStoryMobile>
      <template #icon
        ><a
          target="_blank"
          href="https://apps.apple.com/us/app/tap-and-rise/id1547185387"
          ><img
            class="app-icon-m yellow-shadow pointer"
            src="/icons/apps/bat.png"
        /></a>
      </template>
      <template #title
        ><a
          target="_blank"
          href="https://apps.apple.com/us/app/tap-and-rise/id1547185387"
          >Tap and Rise</a
        ></template
      >
      <template #text>
        Oyun motoru eğimlerim sırasında öğrendiğim ünlü “Flappy Bird”
        mekanikleri ardından daha da geliştererek 4 farklı dil, online skor
        tablosu, level sistemi, görünüş değiştirme gibi eklentiler ile
        güçlendirdiğim en fonksiyonel uygulamam.
      </template>
    </AppForStoryMobile>
    <AppForStoryMobile>
      <template #icon
        ><a
          target="_blank"
          href="https://apps.apple.com/us/app/4-i-şlem-oyunu/id1528334211"
          ><img
            class="app-icon-m yellow-shadow pointer"
            src="/icons/apps/paw.png" /></a
      ></template>
      <template #title
        ><a
          target="_blank"
          href="https://apps.apple.com/us/app/4-i-şlem-oyunu/id1528334211"
          >Catch Game For Cats</a
        ></template
      >
      <template #text>
        Kedim için indirdiğim uygulamların reklam dolu olması ile “Ben bu oyunu
        bozarım!” diyip üstüne de kendi kendime bir challenge olarak
        belirlediğim 12 saatte sıfırdan uygulama çıkartma hedefimin ürünü.
      </template>
    </AppForStoryMobile>
    <AppForStoryMobile>
      <template #icon
        ><a
          target="_blank"
          href="https://apps.apple.com/us/app/4-i-şlem-oyunu/id1528334211"
          ><img
            class="app-icon-m yellow-shadow pointer"
            src="/icons/apps/four.png" /></a
      ></template>
      <template #title
        ><a
          target="_blank"
          href="https://apps.apple.com/us/app/4-i-şlem-oyunu/id1528334211"
          >4 İşlem Oyunu</a
        ></template
      >
      <template #text>
        İlk göz bebeğim, sistemi deneyerek tanımak ve öğrenmek için
        geliştirdiğim oyunum. İçine özellikle 2 versiyon buluyor ve biri daha 15
        yaşında iken kodladığım ilk projenin kopyası diğeri ise onun gelişmiş
        hali.
      </template>
    </AppForStoryMobile>
    <div class="mt-4 md:w-3/4 mx-auto">
      <div
        class="
          bg-lightGray
          grid grid-cols-5
          grid-rows-2
          rounded-3xl
          shadow-xl
          hover:shadow-inner
          p-4
        "
      >
        <div class="col-span-2 row-span-2 my-auto mx-auto pl-2">
          <a target="_blank" href="https://youtu.be/BXSjI45fGPI"
            ><img
              src="/thumbnails/tree.png"
              class="pointer yellow-shadow m-auto"
          /></a>
        </div>
        <div class="col-span-3 row-span-2 grid my-auto pl-2">
          <div class="font-robol sm:text-sm text-xs mb-4 text-center sm:pl-6">
            <span name="text">
              YouTubeb kanalımda kendisinin yapıldığı o 12 saat ve ardından 36.
              saatte yayına girmesi süreçlerini anlatan bir video da
              bulunmakta.</span
            >
          </div>
          
        </div>
        <div class="col-span-5 pt-3">
        <a target="_blank" href="https://youtu.be/BXSjI45fGPI"
            ><div class="w-full mx-auto"><div class="button">Youtube</div></div></a
          >
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
  @apply w-2/3 mx-auto ;
}
</style>
