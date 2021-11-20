<template>
  <div class="mx-auto h-auto xl:mt-16 lg:w-3/4 md:w-4/5 sm:w-9/12 sm:mt-11 w-11/12 ">
    <span class="font-nick xl:text-5xl text-center md:text-4xl sm:text-3xl text-2xl"
      ><mark>küçük işletmem</mark></span
    >
    <div
      class="
        mx-auto
        xl:h-52
        lg:h-48 lg:w-4/5
        md:rounded-3xl
        sm:w-11/12
        shadow-xl h-40 w-11/12 rounded-3xl
      "
    >
      <div
        class="
          h-full
          bg-lightGray
          mx-auto
          grid
          sm:grid-cols-4 sm:rounded-3xl sm:my-8
          grid-cols-4 rounded-3xl my-8
        "
      >
        <div
          class="
            flex
            justify-center
            content-center
            xl:h-52 xl:w-52 xl:p-8
            lg:h-48 lg:w-48 lg:p-7
            md:p-6
            sm:w-40 sm:h-40 sm:p-5
            w-40 h-40 p-5
          "
        >
          <img
            class="
              object-cover
              rounded-full
              border-2
              border-gray"
            src="../src/img/rmblogo.png"
          />
        </div>
        <div
          class="
            grid
                          lg:py-12              lg:px-7
                                                md:px-6 
            sm:col-span-3 sm:py-9 sm:grid-row-3 sm:pr-4 sm:pl-12
            col-span-3 pt-8 sm:grid-row-3 pr-4 pl-16
          "
        >
          <span class="font-bebas xl:text-3xl sm:text-2xl text-xl">RMB TASARIM</span>
          <span
            class="font-robol xl:text-xl
                              md:text-lg
                              sm:text-md sm:row-span-2
                              text-sm row-span-2"
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
        h-24 w-11/12 my-7 grid-cols-2
      "
    >
      <div class="grid md:grid-rows-2">
        <span class="font-robol text-center lg:pt-4 md:pt-2 sm:pt-0 md:text-md sm:text-sm text-sm sm:py-x px-2"
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
            md:pt-1 md:text-xl
            pt-2 text-sm h-8 w-2/5
          "
        >
          Instagram
        </div>
      </div>
      <div class="grid md:grid-rows-2">
        <span class="font-robol text-center lg:pt-4 md:pt-2 sm:pt-0 md:text-md sm:text-sm text-sm sm:py-x px-2"
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
            xl:pt-2 xl:h-10
            md:pt-1 md:text-xl
            pt-2 text-sm h-8 w-2/5
          "
        >
          MAĞAZA
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
