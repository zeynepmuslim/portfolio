<template>
  <div class="top-space mx-auto resp-w">
    <span class="header-style"><mark>küçük işletmem</mark></span>
    <div class="mx-auto xl:h-52 lg:h-48 lg:w-4/5 h-40 w-11/12 rounded-3xl">
      <div
        class="
          h-100
          bg-lightGray
          mx-auto
          shadow-xl
          hover:shadow-inner
          grid
          sm:grid-cols-4
          grid-cols-2
          rounded-3xl
          my-8
        "
      >
        <div
          class="
            xl:h-52 xl:w-52 xl:p-8
            lg:h-48 lg:w-48 lg:p-7
            md:p-6
            sm:w-40 sm:h-40 sm:p-5
            w-full
            p-5
            my-auto
          "
        >
          <a target="_blank" href="https://www.instagram.com/rmb.tasarim/"
            ><img
              class="object-cover rounded-full border-2 border-gray"
              src="/others/rmblogo.png"
          /></a>
        </div>
        <div
          class="grid md:px-6 sm:pl-12 sm:col-span-3 my-auto sm:grid-row-3 pr-4"
        >
          <span class="font-bebas xl:text-3xl sm:text-2xl text-lg"
            >RMB TASARIM</span
          >
          <span
            class="
              font-robol
              xl:text-xl
              md:text-lg
              sm:text-base
              text-xs
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
        <a target="_blank" href="https://www.instagram.com/rmb.tasarim/"
          ><div class="button">Instagram</div></a
        >
      </div>
      <div class="grid md:grid-rows-2">
        <span class="text">Ürünleri incelemek ve satın almak için.</span>
        <a
          target="_blank"
          href="https://www.shopier.com/ShowProductNew/storefront.php?shop=rmbtasarim&sid=UUJmaXRTcjlXU0twSG16bjBfLTFfIF8g"
          ><div class="button">MAĞAZA</div></a
        >
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

.text {
  @apply font-robol text-center lg:pt-4 md:pt-2 sm:pt-0 sm:text-sm text-xs px-2;
}
</style>
