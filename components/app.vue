<template>
  <div>
    <div class="grid md:grid-row-7">
      <div class="mx-auto xl:row-span-2 xl:h-20
                          md:row-span-2 md:h-16">
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
          lg:grid-cols-3 lg:h-8 lg:w-1/2 lg:mt-20
          md:grid-cols-3 md:h-8 md:w-1/2 md:mt-28
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
            md:ml-5 md:h-4 md:w-4
          "
        ></div>
        <span
          class="font-bebas my-auto xl:text-xl
                                    lg:text-lg lg:pt-1 lg:pl-2
                                    md:col-span-2 md:text-md md:pt-1 md:pl-1"
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
