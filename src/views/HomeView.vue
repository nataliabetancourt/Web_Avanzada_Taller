<script>
import HomeCarousel from '../components/HomeCarousel.vue'
import HomeBookFav from '../components/HomeBookFav.vue'
import Footer from '../components/Footer.vue'

export default {
  components: {
    HomeCarousel,
    HomeBookFav,
    Footer
  },
}
</script>

<template>
  <main>
    <HomeCarousel/>
    <HomeBookFav/>
    <section>
      <img class="banner" src="https://dispatch.barnesandnoble.com/content/dam/ccr/homepage/daily/2022/09/10/24396_BB_C_Pre-Orders_09-10.jpg">
    </section>
    <Footer/>
  </main>
</template>

<style scoped lang="scss">
$background: #FDFAF3;
$fontColor: #391B00;
$mainColor: #6739CB;

.banner {
  width: 100%;
  margin-top: 60px;
}
</style>
