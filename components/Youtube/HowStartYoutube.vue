<template>
  <div class="top-part">
    <div class="lg:m-0 md:mb-8">
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
          class="xl:col-span-2 grid xl:row-span-2 grid-cols-2 mx-auto w-full"
        >
          <div class="mx-auto">
            <div class="thumnail-date">2018</div>
            <ThumbnailForYoutube>
              <template #image>
                <a target="_blank" href="https://youtu.be/xwsj0U9fIjE"
                  ><img
                    class="thumnail-img yellow-shadow pointer"
                    src="/thumbnails/five.png"
                /></a>
              </template>
              <template #title>
                <a target="_blank" href="https://youtu.be/xwsj0U9fIjE"
                  ><div>Kedİ Sahİplenmeden Önce Alınması Gerekenler</div></a
                >
              </template>
            </ThumbnailForYoutube>
          </div>

          <div class="mx-auto">
            <div class="thumnail-date">2021</div>
            <ThumbnailForYoutube>
              <template #image>
                <a target="_blank" href="https://youtu.be/7fzOVtpPQAs"
                  ><img
                    class="thumnail-img yellow-shadow pointer"
                    src="/thumbnails/one.png"
                /></a>
              </template>
              <template #title>
                <a target="_blank" href="https://youtu.be/7fzOVtpPQAs"
                  ><div>Yenİ Nesİl YKS'cİ olmak // 12. Sınıf Vlog</div></a
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
  name: 'HowStartYoutube',
  components: {
    ThumbnailForYoutube,
  },
}
</script>

<style scoped>
mark {
  width: 5.7em;
}
.thumnail-img {
  @apply sm:w-52 row-span-2 mx-auto w-4/5;
}
.thumnail-date {
  @apply text-center font-robol xl:w-48 xl:pt-1  xl:text-xl sm:text-lg;
}
</style>
