<template>
  <div class="lg:m-0 md:mb-8">
    <div class="top-part">
      <span class="header-style"><mark>nasıl başladım</mark></span>
      <div class="grid xl:grid-cols-4">
        <div class="how-start-texts">
          <p class="p-2">
            İlk videom <span class="font-roboi">“Kedi Eğitimi”</span> adlı bir
            videoydu. O videoyu ilk videom olmasına rağmen telefonum, ödünç
            aldığım bir tripodum, internetten aldığım bir yaka mikrofonum ve
            evdeki imkanlarım ile yaptığım 2 tane tam softbox denemeyin
            ışıklarım ile çekmiştim.
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
            <span class="font-roboi">gelişimim!</span> Gerek teknik gerek
            kişisel ve bunu somut bir şekilde görmek mükemmel hissettiriyor.
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
          <div class="mx-auto">
            <div class="thumnail-date">2018</div>
            <ThumnailForYoutube>
              <template #image>
                <div class="thumnail-img bg-tumFiveY hover:bg-tumFive"></div>
              </template>
              <template #title>
                <span>Kedİ Sahİplenmeden Önce Alınması Gerekenler</span>
              </template>
            </ThumnailForYoutube>
          </div>

          <div class="mx-auto">
            <div class="thumnail-date">2021</div>
            <ThumnailForYoutube>
              <template #image>
                <div class="thumnail-img bg-tumOneY hover:bg-tumOne"></div>
              </template>
              <template #title>
                <span>Yenİ Nesİl YKS'cİ olmak // 12. Sınıf Vlog</span>
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
  name: 'HowStartYoutube',
  components: {
    ThumnailForYoutube,
  },
}
</script>

<style scoped>
mark {
  width: 5.7em;
}
.thumnail-img {
  @apply xl:h-28 xl:w-52 sm:row-span-2 sm:h-32 sm:w-52 row-span-2 h-24 w-52 bg-contain bg-no-repeat
}
.thumnail-date {
  @apply text-center font-robol xl:w-48 xl:pt-1 xl:ml-4 xl:text-xl lg:-mb-0 sm:ml-5 sm:text-lg sm:-mb-5 w-48 -mb-3
}
</style>
