<template>
  <div>
    <HowStartYoutube />
    <PlayLists />
  </div>
</template>

<script>
import HowStartYoutube from "~/components/HowStartYoutube.vue"
import PlayLists from "~/components/PlayLists.vue"
export default {
  name: 'Youtube',
  components: {
    HowStartYoutube,
    PlayLists
  },
}
</script>
