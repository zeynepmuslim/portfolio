<template>
  <div class="h-screen flex flex-col relative">
    <Navbar />
    <Nuxt class="flex-grow" />
    <Footer />
  </div>
</template>

<script>
import Navbar from '~/components/Navbar.vue'
import Footer from '~/components/Footer.vue'
export default {
  name: 'DefaultLayout',
  components: {
    Navbar,
    Footer,
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

.zeynep-exact-active-link > div > div {
  background: #ffcf16;
}

.top-part {
  @apply mx-auto pt-8 lg:pt-0 xl:my-16 lg:w-3/4 md:w-4/5 sm:w-9/12 w-11/12;
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
  @apply cursor-pointer;
}

.yellow-shadow {
  filter: drop-shadow(-0.3rem 0.3rem 0px rgba(255, 207, 22, 1));
  margin-bottom: 0.3rem;
}

.yellow-shadow:hover {
  position: relative;
  right: 0.3rem;
  top: 0.3rem;
  filter: drop-shadow(0px 0px 0px rgba(0, 0, 0, 0));
}
.yellow-shadow-icon {
  filter: drop-shadow(-0.23rem 0.23rem 0px rgba(255, 207, 22, 1));
  margin-bottom: 0.4rem;
}

.yellow-shadow-icon:hover {
  position: relative;
  right: 0.23rem;
  top: 0.23rem;
  filter: drop-shadow(0px 0px 0px rgba(0, 0, 0, 0));
}
</style>
