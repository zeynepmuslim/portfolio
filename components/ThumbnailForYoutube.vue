<template>
  <div class="mx-auto grid sm:pt-7 pt-4 grid-rows-2">
    <slot name="image"></slot>
    <div
      class="
        text-center
        font-bebas
        xl:pt-1 xl:text-xl
        lg:mt-0
        md:text-md
        sm:w-52 sm:text-lg
        w-full
        text-base
        mt-2
      "
    >
      <slot name="title"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ThumbnailForYoutube',
  components: {},
}
</script>
