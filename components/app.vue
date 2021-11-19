<template>
  <div>
    <div class="grid xl:grid-rows-7 lg:grid-row-7">
      <div class="mx-auto xl:row-span-2 xl:h-20
                          lg:row-span-2 lg:h-20">
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
          xl:grid-cols-3 xl:h-10 xl:w-1/2 xl:mt-20
          lg:grid-cols-3 lg:h-8 lg:w-1/2 lg:mt-20
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
            lg:ml-8 lg:h-4 lg:w-4
          "
        ></div>
        <span
          class="font-bebas my-auto xl:col-span-2 xl:text-xl xl:pt-1 xl:pl-2
                                    lg:col-span-2 lg:text-lg lg:pt-1 lg:pl-2"
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
