<template>
  <div class="">
    <Hero />
    <MyApps />
    <MyShop />
    <Youtube />
    <MyHelpers />
  </div>
</template>

<script>
import Hero from '~/components/Home/Hero.vue'
import MyApps from '~/components/Home/MyApps.vue'
import MyShop from '~/components/Home/MyShop.vue'
import Youtube from '~/components/Home/Youtube.vue'
import MyHelpers from '~/components/Home/MyHelpers.vue'

export default {
  name: 'Index',
  components: {
    Hero,
    MyApps,
    MyShop,
    Youtube,
    MyHelpers,
  },
}
</script>

<style>
@font-face {
  font-family: 'BebasNeue';
  src: url('~assets/fonts/BebasNeueRegular.ttf');
  font-weight: 400;
}
@font-face {
  font-family: 'Nickainley';
  src: url('~assets/fonts/Nickainley.ttf');
  font-weight: 400;
}
@font-face {
  font-family: 'RobotoLight';
  src: url('~assets/fonts/RobotoLight.ttf');
  font-weight: 300;
}
@font-face {
  font-family: 'RobotoItalic';
  src: url('~assets/fonts/RobotoItalic.ttf');
  font-weight: 400;
}
@font-face {
  font-family: 'RobotoMedium';
  src: url('~assets/fonts/RobotoMedium.ttf');
  font-weight: 500;
}

.your-custom-exact-active-link > div > div {
  background: #ffcf16;
}

.top-part {
  @apply mx-auto xl:pt-8 lg:pt-20 md:pt-24 pt-16 xl:my-16 lg:w-3/4 md:w-4/5 sm:w-9/12 w-11/12;
}

.header-style {
  @apply font-nick text-center xl:text-5xl md:text-4xl text-3xl;
}

.resp-w {
  @apply mx-auto lg:w-3/4 md:w-4/5 sm:w-9/12 w-11/12;
}

.how-start-texts {
  @apply xl:col-span-2 mt-4 lg:text-sm font-robol text-xs xl:m-0 md:mb-3 sm:mb-0 mb-3;
}

mark {
  display: inline-block;
  line-height: 0.03em;
  background: #ffcf16;
  padding-bottom: 0.3em;
  border-radius: 20px;
}

.pointer {
  @apply cursor-pointer
}
</style>
