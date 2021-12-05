<template>
  <div>
    <HowStartYoutube />
    <PlayLists />
  </div>
</template>

<script>
import HowStartYoutube from "~/components/Youtube/HowStartYoutube.vue"
import PlayLists from "~/components/Youtube/PlayLists.vue"
export default {
  name: 'Youtube',
  components: {
    HowStartYoutube,
    PlayLists
  },
}
</script>
