<template>
  <div class="mx-auto h-auto resp-w lg:my-12 md:mt-3 mt-8">
    <span class="header-style"><mark>yardımcılarım</mark></span>
    <div class="lg:h-24 md:h-20 md:grid-cols-6 md:mt-7 md:grid hidden">
      <div class="icon bg-procreateY hover:bg-procreate"></div>
      <div class="icon bg-figmaY hover:bg-figma"></div>
      <div class="icon bg-visualY hover:bg-visual"></div>
      <div class="icon bg-premiereY hover:bg-premiere"></div>
      <div class="icon bg-photoshopY hover:bg-photoshop"></div>
      <div class="icon bg-illustratorY hover:bg-illustrator"></div>
    </div>
    <div
      class="
        text-center
        font-bebas
        xl:mt-2 xl:text-xl
        lg:h-14 lg:text-lg
        md:h-8 md:grid-cols-6 md:text-md md:grid
        hidden
      "
    >
      <span class="mx-auto">Procreate</span>
      <span class="mx-auto">FIgma</span>
      <span class="mx-auto">Visual studio code</span>
      <span class="mx-auto">Adobe Premiere pro</span>
      <span class="mx-auto">Adobe photoshop</span>
      <span class="mx-auto">Adobe ıllustrator</span>
    </div>
    <div
      class="
        md:hidden
        grid grid-rows-2 grid-cols-3
        mt-6
        text-center
        sm:text-lg
        text-sm
        font-bebas
      "
    >
      <div class="mb-3">
        <div class="icon-mobile bg-procreateY hover:bg-procreate"></div>
        <span class="mx-auto">Procreate</span>
      </div>
      <div class="mb-4">
        <div class="icon-mobilebg-figmaY hover:bg-figma"></div>
        <span class="mx-auto">FIgma</span>
      </div>
      <div class="mb-4">
        <div class="icon-mobilebg-visualY hover:bg-visual"></div>
        <span class="mx-auto">Visual studio code</span>
      </div>
      <div class="mb-4">
        <div class="icon-mobilebg-premiereY hover:bg-premiere"></div>
        <span class="mx-auto">Adobe Premiere pro</span>
      </div>
      <div class="mb-4">
        <div class="icon-mobilebg-photoshopY hover:bg-photoshop"></div>
        <span class="mx-auto">Adobe photoshop</span>
      </div>
      <div class="mb-4">
        <div class="icon-mobilebg-illustratorY hover:bg-illustrator"></div>
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
  width: 5.5em;
}
.icon {
  @apply xl:w-24 xl:h-24 lg:w-20 lg:h-20 md:w-16 md:h-16 mx-auto bg-contain bg-no-repeat;
}
.icon-mobile {
  @apply mb-1 sm:h-20 sm:w-20 h-16 w-16 mx-auto bg-contain bg-no-repeat;
}
</style>
