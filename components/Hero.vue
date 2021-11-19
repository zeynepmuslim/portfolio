<template>
  <div class="xl:w-3/4 mx-auto xl:h-96 grid xl:grid-cols-3 xl:grid-row-4 xl:my-16 xl:pt-10">
    <div class="xl:row-span-4 ">
      <img class="xl:h-96 mx-auto" src="../src/vectors/avatar.svg" />
    </div>
    <div class="xl:row-span-2 xl:col-span-2 grid xl:grid-rows-2">
      <span class="font-nick xl:text-7xl xl:px-7">Selamlar!</span>
      <span class="font-nick xl:text-6xl text-center">ben,<mark>Zeynep Müslim</mark></span>
    </div>
    <div class="font-robol xl:col-span-2 xl:px-7 xl:text-2xl xl:pt-3">
      Gündüz tasarımcı, gece yazılımcı, haftada bir Youtuber geri kalan zamanda
      öğrenci olmaya çalışan biriyim.
    </div>
    <div class="grid xl:grid-cols-7 xl:py-7 xl:col-span-2 xl:pr-11">
      <div></div>
      <div class="mx-auto xl:w-12 xl:h-12 bg-instagramYellow hover:bg-instagram bg-contain bg-no-repeat"></div>
      <div class="mx-auto xl:w-12 xl:h-12 bg-linkedinYellow hover:bg-linkedin bg-contain bg-no-repeat"></div>
      <div class="mx-auto xl:w-12 xl:h-12 bg-youtubeYellow hover:bg-youtube bg-contain bg-no-repeat"></div>
      <div class="mx-auto xl:w-12 xl:h-12 bg-githubYellow hover:bg-github bg-contain bg-no-repeat"></div>
      <div class="mx-auto xl:w-12 xl:h-12 bg-shopYellow hover:bg-shop bg-contain bg-no-repeat"></div>
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
