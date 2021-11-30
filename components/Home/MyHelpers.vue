<template>
  <div class="mx-auto h-auto resp-w lg:my-12 md:mt-3 mt-8">
    <span class="header-style"><mark>yardımcılarım</mark></span>
    <div class="lg:h-24 md:h-20 md:grid-cols-6 md:mt-7 md:grid hidden">
      <img
        class="icon yellow-shadow pointer"
        src="/icons/helpers/procreate.png"
      />
      <img class="icon yellow-shadow" src="/icons/helpers/figma.png" />
      <img class="icon yellow-shadow" src="/icons/helpers/visual.png" />
      <img class="icon yellow-shadow" src="/icons/helpers/premiere.png" />
      <img class="icon yellow-shadow" src="/icons/helpers/photoshop.png" />
      <img class="icon yellow-shadow" src="/icons/helpers/illustrator.png" />
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
        <img
          class="icon-mobile yellow-shadow"
          src="/icons/helpers/procreate.png"
        />
        <span class="mx-auto">Procreate</span>
      </div>
      <div class="mb-4">
        <img class="icon-mobile yellow-shadow" src="/icons/helpers/figma.png" />
        <span class="mx-auto">FIgma</span>
      </div>
      <div class="mb-4">
        <img
          class="icon-mobile yellow-shadow"
          src="/icons/helpers/visual.png"
        />
        <span class="mx-auto">Visual studio code</span>
      </div>
      <div class="mb-4">
        <img
          class="icon-mobile yellow-shadow"
          src="/icons/helpers/premiere.png"
        />
        <span class="mx-auto">Adobe Premiere pro</span>
      </div>
      <div class="mb-4">
        <img
          class="icon-mobile yellow-shadow"
          src="/icons/helpers/photoshop.png"
        />
        <span class="mx-auto">Adobe photoshop</span>
      </div>
      <div class="mb-4">
        <img
          class="icon-mobile yellow-shadow"
          src="/icons/helpers/illustrator.png"
        />
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
  @apply xl:w-24 xl:h-24 lg:w-20 lg:h-20 md:w-16 md:h-16 mx-auto;
}
.icon-mobile {
  @apply sm:h-20 sm:w-20 h-16 w-16 mx-auto mb-3;
}
</style>
