<template>
  <div class="mx-auto h-auto xl:mt-16 lg:w-3/4 lg:mt-11 md:w-4/5 md:mt-11">
    <span class="font-nick xl:text-5xl text-center md:text-4xl"
      ><mark>küçük işletmem</mark></span
    >
    <div
      class="
        mx-auto
        xl:h-52 xl:w-4/5
        lg:h-48 lg:w-4/5
        md:shadow-xl md:h-40 md:w-11/12 md:rounded-3xl
      "
    >
      <div
        class="
          h-full
          bg-lightGray
          mx-auto
          grid
          md:grid-cols-4 md:rounded-3xl md:my-8
        "
      >
        <div
          class="
            flex
            justify-center
            content-center
            xl:h-52 xl:w-52 xl:p-8
            lg:h-48 lg:w-48 lg:p-7
            md:w-40 md:h-40 md:p-6
          "
        >
          <img
            class="
              object-cover
              rounded-full
              md:border-2
              border-gray
            "
            src="../src/img/rmblogo.png"
          />
        </div>
        <div
          class="
            grid
            xl:col-span-3 xl:py-12 xl:grid-row-3 xl:pr-7 
            lg:col-span-3 lg:py-12 lg:grid-row-3 lg:px-7
            md:col-span-3 md:py-9 md:grid-row-3 md:px-6 
          "
        >
          <span class="font-bebas xl:text-3xl lg:text-2xl md:text-2xl">RMB TASARIM</span>
          <span
            class="font-robol xl:text-xl
                              md:text-lg md:row-span-2"
            >Kendini ifade etmenin en güzel yolu: tasarım sticker, broş ve
            aksesuarlar.</span
          >
        </div>
      </div>
    </div>
    <div
      class="
        grid
        mx-auto
        lg:w-4/5
        md:h-24 md:w-11/12 md:my-7 md:grid-cols-2
      "
    >
      <div class="grid md:grid-rows-2">
        <span class="font-robol text-center lg:pt-4 md:pt-2"
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
            xl:pt-2 xl:h-10
            md:pt-1 md:text-xl md:h-8 md:w-2/5
          "
        >
          Instgaram
        </div>
      </div>
      <div class="grid grid-rows-2">
        <span class="font-robol text-center lg:pt-4 md:pt-2"
          >Ürünleri incelemek ve satın almak için</span
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
            xl:pt-2 xl:h-10
            md:pt-1 md:text-xl md:h-8 md:w-2/5
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
