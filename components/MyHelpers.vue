<template>
  <div class="w-3/4 mx-auto h-auto my-12">
    <span class="font-nick text-5xl text-center"
      ><mark>yardımcılarım</mark></span>
      <div class="grid h-24 grid-cols-6 mt-7">
          <div class="mx-auto w-24 h-24 bg-contain bg-no-repeat bg-procreateY hover:bg-procreate"></div>
          <div class="mx-auto w-24 h-24 bg-contain bg-no-repeat bg-figmaY hover:bg-figma"></div>
          <div class="mx-auto w-24 h-24 bg-contain bg-no-repeat bg-visualY hover:bg-visual"></div>
          <div class="mx-auto w-24 h-24 bg-contain bg-no-repeat bg-premiereY hover:bg-premiere"></div>
          <div class="mx-auto w-24 h-24 bg-contain bg-no-repeat bg-photoshopY hover:bg-photoshop"></div>
          <div class="mx-auto w-24 h-24 bg-contain bg-no-repeat bg-illustratorY hover:bg-illustrator"></div>
      </div>
      <div class="grid h-14 grid-cols-6 mt-2 text-xl text-center font-bebas">
          <span class="mx-auto">Procreate</span>
          <span class="mx-auto">FIgma</span>
          <span class="mx-auto">Visual studio code</span>
          <span class="mx-auto">Adobe Premiere pro</span>
          <span class="mx-auto">Adobe photoshop</span>
          <span class="mx-auto">Adobe ıllustrator</span>
      </div>
  </div>
</template>

<script>
export default {
    name: 'MyHelpers',
}
</script>

<style scoped>
mark {
  display: inline-block;
  line-height: 0.03em;
  background: #ffcf16;
  padding-bottom: 0.3em;
  width: 5.5em;
  border-radius: 20px;
}
</style>
