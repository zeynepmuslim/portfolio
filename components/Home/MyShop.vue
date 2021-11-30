<template>
  <div class="xl:mt-16 mx-auto resp-w sm:mt-11">
    <span class="header-style"><mark>küçük işletmem</mark></span>
    <div class="mx-auto xl:h-52 lg:h-48 lg:w-4/5 h-40 w-11/12 rounded-3xl">
      <div
        class="
          h-full
          bg-lightGray
          mx-auto
          shadow-xl
          hover:shadow-inner
          grid grid-cols-4
          rounded-3xl
          my-8
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
            w-40
            h-40
            p-5
          "
        >
          <img
            class="object-cover rounded-full border-2 border-gray"
            src="/others/rmblogo.png"
          />
        </div>
        <div
          class="
            grid
            lg:py-12 lg:px-7
            md:px-6
            sm:py-9 sm:pl-12
            col-span-3
            pt-8
            sm:grid-row-3
            pr-4
            pl-16
          "
        >
          <span class="font-bebas xl:text-3xl sm:text-2xl text-xl"
            >RMB TASARIM</span
          >
          <span
            class="
              font-robol
              xl:text-xl
              md:text-lg
              sm:text-md
              text-sm
              row-span-2
            "
            >Kendini ifade etmenin en güzel yolu: tasarım sticker, broş ve
            aksesuarlar.</span
          >
        </div>
      </div>
    </div>
    <div class="grid mx-auto lg:w-4/5 h-24 w-11/12 my-7 grid-cols-2">
      <div class="grid md:grid-rows-2">
        <span class="text">Yapılış aşamaları ve diğer her şey için</span>
        <div class="button">Instagram</div>
      </div>
      <div class="grid md:grid-rows-2">
        <span class="text">Ürünleri incelemek ve satın almak için.</span>
        <div class="button">MAĞAZA</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MyShop',
  components: {},
}
</script>

<style scoped>
mark {
  width: 6em;
}

.button {
  @apply mx-auto transition duration-500 ease-in-out bg-yellow hover:bg-black hover:text-yellow rounded-full text-center font-bebas xl:pt-2 xl:h-10 md:pt-1 md:text-xl pt-2 text-sm h-8 w-2/5;
}
.text {
  @apply font-robol text-center lg:pt-4 md:pt-2 sm:pt-0 text-sm px-2;
}
</style>
