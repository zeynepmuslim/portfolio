<template>
  <div class="lg:m-0 md:mb-8">
    <div
      class="
        mx-auto
        xl:pt-8
        lg:pt-20
        md:pt-24
        pt-16
        xl:my-16
        lg:w-3/4
        md:w-4/5
        sm:w-9/12
        w-11/12
      "
    >
      <span class="font-nick text-center xl:text-5xl md:text-4xl text-3xl"
        ><mark>nasıl başladım</mark></span
      >
      <div class="grid xl:grid-cols-4">
        <div
          class="
            xl:col-span-2
            mt-4
            lg:text-sm
            font-robol
            text-sx
            xl:m-0
            md:mb-3
            sm:mb-0
            mb-3
          "
        >
          <p class="p-2">
            Hayatım boyunca hobiler ile içli dışlıydım hatta bunları gösterdiğim
            bir video serim bile var.
          </p>

          <p class="p-2">
            Aralarından biri olan <span class="text-roboi">“Shrink plastics”</span> adlı bir malzeme ile
            üretebilceklerimin tek sınır hayal gücüm idi. İlk başta sadece kendi
            için üretim yaptım ama çevremdekilerimn bunları çok sevmesi ile
            mağazamı açtım.
          </p>

          <p class="p-2">
            Yapılış aşamları ve reklam tanıtımlarında video düzenleme
            bilgilerim, ürün çekimlerinde ışık ve profesyonel kamera kullanma
            gibi bilgilerim işime oldukça yaradı. <span class="text-roboi">Tek kişilik dev kargo olarak
            yoluma devam ettim.</span> 
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
            xl:row-span-2 xl:grid-cols-2
            grid-cols-2
            ml-4
            mx-auto
            w-full
          "
        >
          <div class="mx-auto xl:my-auto">
            <ThumnailForYoutube>
              <template #image>
                <div
                  class="
                    xl:h-28 xl:w-52
                    sm:row-span-2 sm:h-32 sm:w-52
                    row-span-2
                    h-24
                    w-52
                    bg-contain bg-no-repeat bg-tumSixY
                    hover:bg-tumSix
                  "
                ></div>
              </template>
              <template #title>
                <span>Hama Boncuk - Perler Beads // Hobi arayışı - 1</span>
              </template>
            </ThumnailForYoutube>
          </div>

          <div class="mx-auto xl:my-auto">
            <ThumnailForYoutube>
              <template #image>
                <div
                  class="
                    xl:h-28 xl:w-52
                    sm:row-span-2 sm:h-32 sm:w-52
                    row-span-2
                    h-24
                    w-52
                    bg-contain bg-no-repeat bg-tumSevenY
                    hover:bg-tumSeven
                  "
                ></div>
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
  display: inline-block;
  line-height: 0.03em;
  background: #ffcf16;
  padding-bottom: 0.3em;
  width: 5.7em;
  border-radius: 20px;
}
</style>
