<template>
  <div class="mx-auto xl:py-7 grid xl:grid-rows-3">
    <slot name="image"></slot>
    <div class="xl:w-48 font-bebas xl:pt-1 xl:text-xl text-center">
    <slot name="title"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Thumnail',
  components: {
  },
}
</script>