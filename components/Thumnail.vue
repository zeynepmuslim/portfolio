<template>
  <div class="mx-auto py-7 grid grid-rows-3">
    <slot name="image"></slot>
    <div class="w-48 font-bebas pt-1 text-xl text-center">
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