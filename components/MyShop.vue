<template>
  <div class="xl:w-3/4 mx-auto h-auto xl:mt-16">
    <span class="font-nick xl:text-5xl text-center"
      ><mark>küçük işletmem</mark></span>
      <div class="xl:shadow-xl xl:h-52 w-4/5 xl:rounded-3xl mx-auto">
        <div class="h-full bg-lightGray mx-auto xl:rounded-3xl xl:my-8 grid xl:grid-cols-4">
      <div class="h-full xl:p-8">
        <img class="w-full rounded-full xl:border-2 border-gray" src="../src/img/rmblogo.png">
      </div>
      <div class="xl:col-span-3 xl:py-12 xl:pr-7 grid xl:grid-row-3">
        <span class="font-bebas xl:text-3xl">RMB TASARIM</span>
        <span class="font-robol xl:text-xl xl:row-span-2">Kendini ifade etmenin en güzel yolu: tasarım sticker, broş ve aksesuarlar.</span>
      </div></div>
      </div>
      <div class="xl:h-24 xl:w-4/5 mx-auto xl:my-7 grid xl:grid-cols-2">
        <div class=" grid xl:grid-rows-2">
          <span class="font-robol text-center xl:pt-4">Yapılış aşamaları ve diğer her şey için</span>
          <div class="mx-auto transition duration-500 ease-in-out bg-yellow hover:bg-black xl:w-2/5 hover:text-yellow rounded-full xl:h-10 text-center font-bebas xl:pt-2 xl:text-xl">
          Instgaram</div>
        </div>
        <div class="grid grid-rows-2">
          <span class="font-robol text-center pt-4">Ürünleri incelemek ve satın almak için.</span>
          <div class="mx-auto transition duration-500 ease-in-out bg-yellow hover:bg-black xl:w-2/5 hover:text-yellow rounded-full xl:h-10 text-center font-bebas xl:pt-2 xl:text-xl">
          Mağaza</div>
        </div>
      </div>
  </div>
</template>

<script>
export default {
name: 'MyShop',
}
</script> 

<style>
mark {
  display: inline-block;
  line-height: 0.03em;
  background: #ffcf16;
  padding-bottom: 0.3em;
  width: 6em;
  border-radius: 20px;
}
</style>