<template>
  <div class="mx-auto pl-3 grid lg:py-3 sm:pt-7 pt-4 grid-rows-2">
    <slot name="image"></slot>
    <div
      class="
        text-center
        font-bebas
        xl:w-48 xl:pt-1
        lg:w-44
        xl:text-xl
        lg:mt-0
        md:w-32 md:-mt-3
        sm:text-lg
        w-44
        pr-1
        text-sm
      "
    >
      <slot name="title"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Thumbnail',
  components: {},
}
</script>
