<template>
  <div class="mx-auto h-auto xl:w-3/4 xl:my-12
                             lg:w-3/4 lg:my-12">
    <span class="font-nick xl:text-5xl text-center lg:text-4xl"
      ><mark>yardımcılarım</mark></span>
      <div class="grid xl:h-24 xl:grid-cols-6 xl:mt-7
                      lg:h-24 lg:grid-cols-6 lg:mt-7">
          <div class=" xl:w-24 xl:h-24 lg:w-20 lg:h-20 mx-auto bg-contain bg-no-repeat bg-procreateY hover:bg-procreate"></div>
          <div class=" xl:w-24 xl:h-24 lg:w-20 lg:h-20 mx-auto bg-contain bg-no-repeat bg-figmaY hover:bg-figma"></div>
          <div class=" xl:w-24 xl:h-24 lg:w-20 lg:h-20 mx-auto bg-contain bg-no-repeat bg-visualY hover:bg-visual"></div>
          <div class=" xl:w-24 xl:h-24 lg:w-20 lg:h-20 mx-auto bg-contain bg-no-repeat bg-premiereY hover:bg-premiere"></div>
          <div class=" xl:w-24 xl:h-24 lg:w-20 lg:h-20 mx-auto bg-contain bg-no-repeat bg-photoshopY hover:bg-photoshop"></div>
          <div class=" xl:w-24 xl:h-24 lg:w-20 lg:h-20 mx-auto bg-contain bg-no-repeat bg-illustratorY hover:bg-illustrator"></div>
      </div>
      <div class="grid text-center font-bebas xl:h-14 xl:grid-cols-6 xl:mt-2 xl:text-xl
                                              lg:h-14 lg:grid-cols-6 lg:text-lg">
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
