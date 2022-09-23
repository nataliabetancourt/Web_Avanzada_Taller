<script>
import { mapStores } from "pinia";
import { useBooksStore } from "../stores/books";
import Stars from "../components/Stars.vue";

export default {
  data() {
    return {
      currentBook: {},
      dollar: Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }),
    };
  },

  computed: {
    ...mapStores(useBooksStore),
  },

  mounted() {
    this.booksStore.loadBooks();
    this.currentBook = this.booksStore.getBookById(this.$route.params.bookId);
  },

  components: {
    Stars,
  },
};
</script>

<template>
  <div class="book">
    <div class="info">
      <h3 class="info__genre">{{ this.currentBook.genre }}</h3>
      <div class="info__column">
        <h1 class="info__title">{{ this.currentBook.title }}</h1>
        <h2 class="info__price">{{ dollar.format(this.currentBook.price) }}</h2>
      </div>
      <Stars :rating="this.currentBook.rating" />
      <p class="info__description">{{ this.currentBook.description }}</p>
    </div>
    <div class="img">
      <img :src=this.currentBook.image alt="" class="img__img">
    </div>
  </div>
</template>

<style lang="scss" scoped>
$background: #fdfaf3;
$fontColor: #391b00;
$mainColor: #6739cb;

.book {
  display: flex;
  align-items: center;
}

.info {
  margin: 180px 0 0 45px;
  font-family: "Outfit", sans-serif;
  color: $fontColor;
  width: 50%;

  &__column {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__title {
    margin-bottom: 10px;
  }

  &__genre {
    font-weight: 300;
    font-size: 1.2em;
  }

  &__description {
    margin-top: 20px;
    font-size: 1em;
    font-weight: 300;
    white-space: pre-wrap;
  }

  &__price {
    font-weight: 500;
    font-size: 1.7em;
  }
}

.img {
  margin: 150px auto 0;

  &__img {
    height: 500px;
    object-fit: contain;
    box-shadow: 0px 4px 5px 5px  rgba(98, 98, 98, 0.228);
  }
}
</style>