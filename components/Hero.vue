<template>
  <div
    class="
      grid
      mx-auto
               xl:h-96 xl:grid-row-4 xl:my-16 xl:pt-10
      lg:w-3/4 lg:h-72 lg:pt-28
      md:w-4/5 md:h-72 md:grid-cols-3 md:pt-28
    "
  >
    <div class="xl:row-span-4 lg:row-span-4 md:row-span-4">
      <img class="xl:h-96 lg:h-72 md:h-64 mx-auto" src="../src/vectors/avatar.svg" />
    </div>
    <div class="grid md:row-span-2 md:col-span-2 md:grid-rows-2 md:-mt-6">
      <span class="font-nick xl:text-7xl
                             lg:text-6xl
                             md:text-5xl md:px-7 md:pt-8">Selamlar!</span>
      <span class="font-nick text-center xl:text-6xl lg:text-5xl md:text-4xl"
        >ben,<mark>Zeynep Müslim</mark></span
      >
    </div>
    <div class="font-robol xl:text-2xl xl:pt-3
                           md:col-span-2 md:px-7 md:text-lg md:-mt-6">
      Gündüz tasarımcı, gece yazılımcı, haftada bir Youtuber geri kalan zamanda
      öğrenci olmaya çalışan biriyim.
    </div>
    <div class="grid lg:grid-cols-7 lg:py-7 lg:col-span-2 lg:pr-11
                     md:grid-cols-7 md:py-7 md:col-span-2 md:pr-11">
      <div></div>
      <div
        class="
          mx-auto
          hover:bg-instagram
          bg-contain bg-no-repeat bg-instagramYellow
          xl:w-12 xl:h-12
          lg:w-10 lg:h-10
          md:w-9 md:h-9
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
        "
      ></div>
      <div></div>
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
