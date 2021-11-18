<template>
  <div class="w-3/4 mx-auto h-96 grid grid-cols-3 grid-row-4 my-16 pt-10">
    <div class="row-span-4 ">
      <img class="h-96 mx-auto" src="../src/vectors/avatar.svg" />
    </div>
    <div class=" row-span-2 col-span-2 grid grid-rows-2">
      <span class="font-nick text-7xl px-7">Selamlar!</span>
      <span class="font-nick text-6xl text-center">ben,<mark>Zeynep Müslim</mark></span>
    </div>
    <div class="font-robol col-span-2 px-7 text-2xl pt-3">
      Gündüz tasarımcı, gece yazılımcı, haftada bir Youtuber geri kalan zamanda
      öğrenci olmaya çalışan biriyim.
    </div>
    <div class="grid grid-cols-7 py-7 col-span-2 pr-11">
      <div></div>
      <div class="mx-auto w-12 h-12 bg-instagramYellow hover:bg-instagram bg-contain bg-no-repeat"></div>
      <div class="mx-auto w-12 h-12 bg-linkedinYellow hover:bg-linkedin bg-contain bg-no-repeat"></div>
      <div class="mx-auto w-12 h-12 bg-youtubeYellow hover:bg-youtube bg-contain bg-no-repeat"></div>
      <div class="mx-auto w-12 h-12 bg-githubYellow hover:bg-github bg-contain bg-no-repeat"></div>
      <div class="mx-auto w-12 h-12 bg-shopYellow hover:bg-shop bg-contain bg-no-repeat"></div>
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
