<template>
  <div class="mx-auto h-auto resp-w md:mt-20 sm:mt-16 mt-16">
    <span class="header-style"><mark>youtube</mark></span>
    <div class="grid md:grid-cols-4 grid-cols-2">
      <Thumnail>
        <template #image>
          <div class="thumnail bg-tumOneY hover:bg-tumOne"></div>
        </template>
        <template #title>
          <span>Yenİ Nesil YKS'ci olmak // 12. Sınıf Vlog</span>
        </template>
      </Thumnail>
      <Thumnail>
        <template #image>
          <div class="thumnail bg-tumTwoY hover:bg-tumTwo"></div>
        </template>
        <template #title>
          <span>Çimenlerde Ders, Yazılım, Kitap, Oyun // Karışık Vlog</span>
        </template>
      </Thumnail>
      <Thumnail>
        <template #image>
          <div class="thumnail bg-tumTreeY hover:bg-tumTree"></div>
        </template>
        <template #title>
          <span>Kedim için 12 Saatte Oyun Yaptım // Newbie Yazılımcı</span>
        </template>
      </Thumnail>
      <Thumnail>
        <template #image>
          <div class="thumnail bg-tumFourY hover:bg-tumFour"></div>
        </template>
        <template #title>
          <span>500 km // Bi' Değişik Ders Çalışma Günlüğü - 1</span>
        </template>
      </Thumnail>
    </div>
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
<style scoped>
mark {
  width: 3.5em;
}
.thumnail {
  @apply xl:h-28 xl:w-52 lg:w-44 md:w-32 sm:w-52 row-span-2 h-24 w-52 bg-contain bg-no-repeat;
}
</style>
