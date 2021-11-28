<template>
  <div class="mx-auto resp-w sm:h-auto sm:mb-0 mt-6 mb-12">
    <span class="header-style"><mark>mağazamdan örnekler</mark></span>
    <div class="hidden md:block w-4/5 mx-auto">
      <div
        class="grid grid-rows-3 grid-cols-4 mt-7 font-robol xl:text-md text-sm"
      >
        <div class="row-span-3 mx-auto my-auto mr-3 lg:ml-0 md:-ml-8">
          <div
            class="
              bg-contain bg-no-repeat bg-earringY
              hover:bg-earring
              h-52
              w-40
            "
          ></div>
        </div>
        <div class="col-span-2 row-span-2 flex p-3 h-26">
          <span class="lg:w-3/4"
            >Benim tarafımdan çizilip boyanmış, kesilip ısı ile
            yoğunlaştırılmış, epoksi reçine ile kaplanmış, aparatları takılmış
            ve fotoğraflanmış bir küpe çifti.
          </span>
        </div>
        <div class="row-span-3 mx-auto my-auto ml-3">
          <div
            class="
              bg-contain bg-no-repeat bg-stickerY
              hover:bg-sticker
              h-52
              w-40
            "
          ></div>
        </div>
        <div
          class="
            col-span-2
            flex
            justify-end
            flex-wrap
            content-end
            text-right
            p-3
            h-26
            xl:m-0
            lg:-mt-6
          "
        >
          <span class="lg:w-3/4 lg:h-1/2"
            >Evimde ürettiğim sticker setlerinde bir parça.</span
          >
        </div>
      </div>
    </div>
    <div class="grid grid-cols-2 font-robol text-sm text-center md:hidden mt-7">
      <div class="grid grid-rows-4">
        <div class="row-span-2 w-44 mx-auto">
          <div
            class="
              bg-contain bg-no-repeat bg-earringY
              hover:bg-earring
              h-56
              w-44
            "
          ></div>
        </div>
        <div class="row-span-2 p-3">
          Benim tarafımdan çizilip boyanmış, kesilip ısı ile yoğunlaştırılmış,
          epoksi reçine ile kaplanmış, aparatları takılmış ve fotoğraflanmış bir
          küpe çifti.
        </div>
      </div>
      <div class="grid grid-rows-4">
        <div class="row-span-2 w-44 mx-auto">
          <div
            class="
              bg-contain bg-no-repeat bg-stickerY
              hover:bg-sticker
              h-56
              w-44
            "
          ></div>
        </div>

        <div class="row-span-2 p-3">
          Evimde ürettiğim sticker setlerinde bir parça.
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MyShopExample',
}
</script>

<style scoped>
mark {
  width: 8.5em;
}
</style>
