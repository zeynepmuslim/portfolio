<template>
  <div
    class="
      grid
      mx-auto
               xl:h-96 xl:grid-row-4 xl:my-16 xl:pt-10
      lg:w-3/4 lg:h-72 lg:pt-28
      md:w-4/5 md:h-72 md:grid-cols-3 md:pt-28
      sm:w-9/12 sm:h-72 sm:grid-cols-3 sm:pt-28 sm:grid-row-4
      w-11/12 h-auto grid-cols-3 pt-16 grid-row-4
    "
  >
    <div class="xl:row-span-4 lg:row-span-4 md:row-span-4 sm:row-span-3 row-span-2">
      <img class="xl:h-96 lg:h-72 md:h-64 sm:h-52 h-auto mx-auto" src="../src/vectors/avatar.svg" />
    </div>
    <div class="grid sm:row-span-2 sm:col-span-2 sm:grid-rows-2 sm:mt-2 row-span-2 col-span-2 grid-rows-4 mt-2">
      <div class="sm:hidden block h-1/5"></div>
      <span class="font-nick xl:text-7xl
                             lg:text-6xl
                             md:text-5xl md:px-7 md:pt-8
                             sm:text-5xl sm:px-7 pt-0
                             text-4xl px-7
                             ">Selamlar!</span>
      <span class="font-nick text-center xl:text-6xl lg:text-5xl md:text-4xl sm:text-4xl sm:pl-7 text-3xl pl-3"
        >ben,<mark>Zeynep Müslim</mark></span
      >
    </div>
    
    <div class="font-robol xl:text-2xl xl:pt-3
                           md:col-span-2 md:px-7 md:text-lg md:-mt-6
                           sm:col-span-2 sm:text-md sm:pl-7 sm:pt-2 sm:text-left
                           text-md px-3 pt-4 col-span-3 text-center">
      Gündüz tasarımcı, gece yazılımcı, haftada bir Youtuber geri kalan zamanda
      öğrenci olmaya çalışan biriyim.
    </div>
    <div class="grid lg:grid-cols-7 lg:py-7 lg:col-span-2 lg:pr-11
                     md:grid-cols-7 md:py-7 md:col-span-2 md:pr-11
                     sm:grid-cols-5 sm:py-7 sm:col-span-3
                     grid-cols-5 py-7 col-span-3">
      <div class="md:block hidden"></div>
      <div
        class="
          mx-auto
          hover:bg-instagram
          bg-contain bg-no-repeat bg-instagramYellow
          xl:w-12 xl:h-12
          lg:w-10 lg:h-10
          sm:w-9 sm:h-9
          w-10 h-10
        "
      ></div>
      <div
        class="
          mx-auto
          hover:bg-linkedin
          bg-linkedinYellow bg-contain bg-no-repeat
          xl:w-12 xl:h-12
          lg:w-10 lg:h-10
          md:w-9 md:h-9
          sm:w-9 sm:h-9
          w-10 h-10
        "
      ></div>
      <div
        class="
          mx-auto
          hover:bg-youtube
          bg-contain bg-no-repeat bg-youtubeYellow
          xl:w-12 xl:h-12
          lg:w-10 lg:h-10
          md:w-9 md:h-9
          sm:w-9 sm:h-9
          w-10 h-10
        "
      ></div>
      <div
        class="
          mx-auto
          hover:bg-github
          bg-contain bg-no-repeat bg-githubYellow
          xl:w-12 xl:h-12
          lg:w-10 lg:h-10
          md:w-9 md:h-9
          sm:w-9 sm:h-9
          w-10 h-10
        "
      ></div>
      <div
        class="
          mx-auto
          hover:bg-shop
          bg-shopYellow bg-contain bg-no-repeat
          xl:w-12 xl:h-12
          lg:w-10 lg:h-10
          md:w-9 md:h-9
          sm:w-9 sm:h-9
          w-10 h-10
        "
      ></div>
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
</style>
