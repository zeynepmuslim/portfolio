<template>
  <div>
    <div class="grid grid-rows-7">
      <div class="row-span-2 mx-auto h-20">
        <slot name="icon"></slot>
      </div>
      <slot name="title"></slot>
      <slot name="text"></slot>
      <div class="mt-20 transition duration-500 ease-in-out bg-yellow hover:bg-black group row-end-7 w-1/2 hover:text-yellow rounded-full h-10 mx-auto grid grid-cols-3">
        <div class="transition duration-500 ease-in-out h-6 w-6 my-auto ml-9 bg-apple group-hover:bg-appleYellow bg-contain bg-no-repeat"></div>
        <span class="font-bebas my-auto col-span-2 text-xl pt-1 pl-2">App Store</span>
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
