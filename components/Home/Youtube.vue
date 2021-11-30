<template>
  <div class="mx-auto h-auto resp-w md:mt-20 sm:mt-16 mt-16">
    <span class="header-style"><mark>youtube</mark></span>
    <div class="grid md:grid-cols-4 grid-cols-2">
      <Thumbnail>
        <template #image>
          <img class="thumnail yellow-shadow pointer " src="/thumbnails/one.png"/>
        </template>
        <template #title>
          <span>Yenİ Nesil YKS'ci olmak // 12. Sınıf Vlog</span>
        </template>
      </Thumbnail>
      <Thumbnail>
        <template #image>
          <img class="thumnail yellow-shadow pointer " src="/thumbnails/two.png"/>
        </template>
        <template #title>
          <span>Çimenlerde Ders, Yazılım, Kitap, Oyun // Karışık Vlog</span>
        </template>
      </Thumbnail>
      <Thumbnail>
        <template #image>
          <img class="thumnail yellow-shadow pointer " src="/thumbnails/tree.png"/>
        </template>
        <template #title>
          <span>Kedim için 12 Saatte Oyun Yaptım // Newbie Yazılımcı</span>
        </template>
      </Thumbnail>
      <Thumbnail>
        <template #image>
          <img class="thumnail yellow-shadow pointer " src="/thumbnails/four.png"/>
        </template>
        <template #title>
          <span>500 km // Bi' Değişik Ders Çalışma Günlüğü - 1</span>
        </template>
      </Thumbnail>
    </div>
  </div>
</template>

<script>
import Thumbnail from '~/components/Thumbnail.vue'

export default {
  name: 'Youtube',
  components: {
    Thumbnail,
  },
}
</script>
<style scoped>
mark {
  width: 3.5em;
}
.thumnail {
  @apply xl:w-52 lg:w-44 md:w-32 row-span-2 w-52;
}
</style>
