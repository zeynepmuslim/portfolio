<template>
  <div
    class="
      mt-5
      grid
      mx-auto
      xl:h-96
      lg:w-3/4
      md:w-4/5
      sm:w-9/12 sm:h-72
      w-11/12
      grid-cols-3 grid-row-4
    "
  >
    <div class="md:row-span-4 sm:row-span-3 my-auto mx-auto row-span-2">
      <img
        class="xl:h-96 lg:h-72 md:h-64 sm:h-52 w-full mx-auto"
        src="/others/avatar.svg"
      />
    </div>
    <div
      class="
        sm:grid sm:grid-rows-2 sm:mt-2
        row-span-2
        col-span-2
        sm:mb-0
        mb-12
        flex flex-col
        mt-2
        mx-auto
      "
    >
      <div class="sm:hidden block h-1/5"></div>
      <div class="font-nick xl:text-7xl md:pt-8 sm:text-6xl pt-0 text-4xl px-7">
        Selamlar!
      </div>
      <div
        class="
          font-nick
          sm:text-center
          text-left
          xl:text-6xl
          lg:text-5xl
          sm:text-4xl sm:pl-7
          text-2xl
          pl-4
        "
      >
        ben,<mark class="text-center">Zeynep Müslim</mark>
      </div>
    </div>

    <div
      class="
        font-robol
        xl:text-2xl xl:pt-3
        md:px-7 md:text-lg
        sm:col-span-2 sm:text-md sm:pl-7 sm:pt-2 sm:text-left
        text-sm
        px-3
        col-span-3
        text-center
        pt-4
      "
    >
      Gündüz tasarımcı, gece yazılımcı, haftada bir Youtuber geri kalan zamanda
      öğrenci olmaya çalışan biriyim.
    </div>
    <div
      class="
        grid
        md:grid-cols-7 md:col-span-2 md:pr-11
        grid-cols-5
        py-7
        col-span-3
      "
    >
      <div class="md:block hidden"></div>
      <a target="_blank" href="https://www.instagram.com/zeynep.muslim.mix/"
        ><img
          class="icons-style pointer yellow-shadow-icon"
          src="/icons/social/instagram.svg"
      /></a>
      <a target="_blank" href="https://www.linkedin.com/in/zeynep-müslim/"
        ><img
          class="icons-style pointer yellow-shadow-icon"
          src="/icons/social/linkedin.svg"
      /></a>
      <a
        target="_blank"
        href="https://www.youtube.com/channel/UCNp9gN3i1hSs4JvL6b3FZHw"
        ><img
          class="icons-style pointer yellow-shadow-icon"
          src="/icons/social/youtube.svg"
      /></a>
      <a target="_blank" href="https://github.com/zeynepmuslim"
        ><img
          class="icons-style pointer yellow-shadow-icon"
          src="/icons/social/github.svg"
      /></a>
      <a
        target="_blank"
        href="https://www.shopier.com/ShowProductNew/storefront.php?shop=rmbtasarim&sid=UUJmaXRTcjlXU0twSG16bjBfLTFfIF8g"
        ><img
          class="icons-style pointer yellow-shadow-icon"
          src="/icons/social/shop.svg"
      /></a>
      <div class="md:block hidden"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Hero',
}
</script>
<style scoped>
mark {
  display: inline-block;
  line-height: 0.03em;
  background: #ffcf16;
  padding-bottom: 0.3em;
  width: 6.5em;
  border-radius: 20px;
}

.icons-style {
  @apply mx-auto my-auto xl:w-12 lg:w-10 sm:w-9 w-3/5;
}
</style>
