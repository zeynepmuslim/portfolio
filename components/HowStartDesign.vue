<template>
  <div class="lg:m-0 md:mb-8">
    <div class="top-part">
      <span class="header-style"><mark>nasıl başladım</mark></span>
      <div class="grid xl:grid-cols-4">
        <div class="how-start-texts">
          <p class="p-2">
            Hayatım boyunca hobiler ile içli dışlıydım hatta bunları gösterdiğim
            bir video serim bile var.
          </p>

          <p class="p-2">
            Aralarından biri olan
            <span class="text-roboi">“Shrink plastics”</span> adlı bir malzeme
            ile üretebilceklerimin tek sınır hayal gücüm idi. İlk başta sadece
            kendi için üretim yaptım ama çevremdekilerimn bunları çok sevmesi
            ile mağazamı açtım.
          </p>

          <p class="p-2">
            Yapılış aşamları ve reklam tanıtımlarında video düzenleme
            bilgilerim, ürün çekimlerinde ışık ve profesyonel kamera kullanma
            gibi bilgilerim işime oldukça yaradı.
            <span class="text-roboi"
              >Tek kişilik dev kargo olarak yoluma devam ettim.</span
            >
          </p>

          <p class="p-2">
            İşler büyüdüğünde grafik çiziminde bana verdiği kuvvetle evime
            sticker üretimi için gerekli makineleri aldım. Şu an tüm üretimlerim
            evden devam ediyor.
          </p>
        </div>
        <div
          class="
            xl:col-span-2
            grid
            xl:row-span-2
            grid-cols-2
            ml-4
            mx-auto
            w-full
          "
        >
          <div class="mx-auto xl:my-auto">
            <ThumnailForYoutube>
              <template #image>
                <div class="thumanil-img bg-tumSixY hover:bg-tumSix"></div>
              </template>
              <template #title>
                <span>Hama Boncuk - Perler Beads // Hobi arayışı - 1</span>
              </template>
            </ThumnailForYoutube>
          </div>

          <div class="mx-auto xl:my-auto">
            <ThumnailForYoutube>
              <template #image>
                <div class="thumanil-img bg-tumSevenY hover:bg-tumSeven"></div>
              </template>
              <template #title>
                <span>Bullet Journal - Planlayıcı // Hobi Arayışı - 2</span>
              </template>
            </ThumnailForYoutube>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ThumnailForYoutube from '~/components/ThumnailForYoutube.vue'
export default {
  name: 'HowStartDesign',
  components: {
    ThumnailForYoutube,
  },
}
</script>

<style scoped>
mark {
  width: 5.7em;
}
.thumanil-img {
  @apply xl:h-28 sm:row-span-2 sm:h-32 row-span-2 h-24 w-52 bg-contain bg-no-repeat;
}
</style>
