<template>
  <div class="mx-auto h-auto xl:w-3/4 xl:mt-16
                             lg:w-3/4 lg:mt-11">
    <span class="font-nick xl:text-5xl text-center lg:text-4xl"
      ><mark>küçük işletmem</mark></span
    >
    <div class="mx-auto xl:shadow-xl xl:h-52 xl:w-4/5 xl:rounded-3xl
                        lg:shadow-xl lg:h-48 lg:w-4/5 lg:rounded-3xl">
      <div
        class="
          h-full
          bg-lightGray
          mx-auto
          grid
          xl:grid-cols-4 xl:rounded-3xl xl:my-8
          lg:grid-cols-4 lg:rounded-3xl lg:my-8
        "
      >
        <div class="xl:h-52 lg:h-48 xl:w-52 lg:w-48 xl:p-8 lg:p-7 flex justify-center content-center">
          <img
            class="object-cover rounded-full xl:border-2 lg:border-2 border-gray"
            src="../src/img/rmblogo.png"
          />
        </div>
        <div class="grid xl:col-span-3 xl:py-12 xl:pr-7 xl:grid-row-3
                         lg:col-span-3 lg:py-12 lg:px-7 lg:grid-row-3">
          <span class="font-bebas xl:text-3xl lg:text-2xl">RMB TASARIM</span>
          <span class="font-robol xl:text-xl xl:row-span-2
                                  lg:text-lg lg:row-span-2"
            >Kendini ifade etmenin en güzel yolu: tasarım sticker, broş ve
            aksesuarlar.</span
          >
        </div>
      </div>
    </div>
    <div class="grid mx-auto xl:h-24 xl:w-4/5 xl:my-7 xl:grid-cols-2
                             lg:h-24 lg:w-4/5 lg:my-7 lg:grid-cols-2">
      <div class="grid xl:grid-rows-2 lg:grid-rows-2">
        <span class="font-robol text-center xl:pt-4 lg:pt-4"
          >Yapılış aşamaları ve diğer her şey için</span
        >
        <div
          class="
            mx-auto
            transition
            duration-500
            ease-in-out
            bg-yellow
            hover:bg-black hover:text-yellow
            rounded-full
            text-center
            font-bebas
            xl:pt-2 xl:text-xl xl:h-10 xl:w-2/5
            lg:pt-1 lg:text-xl lg:h-8 lg:w-2/5
          "
        >
          Instgaram
        </div>
      </div>
      <div class="grid grid-rows-2">
        <span class="font-robol text-center xl:pt-4 lg:pt-4"
          >Ürünleri incelemek ve satın almak için.</span
        >
        <div
          class="
            mx-auto
            transition
            duration-500
            ease-in-out
            bg-yellow
            hover:bg-black hover:text-yellow
            rounded-full
            text-center
            font-bebas
            xl:pt-2 xl:text-xl xl:h-10 xl:w-2/5
            lg:pt-1 lg:text-xl lg:h-8 lg:w-2/5
          "
        >
          Mağaza
        </div>
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
