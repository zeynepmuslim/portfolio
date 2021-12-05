<template>
  <div
    class="
      top-space
      mx-auto
      resp-w
    "
  >
    <span class="header-style"><mark>uygulamalarım</mark></span>
    <div class="grid sm:mt-8 grid-cols-3 mt-8">
      <div class="flex flex-col">
        <App>
          <template #text>
            <span class="text-style"
              >En fonksiyonel,en çok özellik barındıran ve en büyük çaplı
              oyunum.</span
            >
          </template>
          <template #icon>
            <a
              target="_blank"
              href="https://apps.apple.com/us/app/tap-and-rise/id1547185387"
              ><img
                class="icon-size yellow-shadow pointer"
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
        <div class="sm:w-3/4 w-full mx-auto">
          <a
            target="_blank"
            href="https://apps.apple.com/us/app/tap-and-rise/id1547185387"
            ><Button>App Store</Button></a
          >
        </div>
      </div>
      <div class="flex flex-col">
        <App class="">
          <template #text>
            <span class="text-style"
              >Kendi kendime bir challenge olarak belirlediğim 12 saatte
              sıfırdan uygulama çıkartmak hedefimin ürünü.</span
            >
          </template>
          <template #icon>
            <a
              target="_blank"
              href="https://apps.apple.com/us/app/catch-game-for-cats/id1560331647"
              ><img
                class="icon-size yellow-shadow pointer"
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
        <a
          target="_blank"
          href="https://apps.apple.com/us/app/catch-game-for-cats/id1560331647"
          ><div class="sm:w-3/4 w-full mx-auto">
            <Button>App Store</Button>
          </div></a
        >
      </div>
      <div class="flex flex-col">
        <App class="">
          <template #text>
            <span class="text-style"
              >İlk göz bebeğim, sistemi deneyerek tanımak ve öğrenmek için
              geliştirdiğim oyunum.</span
            >
          </template>
          <template #icon>
            <a
              target="_blank"
              href="https://apps.apple.com/us/app/4-i-şlem-oyunu/id1528334211"
              ><img
                class="icon-size yellow-shadow pointer"
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
        <div class="sm:w-3/4 w-full mx-auto">
          <a
            target="_blank"
            href="https://apps.apple.com/us/app/4-i-şlem-oyunu/id1528334211"
            ><Button>App Store</Button></a
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import App from '~/components/App.vue'
import Button from '~/components/Button.vue'
export default {
  name: 'MyApps',
  components: {
    App,
    Button,
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
  @apply text-center font-robom lg:text-xl sm:text-base text-sm lg:py-1.5 sm:py-1;
}

.text-style {
  @apply text-center font-robol md:py-4 sm:text-sm row-span-2 py-2 px-2 text-xs lg:h-24 md:h-28 sm:h-36;
}
</style>
