<template>
  <div class="mx-auto h-auto          lg:w-3/4
                             md:mt-20 md:w-4/5
                             sm:mt-16 sm:w-9/12
                             mt-16 w-11/12">
    <span class="font-nick text-center xl:text-5xl md:text-4xl sm:text-3xl text-2xl" 
      ><mark>youtube</mark></span
    >
    <div class="grid md:grid-cols-4 grid-cols-2 ">
      <Thumnail>
        <template #image>
          <div
            class=" 
                            xl:h-28 xl:w-52
              lg:w-44
              md:h-24 md:w-32
              sm:row-span-2 sm:h-24 sm:w-52
              row-span-2 h-24 w-52
              bg-contain bg-no-repeat bg-tumOneY
              hover:bg-tumOne
            "
          ></div>
        </template>
        <template #title>
          <span>Yenİ Nesil YKS'ci olmak // 12. Sınıf Vlog</span>
        </template>
      </Thumnail>
      <Thumnail>
        <template #image>
          <div
            class="
                            xl:h-28 xl:w-52
              lg:row-span-2 lg:h-24 lg:w-44
              md:row-span-2 md:h-24 md:w-32
              sm:row-span-2 sm:h-24 sm:w-52
               row-span-2 h-24 w-52
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
                            xl:h-28 xl:w-52
              lg:row-span-2 lg:h-24 lg:w-44
              md:row-span-2 md:h-24 md:w-32
              sm:row-span-2 sm:h-24 sm:w-52
               row-span-2 h-24 w-52
              bg-contain bg-no-repeat bg-tumTreeY
              hover:bg-tumTree
            "
          ></div>
        </template>
        <template #title>
          <span>Kedim için 12 Saatte Oyun Yaptım // Newbie Yazılımcı</span>
        </template>
      </Thumnail>
      <Thumnail>
        <template #image>
          <div
            class="
                            xl:h-28 xl:w-52
              lg:row-span-2 lg:h-24 lg:w-44
              md:row-span-2 md:h-24 md:w-32
              sm:row-span-2 sm:h-24 sm:w-52
               row-span-2 h-24 w-52
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
