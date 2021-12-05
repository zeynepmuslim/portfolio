<template>
  <div>
    <HowStartPragramming />
    <MyAppsStories />
    <MyTechnologys />
    <ThisSiteProcess />
  </div>
</template>

<script>
import HowStartPragramming from '~/components/Programming/HowStartProgramming.vue'
import MyAppsStories from '~/components/Programming/MyAppsStories.vue'
import MyTechnologys from '~/components/Programming/MyTechnologies.vue'
import ThisSiteProcess from '~/components/Programming/ThisSiteProcess.vue'
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