<script>
import HomeCarousel from "../components/HomeCarousel.vue";
import HomeBookFav from "../components/HomeBookFav.vue";
import Footer from "../components/Footer.vue";

export default {
  components: {
    HomeCarousel,
    HomeBookFav,
    Footer,
  },
};
</script>

<template>
  <main>
    <HomeCarousel />
    <HomeBookFav />
    <section>
      <img
        class="banner"
        src="https://dispatch.barnesandnoble.com/content/dam/ccr/homepage/daily/2022/09/10/24396_BB_C_Pre-Orders_09-10.jpg"
      />
    </section>
    <Footer />
  </main>
</template>

<style scoped lang="scss">
$background: #fdfaf3;
$fontColor: #391b00;
$mainColor: #6739cb;

.banner {
  width: 100%;
  margin-top: 60px;
}

@media all and (max-width: 420px) {
  .banner {
    height: 300px;
    object-fit: cover;
    margin-top: 30px;
  }
}
</style>
