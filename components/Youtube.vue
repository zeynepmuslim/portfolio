<template>
  <div class="mx-auto h-auto xl:mt-20 xl:w-3/4 lg:mt-20 lg:w-3/4">
    <span class="font-nick text-center xl:text-5xl lg:text-4xl"
      ><mark>youtube</mark></span
    >
    <div class="grid xl:grid-cols-4 lg:grid-cols-4">
      <Thumnail>
        <template #image>
          <div
            class="
              xl:row-span-2 xl:h-28 xl:w-48
              lg:row-span-2 lg:h-24 lg:w-44
              bg-contain bg-no-repeat bg-tumOneY
              hover:bg-tumOne
            "
          ></div>
        </template>
        <template #title>
          <span>Yeni Nesil YKS'ci olmak // 12. Sınıf Vlog</span>
        </template>
      </Thumnail>
      <Thumnail>
        <template #image>
          <div
            class="
              xl:row-span-2 xl:h-28 xl:w-52
              lg:row-span-2 lg:h-24 lg:w-44
              bg-contain bg-no-repeat bg-tumTwoY
              hover:bg-tumTwo
            "
          ></div>
        </template>
        <template #title>
          <span>Çimenlerde Ders, Yazılım, Kitap, Oyun // Karışık Vlog</span>
        </template>
      </Thumnail>
      <Thumnail>
        <template #image>
          <div
            class="
              xl:row-span-2 xl:h-28 xl:w-52
              lg:row-span-2 lg:h-24 lg:w-44
              bg-contain bg-no-repeat bg-tumTreeY
              hover:bg-tumTree
            "
          ></div>
        </template>
        <template #title>
          <span>Kedim için 12 Saatte Oyun Yaptım</span>
        </template>
      </Thumnail>
      <Thumnail>
        <template #image>
          <div
            class="
              xl:row-span-2 xl:h-28 xl:w-52
              lg:row-span-2 lg:h-24 lg:w-44
              bg-contain bg-no-repeat bg-tumFourY
              hover:bg-tumFour
            "
          ></div>
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
  display: inline-block;
  line-height: 0.03em;
  background: #ffcf16;
  padding-bottom: 0.3em;
  width: 3.5em;
  border-radius: 20px;
}
</style>
