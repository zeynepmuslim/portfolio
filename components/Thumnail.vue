<template>
  <div class="mx-auto grid lg:py-7 lg:grid-rows-2
                           sm:pt-7 sm:grid-rows-2">
    <slot name="image"></slot>
    <div class="text-center font-bebas xl:w-48 xl:pt-1
                                               lg:w-44 xl:text-xl
                                               md:w-32 md:text-lg
                                               sm:w-44 sm:text-lg">
      <slot name="title"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Thumnail',
  components: {},
}
</script>
