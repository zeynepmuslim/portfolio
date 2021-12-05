<template>
  <div class="md:hidden block mb-7">
    <div
      class="
        bg-lightGray
        sm:h-44
        h-auto
        flex
        flex-row
        justify-evenly
        rounded-3xl
        shadow-xl
        hover:shadow-inner
        py-4
        pr-4
      "
    >
      <div class="my-auto mx-auto">
        <slot name="icon"></slot>
      </div>
      <div class=" my-auto sm:pl-8">
        <div class="font-robom sm:text-lg text-base">
          <slot name="title"></slot>
        </div>
        <div class="flex-grow font-robol sm:text-sm text-xs">
          <slot name="text"></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppsForStoryMobile',
}
</script>

<style></style>
