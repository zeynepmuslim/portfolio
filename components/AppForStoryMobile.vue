<template>
  <div class="md:hidden block mb-7">
    <div class="bg-lightGray sm:h-44 h-auto grid grid-cols-4 rounded-3xl shadow-xl hover:shadow-inner p-4">
      <div class="my-auto mx-auto">
        <slot name="icon">
        </slot>
      </div>
      <div class="col-span-3 my-auto pl-8 ">
        <div class="font-robom sm:text-lg text-md ">
          <slot name="title">Tap and Rise</slot>
        </div>
        <div class="font-robol sm:text-sm text-xs">
          <slot name="text"
            >Oyun motoru eğimlerim sırasında öğrendiğim ünlü “Flappy Bird”
            mekanikleri ardından daha da geliştererek 4 farklı dil, online skor
            tablosu, level sistemi, görünüş değiştirme gibi ekletiler ile
            güçlendirdiğim en fonksiyonel uygulamam.</slot
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppsForStoryMobile',
}
</script>

<style></style>
