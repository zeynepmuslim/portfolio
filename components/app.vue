<template>
  <div>
    <div class="grid md:grid-row-7">
      <div class="mx-auto xl:h-20 md:h-16 sm:mb-0 h-14 row-span-2 mb-1">
        <slot name="icon"></slot>
      </div>
      <slot name="title"></slot>
      <slot name="text"></slot>
      
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {},
}
</script>
