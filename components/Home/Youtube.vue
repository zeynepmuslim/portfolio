<template>
  <div class="mx-auto h-auto resp-w md:mt-20 sm:mt-16 mt-16">
    <span class="header-style"><mark>youtube</mark></span>
    <div class="grid md:grid-cols-4 grid-cols-2">
      <Thumbnail>
        <template #image>
          <a target="_blank" href="https://youtu.be/7fzOVtpPQAs"
            ><img
              class="thumnail yellow-shadow pointer"
              src="/thumbnails/one.png"
          /></a>
        </template>
        <template #title>
          <a target="_blank" href="https://youtu.be/7fzOVtpPQAs"
            ><div>Yenİ Nesil YKS'ci olmak // 12. Sınıf Vlog</div></a
          >
        </template>
      </Thumbnail>
      <Thumbnail>
        <template #image>
          <a target="_blank" href="https://youtu.be/9u55X_pShQY"
            ><img
              class="thumnail yellow-shadow pointer"
              src="/thumbnails/two.png"
          /></a>
        </template>
        <template #title>
          <a target="_blank" href="https://youtu.be/9u55X_pShQY"
            ><div>Çimenlerde Ders, Yazılım, Kitap, Oyun // Karışık Vlog</div></a
          >
        </template>
      </Thumbnail>
      <Thumbnail>
        <template #image>
          <a target="_blank" href="https://youtu.be/BXSjI45fGPI"
            ><img
              class="thumnail yellow-shadow pointer"
              src="/thumbnails/tree.png"
          /></a>
        </template>
        <template #title>
          <a target="_blank" href="https://youtu.be/BXSjI45fGPI"
            ><div>Kedim için 12 Saatte Oyun Yaptım // Newbie Yazılımcı</div></a
          >
        </template>
      </Thumbnail>
      <Thumbnail>
        <template #image>
          <a target="_blank" href="https://youtu.be/ULqccPp-P7M"
            ><img
              class="thumnail yellow-shadow pointer"
              src="/thumbnails/four.png"
          /></a>
        </template>
        <template #title>
          <a target="_blank" href="https://youtu.be/ULqccPp-P7M"
            ><div>500 km // Bi' Değişik Ders Çalışma Günlüğü - 1</div></a
          >
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
