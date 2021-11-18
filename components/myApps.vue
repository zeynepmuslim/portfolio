<template>
  <div class="w-3/4 mx-auto h-96 mt-20">
    <span class="font-nick text-5xl text-center"
      ><mark>uygulamalarım</mark></span
    >
    <div class="grid grid-cols-3 mt-8">
      <App>
        <template #text> 
         <span class="text-center font-robol h-5 row-span-2 py-4 px-2">En çok fonksiyonel ve özelllik barındıran ve büyük çaplı oyunum.</span> 
        </template>
        <template #icon>
          <div class="h-20 w-20 bg-batYellow hover:bg-bat bg-contain bg-no-repeat"></div>
        </template>
        <template #title>
          <span class="text-center font-robom text-2xl py-1.5">Tap and Rise</span>
        </template>
      </App>
      <App>
        <template #text> 
         <span class="text-center font-robol h-5 row-span-2 py-4 px-2">Kendi kendime bir challenge olarak belirlediğim 12 saatte sıfırdan uygulama çıkartmak hedefimin ürünü.</span> 
        </template>
        <template #icon>
          <div class="h-20 w-20 bg-pawYellow hover:bg-paw bg-contain bg-no-repeat"></div>
        </template>
        <template #title>
          <span class="text-center font-robom text-2xl py-1.5">Catch Game For Cats</span>
        </template>
      </App>
      <App>
        <template #text> 
         <span class="text-center font-robol h-5 row-span-2 py-4 px-2">İlk göz bebeğim, sistemi deneyerek tanımak ve öğrenmek için geliştirdiğim oyunum.</span> 
        </template>
        <template #icon>
          <div class="h-20 w-20 bg-fourYellow hover:bg-four bg-contain bg-no-repeat"></div>
        </template>
        <template #title>
          <span class="text-center font-robom text-2xl py-1.5">4 İşlem Oyunu</span>
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
  width: 5.8em;
  border-radius: 20px;
}
</style>
