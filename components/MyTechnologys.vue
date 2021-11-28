<template>
  <div class="mx-auto resp-w sm:h-auto sm:mb-0 mt-20 mb-12">
    <span class="header-style"><mark>kullandığım teknolojiler</mark></span>
    <div
      class="
        mx-auto
        lg:w-4/5
        grid
        md:grid-rows-2 md:grid-cols-5
        grid-rows-3 grid-cols-4
        font-bebas
        text-center
        mt-12
        sm:gap-x-3
        gap-x-2
        sm:gap-y-8
        gap-y-6
        text-xl
      "
    >
      <div class="mx-auto">
        <div class="bg-swiftY hover:bg-swift icon"></div>
        <span>Swift</span>
      </div>
      <div class="mx-auto">
        <div class="bg-jsY hover:bg-js icon"></div>
        <span>Javascript</span>
      </div>
      <div class="mx-auto">
        <div class="bg-vuejsY hover:bg-vuejs icon"></div>
        <span>Vue.JS</span>
      </div>
      <div class="mx-auto">
        <div class="bg-nuxtY hover:bg-nuxt icon"></div>
        <span>Nuxt.js</span>
      </div>
      <div class="mx-auto">
        <div class="bg-nodejsY hover:bg-nodejs icon"></div>
        <span>Node.js</span>
      </div>
      <div class="mx-auto">
        <div class="bg-htmlY hover:bg-html icon"></div>
        <span>html</span>
      </div>
      <div class="mx-auto">
        <div class="bg-cssY hover:bg-css icon"></div>
        <span>css</span>
      </div>
      <div class="mx-auto">
        <div class="bg-bootstrapY hover:bg-bootstrap icon"></div>
        <span>bootstrap</span>
      </div>
      <div class="md:hidden block"></div>
      <div class="mx-auto">
        <div class="bg-tailwindY hover:bg-tailwind icon"></div>
        <span>tailwind</span>
      </div>
      <div class="mx-auto">
        <div class="bg-gitY hover:b-git icon"></div>
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
  width: 8.5em;
}
.icon {
  @apply lg:h-20 lg:w-20 h-16 w-16 mb-2 bg-contain bg-no-repeat;
}
</style>
