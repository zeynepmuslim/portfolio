<template>
  <div class="lg:m-0 md:mb-2">
    <div class="mx-auto xl:pt-8 lg:pt-20 md:pt-24 pt-16 xl:mt-16 mb-8 resp-w px-4">
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
        md:p-12
        p-5
      "
    >
      <p>
        <span class="text-style">MaIl</span>
        <a target="_blank" href="mailto:zeynepmusliofficial@gmail.com"
          >zeynepmusliofficial@gmail.com</a
        >
      </p>
      <p>
        <span class="text-style">Mağaza Maıl</span>
        <a target="_blank" href="mailto:rmb.tasarim@gmail.com"
          >rmb.tasarim@gmail.com</a
        >
      </p>
      <p>
        <span class="text-style">Instagram</span>
        <a target="_blank" href="https://www.instagram.com/zeynep.muslim.mix/"
          >/zeynep.muslim.mix</a
        >
      </p>
      <p>
        <span class="text-style">YouTube</span>
        <a
          target="_blank"
          href="https://www.youtube.com/channel/UCNp9gN3i1hSs4JvL6b3FZHw"
          >/zeynepmüslim</a
        >
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
  @apply font-bebas sm:text-xl text-base pr-3;
}
</style>
