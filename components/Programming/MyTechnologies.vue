<template>
  <div class="mx-auto resp-w top-space">
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
        <img class="icon yellow-shadow-icon" src="/icons/tecs/swift.svg" />
        <span>Swift</span>
      </div>
      <div class="mx-auto">
        <img class="icon yellow-shadow-icon" src="/icons/tecs/js.svg" />
        <span>Javascript</span>
      </div>
      <div class="mx-auto">
        <img class="icon yellow-shadow-icon" src="/icons/tecs/vue.svg" />
        <span>Vue.JS</span>
      </div>
      <div class="mx-auto">
        <img class="icon yellow-shadow-icon" src="/icons/tecs/nuxt.svg" />
        <span>Nuxt.js</span>
      </div>
      <div class="mx-auto">
        <img class="icon yellow-shadow-icon" src="/icons/tecs/nodejs.svg" />
        <span>Node.js</span>
      </div>
      <div class="mx-auto">
        <img class="icon yellow-shadow-icon" src="/icons/tecs/html.svg" />
        <span>html</span>
      </div>
      <div class="mx-auto">
        <img class="icon yellow-shadow-icon" src="/icons/tecs/css.svg" />
        <span>css</span>
      </div>
      <div class="mx-auto">
        <img class="icon yellow-shadow-icon" src="/icons/tecs/bootstrap.svg" />
        <span>bootstrap</span>
      </div>
      <div class="md:hidden block"></div>
      <div class="mx-auto">
        <img class="icon yellow-shadow-icon" src="/icons/tecs/tailwind.svg" />
        <span>tailwind</span>
      </div>
      <div class="mx-auto">
        <img class="icon yellow-shadow-icon" src="/icons/tecs/git.svg" />
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
  @apply lg:h-20 lg:w-20 sm:h-16 sm:w-16 h-12 w-12 mb-2 bg-contain bg-no-repeat mx-auto;
}
</style>
