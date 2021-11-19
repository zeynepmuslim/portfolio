<template>
  <div class="mx-auto grid xl:py-7 xl:grid-rows-3 
                           lg:py-7 lg:grid-rows-3
                           md:py-7 md:grid-rows-3">
    <slot name="image"></slot>
    <div class="text-center mx-auto font-bebas xl:w-48 xl:pt-1 xl:text-xl
                                               lg:w-44 lg:text-xl
                                               md:w-32 md:text-xl">
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
