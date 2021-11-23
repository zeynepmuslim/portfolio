<template>
  <div>
    <div class="mx-auto xl:pt-8 lg:pt-24 xl:my-16 lg:w-3/4 md:w-4/5 sm:w-9/12 w-11/12">
      <span
        class="
          font-nick
          text-center
          xl:text-5xl
          md:text-4xl
          sm:text-3xl
          text-2xl
        "
        ><mark>youtube</mark></span
      >
      <div class="grid grid-cols-4">
        <div class="col-span-2 mt-4 lg:text-sm font-robol text-sx">
          <p class="p-2">
            İlk videom <span class="font-roboi">“Kedi Eğitimi”</span> adlı bir videoydu. O videoyu ilk videom
            olmasına rağmen telefonum, ödünç aldığım bir tripodum, internetten
            aldığım bir yaka mikrofonum ve evdeki imkanlarım ile yaptığım 2 tane
            tam softbox denemeyin ışıklarım ile çekmiştim.
          </p>

          <p class="p-2">
            Editini ise Premiere Pro ile yapmıştım ve o zaman bir acemi için
            oldukça karmaşık görünüyordu ama tabii ki YouTube’daki dersler
            burada da imdadıma yetişti.
          </p>

          <p class="p-2">
            İlk videom hala yayında ve 120.000’i aşkın görüntülenmesi var ama
            benim için yerinin ayrı olmasının sebebi bu değil. İlk videomu ve
            son zamanlarda çektiğim bir videoyu açtığımda ilk göze çarpan şey
            <span class="font-roboi">gelişimim!</span> Gerek teknik gerek kişisel ve bunu somut bir şekilde
            görmek mükemmel hissettiriyor.
          </p>
        </div>
        <div class="col-span-2 grid row-span-2 grid-cols-2 ml-4">
          <div>
            <div
              class="
                text-center
                font-robol
                xl:w-48 xl:pt-1 xl:ml-4 xl:text-xl
              "
            >
              2018
            </div>
            <Thumnail>
              <template #image>
                <div
                  class="
                    xl:h-28 xl:w-52
                    lg:row-span-2 lg:h-24 lg:w-44
                    md:row-span-2 md:h-24 md:w-32
                    sm:row-span-2 sm:h-24 sm:w-52
                    row-span-2
                    h-24
                    w-52
                    bg-contain bg-no-repeat bg-tumFiveY
                    hover:bg-tumFive
                  "
                ></div>
              </template>
              <template #title>
                <span>Kedİ Sahİplenmeden Önce Alınması Gerekenler</span>
              </template>
            </Thumnail>
          </div>

          <div>
            <div
              class="
                text-center
                font-robol
                text-center
                xl:w-48 xl:pt-1 xl:ml-4 xl:text-xl
              "
            >
              2021
            </div>
            <Thumnail>
              <template #image>
                <div
                  class="
                    xl:h-28 xl:w-52
                    lg:row-span-2 lg:h-24 lg:w-44
                    md:row-span-2 md:h-24 md:w-32
                    sm:row-span-2 sm:h-24 sm:w-52
                    row-span-2
                    h-24
                    w-52
                    bg-contain bg-no-repeat bg-tumOneY
                    hover:bg-tumOne
                  "
                ></div>
              </template>
              <template #title>
                <span>Yenİ Nesİl YKS'cİ olmak // 12. Sınıf Vlog</span>
              </template>
            </Thumnail>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Thumnail from '~/components/Thumnail.vue'
export default {
  name: 'HowStartYoutube',
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
