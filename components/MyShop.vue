<template>
  <div class="w-3/4 mx-auto h-auto mt-20">
    <span class="font-nick text-5xl text-center"
      ><mark>küçük işletmem</mark></span>
      <div class=" shadow-xl h-52 w-4/5 rounded-3xl mx-auto">
        <div class="h-full bg-lightGray mx-auto rounded-3xl my-8 grid grid-cols-4">
      <div class="h-full p-8">
        <img class="w-full rounded-full border-2 border-gray" src="../src/img/rmblogo.png">
      </div>
      <div class="col-span-3 py-12 pr-7 grid grid-row-3">
        <span class="font-bebas text-3xl">RMB TASARIM</span>
        <span class="font-robol text-xl row-span-2">Kendini ifade etmenin en güzel yolu: tasarım sticker, broş ve aksesuarlar.</span>
      </div></div>
      </div>
      <div class="h-24 w-4/5 mx-auto my-7 grid grid-cols-2">
        <div class=" grid grid-rows-2">
          <span class="font-robol text-center pt-4">Yapılış aşamaları ve diğer her şey için</span>
          <div class="mx-auto transition duration-500 ease-in-out bg-yellow hover:bg-black w-2/5 hover:text-yellow rounded-full h-10 text-center font-bebas pt-2 text-xl">
          Instgaram</div>
        </div>
        <div class="grid grid-rows-2">
          <span class="font-robol text-center pt-4">Ürünleri incelemek ve satın almak için.</span>
          <div class="mx-auto transition duration-500 ease-in-out bg-yellow hover:bg-black w-2/5 hover:text-yellow rounded-full h-10 text-center font-bebas pt-2 text-xl">
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