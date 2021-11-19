<template>
  <div>
    <div class="grid xl:grid-rows-7">
      <div class="xl:row-span-2 mx-auto xl:h-20">
        <slot name="icon"></slot>
      </div>
      <slot name="title"></slot>
      <slot name="text"></slot>
      <div class="xl:mt-20 transition duration-500 ease-in-out bg-yellow hover:bg-black group row-end-7 xl:w-1/2 hover:text-yellow rounded-full xl:h-10 mx-auto grid xl:grid-cols-3">
        <div class="transition duration-500 ease-in-out xl:h-6 xl:w-6 my-auto xl:ml-9 bg-apple group-hover:bg-appleYellow bg-contain bg-no-repeat"></div>
        <span class="font-bebas my-auto xl:col-span-2 xl:text-xl xl:pt-1 xl:pl-2">App Store</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {
  },
}
</script>
