<template>
  <div class="mx-auto pl-3 lg:py-3 sm:pt-7 pt-4 flex flex-col">
    <slot name="image"></slot>
    <div
      class="
      mt-2
        text-center
        font-bebas
        xl:pt-1 xl:text-xl
        lg:mt-0
        xl:w-52
        lg:w-44
        md:w-32
        w-100
        md:pt-1
        sm:pt-0
        pr-1
        md:text-base
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
