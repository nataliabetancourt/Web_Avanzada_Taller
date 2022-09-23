<script>
import { mapStores } from "pinia";
import { useBooksStore } from "../stores/books";

export default {
  data() {
    return {
      dollar: Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }),
      starImg: null,
    };
  },

  methods: {
    starRating(star) {
      if (star == 0.5) {
        this.starImg = "/src/assets/stars/0.5.png";
      } else if (star == 1) {
        this.starImg = "/src/assets/stars/1.png";
      } else if (star == 1.5) {
        this.starImg = "/src/assets/stars/1.5.png";
      } else if (star == 2) {
        this.starImg = "/src/assets/stars/2.png";
      } else if (star == 2.5) {
        this.starImg = "/src/assets/stars/2.5.png";
      } else if (star == 3) {
        this.starImg = "/src/assets/stars/3.png";
      } else if (star == 3.5) {
        this.starImg = "/src/assets/stars/3.5.png";
      } else if (star == 4) {
        this.starImg = "/src/assets/stars/4.png";
      } else if (star == 4.5) {
        this.starImg = "/src/assets/stars/4.5.png";
      } else if (star == 5) {
        this.starImg = "/src/assets/stars/5.png";
      }
      return this.starImg;
    },
  },

  computed: {
    ...mapStores(useBooksStore),
    allBooks() {
      return this.booksStore.getBooks;
    },
  },

  mounted() {
    this.booksStore.loadBooks();

    //To avoid duplicates everytime the page opens
    if (localStorage.getItem("reloaded")) {
      // The page was just reloaded. Clear the value from local storage
      // so that it will reload the next time this page is visited.
      localStorage.removeItem("reloaded");
    } else {
      // Set a flag so that we know not to reload the page twice.
      localStorage.setItem("reloaded", "1");
      location.reload();
    }
  },
};
</script>

<template>
  <div class="top">
    <h2 class="top__title">ENJOY OUR WIDE VARIETY</h2>
  </div>
  <div class="shop">
    <RouterLink
      v-for="book in allBooks"
      :key="book.id"
      :to="`/details/${book.id}`"
      class="shop__book"
    >
      <img :src="book.image" alt="Book preview" class="shop__img" />
      <div class="shop__info">
        <h4 class="shop__title">{{ book.title }}</h4>
        <p class="shop__author">{{ book.author }}</p>
        <p>{{ dollar.format(book.price) }}</p>
        <img :src="starRating(book.rating)" alt="" />
      </div>
    </RouterLink>
  </div>
</template>

<style lang="scss">
$background: #fdfaf3;
$fontColor: #391b00;
$mainColor: #6739cb;

a {
  text-decoration: none;
}

.top {
  margin: 120px 0 0 45px;

  &__title {
    font-family: "Outfit", sans-serif;
    font-weight: 600;
    font-size: 1.6em;
    color: $fontColor;
  }
}

.shop {
  display: flex;
  flex-wrap: wrap;
  margin: 30px 45px;
  font-family: "Outfit", sans-serif;

  &__book {
    width: 12%;
    height: 350px;
    margin: 0 20px 40px 10px;
    align-content: center;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  &__info {
    align-items: flex-start;
    height: 90px;
  }

  &__title {
    font-weight: 500;
    font-size: 1.2em;
    color: $fontColor;
    margin-top: 7px;
  }

  &__author {
    font-weight: 300;
  }

  &__img {
    width: 100%;
    height: 250px;
  }
}

@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
