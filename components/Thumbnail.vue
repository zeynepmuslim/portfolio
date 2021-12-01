<template>
  <div class="mx-auto pl-3 lg:py-3 sm:pt-7 pt-4 grid grid-rows-2">
    <slot name="image"></slot>
    <div
      class="
        text-center
        font-bebas
        xl:pt-1 xl:text-xl
        lg:mt-0
        xl:w-52
        lg:w-44
        md:w-32
        w-100
        md:-mt-3 md:pt-4
        sm:pt-0
        pr-1
        sm:text-lg
        text-base
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
