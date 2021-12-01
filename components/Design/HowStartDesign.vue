<template>
  <div class="top-part">
    <div class="lg:m-0 md:mb-8">
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
          class="xl:col-span-2 grid xl:row-span-2 grid-cols-2 mx-auto w-full"
        >
          <div class="mx-auto xl:my-auto px-2">
            <ThumbnailForYoutube>
              <template #image>
                <a target="_blank" href="https://youtu.be/RCvq8qDjUzk"
                  ><img
                    class="thumanil-img yellow-shadow pointer"
                    src="/thumbnails/six.png"
                /></a>
              </template>
              <template #title>
                <a target="_blank" href="https://youtu.be/RCvq8qDjUzk"
                  ><div>Hama Boncuk - Perler Beads // Hobi arayışı - 1</div></a
                >
              </template>
            </ThumbnailForYoutube>
          </div>

          <div class="mx-auto xl:my-auto px-2">
            <ThumbnailForYoutube>
              <template #image>
                <a target="_blank" href="https://youtu.be/DhjXeyP7QBM"
                  ><img
                    class="thumanil-img yellow-shadow pointer"
                    src="/thumbnails/seven.png"
                /></a>
              </template>
              <template #title>
                <a target="_blank" href="https://youtu.be/DhjXeyP7QBM"
                  ><div>Bullet Journal - Planlayıcı // Hobi Arayışı - 2</div></a
                >
              </template>
            </ThumbnailForYoutube>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ThumbnailForYoutube from '~/components/ThumbnailForYoutube.vue'
export default {
  name: 'HowStartDesign',
  components: {
    ThumbnailForYoutube,
  },
}
</script>

<style scoped>
mark {
  width: 5.7em;
}
.thumanil-img {
  @apply row-span-2 w-40 sm:w-52 bg-contain bg-no-repeat;
}
</style>
