<template>
  <div
    class="
      grid
      mx-auto
      xl:w-3/4 xl:h-96 xl:grid-cols-3 xl:grid-row-4 xl:my-16 xl:pt-10
      lg:w-3/4 lg:h-72 lg:grid-cols-3 lg:pt-28
    "
  >
    <div class="xl:row-span-4 lg:row-span-4">
      <img class="xl:h-96 lg:h-72 mx-auto" src="../src/vectors/avatar.svg" />
    </div>
    <div class="grid xl:row-span-2 xl:col-span-2 xl:grid-rows-2
                     lg:row-span-2 lg:col-span-2 lg:grid-rows-2">
      <span class="font-nick xl:text-7xl xl:px-7
                             lg:text-6xl lg:px-7">Selamlar!</span>
      <span class="font-nick text-center xl:text-6xl lg:text-5xl"
        >ben,<mark>Zeynep Müslim</mark></span
      >
    </div>
    <div class="font-robol xl:col-span-2 xl:px-7 xl:text-2xl xl:pt-3
                           lg:col-span-2 lg:px-7 lg:text-xl lg:pt-3">
      Gündüz tasarımcı, gece yazılımcı, haftada bir Youtuber geri kalan zamanda
      öğrenci olmaya çalışan biriyim.
    </div>
    <div class="grid xl:grid-cols-7 xl:py-7 xl:col-span-2 xl:pr-11
                     lg:grid-cols-7 lg:py-7 lg:col-span-2 lg:pr-11">
      <div></div>
      <div
        class="
          mx-auto
          hover:bg-instagram
          bg-contain bg-no-repeat bg-instagramYellow
          xl:w-12 xl:h-12
          lg:w-10 lg:h-10
        "
      ></div>
      <div
        class="
          mx-auto
          hover:bg-linkedin
          bg-linkedinYellow bg-contain bg-no-repeat
          xl:w-12 xl:h-12
          lg:w-10 lg:h-10
        "
      ></div>
      <div
        class="
          mx-auto
          hover:bg-youtube
          bg-contain bg-no-repeat bg-youtubeYellow
          xl:w-12 xl:h-12
          lg:w-10 lg:h-10
        "
      ></div>
      <div
        class="
          mx-auto
          hover:bg-github
          bg-contain bg-no-repeat bg-githubYellow
          xl:w-12 xl:h-12
          lg:w-10 lg:h-10
        "
      ></div>
      <div
        class="
          mx-auto
          hover:bg-shop
          bg-shopYellow bg-contain bg-no-repeat
          xl:w-12 xl:h-12
          lg:w-10 lg:h-10
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
