<template>
  <div class="lg:m-0 md:mb-2">
    <div class="mx-auto xl:pt-8 lg:pt-20 md:pt-24 pt-16 xl:mt-16 mb-8 resp-w">
      <span class="header-style"><mark>iletişim bilgileri</mark></span>
    </div>
    <div
      class="
        bg-lightGray
        shadow-xl
        rounded-3xl
        md:w-3/5
        sm:w-3/4
        w-11/12
        mx-auto
        font-robol
        p-12
      "
    >
      <p>
        <span class="text-style">MaIl</span>
        zeynepmusliofficial@gmail.com
      </p>
      <p>
        <span class="text-style">Mağaza Maıl</span>
        rmb.tasarim@gmail.com
      </p>
      <p>
        <span class="text-style">Instagram</span>
        /zeynep.muslim.mix
      </p>
      <p>
        <span class="text-style">YouTube</span>
        /zeynepmüslim
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CommunicationInfo',
}
</script>

<style scoped>
mark {
  width: 5.7em;
}

.text-style {
  @apply font-bebas text-xl pr-3;
}
</style>
