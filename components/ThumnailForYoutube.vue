<template>
  <div class="mx-auto pl-3 grid lg:py-3 lg:grid-rows-2
                           sm:pt-7 sm:grid-rows-2
                            pt-4  grid-rows-2">
    <slot name="image"></slot>
    <div class="text-center font-bebas xl:w-48 xl:pt-1
                                               lg:w-52 xl:text-xl lg:mt-0
                                               md:w-52 md:text-md 
                                               sm:w-52 sm:text-lg
                                               w-44 pr-1 text-md
                                               mt-2">
      <slot name="title"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ThumnailForYoutube',
  components: {},
}
</script>
