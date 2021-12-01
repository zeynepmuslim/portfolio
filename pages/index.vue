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
