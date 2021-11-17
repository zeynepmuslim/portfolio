<template>
  <div class="w-3/4 mx-auto h-96 grid grid-cols-3 grid-row-4 my-16">
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
      <img class="mx-auto h-12" src="../src/vectors/instagram.svg">
      <img class="mx-auto h-12" src="../src/vectors/linkedin.svg">
      <img class="mx-auto h-12" src="../src/vectors/youtube.svg">
      <img class="mx-auto h-12" src="../src/vectors/github.svg">
      <img class="mx-auto h-12" src="../src/vectors/shop.svg">
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
