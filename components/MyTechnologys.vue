<template>
  <div
    class="
      mx-auto
      lg:w-3/4
      md:w-4/5
      sm:w-9/12 sm:h-auto sm:mb-0
      w-11/12
      mt-20
      mb-12
    "
  >
    <span class="font-nick xl:text-5xl md:text-4xl text-3xl text-center"
      ><mark>kullandığım teknolojiler</mark></span
    >
    <div
      class="
        mx-auto
        lg:w-4/5
        grid md:grid-rows-2 md:grid-cols-5
        grid-rows-3 grid-cols-4
        font-bebas
        text-center
        mt-12
        sm:gap-x-3 gap-x-2
        sm:gap-y-8 gap-y-6
        text-xl
      "
    >
      <div class="mx-auto">
        <div class="bg-contain bg-no-repeat bg-swiftY hover:bg-swift lg:h-20 lg:w-20 w-16 h-16 mb-2"></div>
        <span>Swift</span>
      </div>
      <div class="mx-auto">
        <div class="bg-contain bg-no-repeat bg-jsY hover:bg-js lg:h-20 lg:w-20 h-16 w-16 mb-2"></div>
        <span>Javascript</span>
      </div>
      <div class="mx-auto">
        <div class="bg-contain bg-no-repeat bg-vuejsY hover:bg-vuejs lg:h-20 lg:w-20 h-16 w-16 mb-2"></div>
        <span>Vue.JS</span>
      </div>
      <div class="mx-auto">
        <div class="bg-contain bg-no-repeat bg-nuxtY hover:bg-nuxt lg:h-20 lg:w-20 h-16 w-16 mb-2"></div>
        <span>Nuxt.js</span>
      </div>
      <div class="mx-auto">
        <div class="bg-contain bg-no-repeat bg-nodejsY hover:bg-nodejs lg:h-20 lg:w-20 h-16 w-16 mb-2"></div>
        <span>Node.js</span>
      </div>
      <div class="mx-auto">
        <div class="bg-contain bg-no-repeat bg-htmlY hover:bg-html lg:h-20 lg:w-20 h-16 w-16 mb-2"></div>
        <span>html</span>
      </div>
      <div class="mx-auto">
        <div class="bg-contain bg-no-repeat bg-cssY hover:bg-css lg:h-20 lg:w-20 h-16 w-16 mb-2"></div>
        <span>css</span>
      </div>
      <div class="mx-auto">
        <div class="bg-contain bg-no-repeat bg-bootstrapY hover:bg-bootstrap lg:h-20 lg:w-20 h-16 w-16 mb-2"></div>
        <span>bootstrap</span>
      </div>
      <div class="md:hidden block"></div>
      <div class="mx-auto">
        <div class="bg-contain bg-no-repeat bg-tailwindY hover:bg-tailwind lg:h-20 lg:w-20 h-16 w-16 mb-2"></div>
        <span>tailwind</span>
      </div>
      <div class="mx-auto">
        <div class="bg-contain bg-no-repeat bg-gitY hover:b-git lg:h-20 lg:w-20 h-16 w-16 mb-2"></div>
        <span>gIt</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MyTechnologys',
}
</script>

<style scoped>
mark {
  display: inline-block;
  line-height: 0.03em;
  background: #ffcf16;
  padding-bottom: 0.3em;
  width: 8.5em;
  border-radius: 20px;
}
</style>
