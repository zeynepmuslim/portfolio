<template>
  <div
    class="
      mx-auto
      transition
      duration-500
      ease-in-out
      bg-yellow
      hover:bg-black hover:text-yellow
      rounded-full
      text-center
      font-bebas
      xl:h-10 xl:text-lg
      md:text-base
      pt-1.5
      text-sm
      h-8
      w-3/4
    "
  >
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'Button',
}
</script>
