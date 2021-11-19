<template>
  <div>
    <div class="grid md:grid-row-7">
      <div class="mx-auto xl:h-20
                          md:h-16
                          sm:h-14 md:row-span-2">
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
          md:mt-28
          sm:grid-cols-3 sm:h-8 sm:mt-32 md:w-1/2
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
            xl:ml-9 xl:h-6 xl:w-6
            lg:ml-8
                    md:h-4 md:w-4
            sm:ml-5 sm:h-3 sm:w-3

          "
        ></div>
        <span
          class="font-bebas my-auto xl:text-xl
                                    lg:text-lglg:pl-2
                                    md:text-md
                                    sm:col-span-2 sm:text-sm sm:pt-1 sm:pl-1"
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
