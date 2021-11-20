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
import Hero from '~/components/Hero.vue'
 import MyApps from '~/components/myApps.vue' 
 import MyShop from '~/components/MyShop.vue'
 import Youtube from '~/components/Youtube.vue'
 import MyHelpers from '~/components/MyHelpers.vue'

export default {
  name: 'Index',
  components: {
    Hero,
     MyApps,
     MyShop,
       Youtube,
       MyHelpers
  },
}
</script>

<style>
@font-face {
  font-family: 'BebasNeue';
  src: url("~/fonts/BebasNeueRegular.ttf");
  font-weight: 400;
}
@font-face {
  font-family: 'Nickainley';
  src: url("~/fonts/Nickainley.ttf");
  font-weight: 400;
}
@font-face {
  font-family: 'RobotoLight';
  src: url("~/fonts/RobotoLight.ttf");
  font-weight: 300;
}
@font-face {
  font-family: 'RobotoItalic';
  src: url("~/fonts/RobotoItalic.ttf");
  font-weight: 400;
}
@font-face {
  font-family: 'RobotoMedium';
  src: url("~/fonts/RobotoMedium.ttf");
  font-weight: 500;
}

</style>
