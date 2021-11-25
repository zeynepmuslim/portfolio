<template>
  <div>
    <div class="grid md:grid-row-7">
      <div class="mx-auto xl:h-20 md:h-16 sm:mb-0 h-14 row-span-2 mb-1">
        <slot name="icon"></slot>
      </div>
      <slot name="title"></slot>
      <slot name="text"></slot>
      <div
        class="
          transition
          duration-500
          ease-in-out
          bg-yellow
          hover:bg-black hover:text-yellow
          group
          row-end-7
          rounded-full
          mx-auto
          grid
          xl:h-10
          lg:mt-20
          md:mt-28 md:w-36
          sm:grid-cols-3 sm:h-8 sm:mt-32
          w-32
          grid-cols-3
          h-8
          mt-24
        "
      >
        <div
          class="
            transition
            duration-500
            ease-in-out
            my-auto
            bg-apple bg-contain bg-no-repeat
            group-hover:bg-appleYellow
            md:ml-8
            h-4
            ml-6
          "
        ></div>
        <span
          class="
            font-bebas
            my-auto
            lg:text-lg lg:pl-2
            md:pl-3
            sm:col-span-2
            col-span-2
            text-md
            pt-1
            pl-2
          "
          >App Store</span
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {},
}
</script>
