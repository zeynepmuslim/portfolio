<template>
  <div>
    <HowStartPragramming />
    <MyAppsStories />
    <MyTechnologys />
    <ThisSiteProcess />
  </div>
</template>

<script>
import HowStartPragramming from '~/components/HowStartProgramming.vue'
import MyAppsStories from '~/components/MyAppsStories.vue'
import MyTechnologys from '~/components/MyTechnologys.vue'
import ThisSiteProcess from '~/components/ThisSiteProcess.vue'
export default {
name: 'Programming',
  components: {
    HowStartPragramming,
    MyAppsStories,
    MyTechnologys,
    ThisSiteProcess,
}
}
</script>

<style>

</style>