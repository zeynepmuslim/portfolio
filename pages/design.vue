<template>
  <div>
    <HowStartDesign />
    <MyShopExample />
    <RMBMeaning />
  </div>
</template>

<script>
import HowStartDesign from '~/components/Design/HowStartDesign.vue'
import MyShopExample from '~/components/Design/MyShopExample.vue'
import RMBMeaning from '~/components/Design/RMBMeaning.vue'
export default {
  name: 'Design',
  components: {
    HowStartDesign,
    MyShopExample,
    RMBMeaning,
  },
}
</script>

<style></style>
