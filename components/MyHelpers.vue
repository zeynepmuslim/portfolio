<template>
  <div class="mx-auto h-auto lg:w-3/4 lg:my-12
                             md:w-4/5 md:mt-3
                             sm:w-9/12 sm:mt-8
                             w-11/12 mt-8">
    <span class="font-nick xl:text-5xl text-center md:text-4xl sm:text-3xl text-2xl"
      ><mark>yardımcılarım</mark></span>
      <div class="lg:h-24 lg:grid-cols-6 lg:mt-7
                       md:h-20 md:grid-cols-6 md:mt-7 md:grid hidden">
          <div class=" xl:w-24 xl:h-24 lg:w-20 lg:h-20 md:w-16 md:h-16 mx-auto bg-contain bg-no-repeat bg-procreateY hover:bg-procreate"></div>
          <div class=" xl:w-24 xl:h-24 lg:w-20 lg:h-20 md:w-16 md:h-16 mx-auto bg-contain bg-no-repeat bg-figmaY hover:bg-figma"></div>
          <div class=" xl:w-24 xl:h-24 lg:w-20 lg:h-20 md:w-16 md:h-16 mx-auto bg-contain bg-no-repeat bg-visualY hover:bg-visual"></div>
          <div class=" xl:w-24 xl:h-24 lg:w-20 lg:h-20 md:w-16 md:h-16 mx-auto bg-contain bg-no-repeat bg-premiereY hover:bg-premiere"></div>
          <div class=" xl:w-24 xl:h-24 lg:w-20 lg:h-20 md:w-16 md:h-16 mx-auto bg-contain bg-no-repeat bg-photoshopY hover:bg-photoshop"></div>
          <div class=" xl:w-24 xl:h-24 lg:w-20 lg:h-20 md:w-16 md:h-16 mx-auto bg-contain bg-no-repeat bg-illustratorY hover:bg-illustrator"></div>
      </div>
      <div class="text-center font-bebas xl:mt-2 xl:text-xl
                                              lg:h-14 lg:grid-cols-6 lg:text-lg
                                              md:h-8 md:grid-cols-6 md:text-md md:grid hidden">
          <span class="mx-auto">Procreate</span>
          <span class="mx-auto">FIgma</span>
          <span class="mx-auto">Visual studio code</span>
          <span class="mx-auto">Adobe Premiere pro</span>
          <span class="mx-auto">Adobe photoshop</span>
          <span class="mx-auto">Adobe ıllustrator</span>
      </div>
      <div class="md:hidden grid grid-rows-2 grid-cols-3 mt-6 text-center sm:text-lg text-sm font-bebas">
        <div class="mb-3">
        <div class="mb-1 sm:h-20 sm:w-20 h-12 w-12 mx-auto bg-contain bg-no-repeat bg-procreateY hover:bg-procreate"></div>
        <span class="mx-auto">Procreate</span>
        </div>
        <div class="mb-4">
        <div class="mb-1 sm:h-20 sm:w-20 h-12 w-12 mx-auto bg-contain bg-no-repeat bg-figmaY hover:bg-figma"></div>
        <span class="mx-auto">FIgma</span>
        </div>
        <div class="mb-4">
        <div class="mb-1 sm:h-20 sm:w-20 h-12 w-12 mx-auto bg-contain bg-no-repeat bg-visualY hover:bg-visual"></div>
        <span class="mx-auto">Visual studio code</span>
        </div>
        <div class="mb-4">
        <div class="mb-1 sm:h-20 sm:w-20 h-12 w-12 mx-auto bg-contain bg-no-repeat bg-premiereY hover:bg-premiere"></div>
        <span class="mx-auto">Adobe Premiere pro</span>
        </div>
        <div class="mb-4">
        <div class="mb-1 sm:h-20 sm:w-20 h-12 w-12 mx-auto bg-contain bg-no-repeat bg-photoshopY hover:bg-photoshop"></div>
        <span class="mx-auto">Adobe photoshop</span>
        </div>
        <div class="mb-4">
        <div class="mb-1 sm:h-20 sm:w-20 h-12 w-12 mx-auto bg-contain bg-no-repeat bg-illustratorY hover:bg-illustrator"></div>
        <span class="mx-auto">Adobe ıllustrator</span>
        </div>




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
