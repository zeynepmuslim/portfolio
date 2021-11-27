<template>
  <div>
    <HowStartPragramming />
    <MyAppsStories />
    <MyTechnologys />
  </div>
</template>

<script>
import HowStartPragramming from '~/components/HowStartProgramming.vue'
import MyAppsStories from '~/components/MyAppsStories.vue'
import MyTechnologys from '~/components/MyTechnologys.vue'
export default {
name: 'Programming',
  components: {
    HowStartPragramming,
    MyAppsStories,
    MyTechnologys
}
}
</script>

<style>

</style>