<template>
  <div>
      I am Youtube component
      <Thumnail />
      <Thumnail />
      <Thumnail />
  </div>
</template>

<script>
import Thumnail from '~/components/Thumnail.vue'

export default {
  name: 'Youtube',
  components: {
    Thumnail,
  },
}
</script>
