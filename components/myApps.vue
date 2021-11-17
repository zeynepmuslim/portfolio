<template>
  <div class="w-3/4 mx-auto h-96 mt-20">
  <span class="font-nick text-5xl text-center"><mark>uygulamalarım</mark></span>
  <div class="grid grid-cols-3 mt-8">
  <App />
  <App />
  <App />
  </div>
  </div>
</template>

<script>
import App from '~/components/App.vue'
export default {
  name: 'MyApps',
  components: {
    App
  },
}
</script>

<style scoped>
mark {
  display: inline-block;
  line-height: 0.03em;
  background: #ffcf16;
  padding-bottom: 0.3em;
  width: 5.8em;
  border-radius: 20px;
}
</style>
