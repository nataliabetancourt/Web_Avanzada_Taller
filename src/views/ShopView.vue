<script>
import { mapStores } from "pinia";
import { useBooksStore } from "../stores/books";
import Stars from "../components/Stars.vue";
import Footer from "../components/Footer.vue";

export default {
  data() {
    return {
      dollar: Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }),
      firstFilter: null,
      secondFilter: null,
      filters: {
        Genre: [
          { name: "Classics", value: "CLASSICS" },
          { name: "Horror", value: "HORROR" },
          { name: "Thriller", value: "THRILLER" },
          { name: "Romance", value: "ROMANCE" },
          { name: "Sci-Fi", value: "SCI-FI" },
          { name: "Fantasy", value: "FANTASY" },
        ],
        Rating: [
          { name: "Over 1 star", value: 1 },
          { name: "Over 2 stars", value: 2 },
          { name: "Over 3 stars", value: 3 },
          { name: "Over 4 stars", value: 4 },
        ],
        Price: [
          { name: "Between $5 and $10", value: "5-10" },
          { name: "Between $10 and $15", value: "10-15" },
          { name: "Over $15", value: "15" },
        ],
      },
      drawBooks: []
    };
  },

  computed: {
    ...mapStores(useBooksStore),

    allBooks() {
      return this.booksStore.getBooks;
    },
  },

  methods: {
    filterBooks() {
      this.drawBooks = this.booksStore.filterBooks(this.secondFilter);
      const filter = this.secondFilter;
      console.log(this.booksStore.filterBooks(filter));
    },
  },

  mounted() {
    this.booksStore.loadBooks();
    this.drawBooks = this.allBooks;

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

  components: {
    Stars,
    Footer,
  },
};
</script>

<template>
  <div class="top">
    <div class="top__one">
      <h2 class="top__title">ENJOY OUR WIDE VARIETY</h2>
    </div>
    <div class="top__two">
      <h3 class="top__filter">FILTER BY:</h3>
      <select v-model="firstFilter" class="top__select">
        <option v-for="(item, index) in filters">{{ index }}</option>
      </select>
      <select
        v-model="secondFilter"
        v-if="firstFilter"
        class="top__select"
        @change="filterBooks"
      >
        <option v-for="filter in filters[firstFilter]" :value="filter.value">
          {{ filter.name }}
        </option>
      </select>
    </div>
  </div>
  <div class="shop">
    <RouterLink
      v-for="book in drawBooks"
      :key="book.id"
      :to="`/details/${book.id}`"
      class="shop__book"
    >
      <img :src="book.image" alt="Book preview" class="shop__img" />
      <div class="shop__info">
        <h4 class="shop__title">{{ book.title }}</h4>
        <p class="shop__author">{{ book.author }}</p>
        <p>{{ dollar.format(book.price) }}</p>
        <Stars :rating="book.rating" />
      </div>
    </RouterLink>
  </div>
  <Footer />
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
  font-family: "Outfit", sans-serif;
  color: $fontColor;
  display: flex;
  align-items: center;
  justify-content: space-between;

  &__title {
    font-family: "Outfit", sans-serif;
    font-weight: 600;
    font-size: 1.6em;
  }

  &__two {
    display: flex;
    margin-right: 45px;
    font-family: "Outfit", sans-serif;
  }

  &__filter {
    font-weight: 500;
    margin-right: 15px;
  }

  &__select {
    font-family: "Outfit", sans-serif;
    padding: 5px;
    margin-right: 5px;
    border: 2px solid $fontColor;
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
    margin: 0 20px 60px 10px;
    align-content: center;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  &__info {
    align-items: flex-start;
    height: 90px;
    color: $fontColor;
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

@media all and (max-width: 420px) {
  .top {
    flex-direction: column;

    &__two {
      width: 100%;
      flex-direction: column;
      margin-top: 20px;
      text-align: center;
    }

    &__select {
      margin: 10px 0;
    }
  }

  .shop {
    flex-direction: column;
    margin: 20px auto;
    text-align: center;

    &__book {
      width: 100%;
      height: 520px;
      margin: 15px auto;
    }

    &__img {
      height: 400px;
      object-fit: contain;
    }

    &__info {
      font-size: 1.2em;
      height: 120px;
    }
  }
}
</style>
