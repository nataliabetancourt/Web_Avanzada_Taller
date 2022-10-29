<script>
import { mapStores } from "pinia";
import Stars from "../components/Stars.vue";
import Footer from "../components/Footer.vue";
import { useFirestoreStore } from "../stores/firestore";
import { useAuthenticationStore } from "../stores/authentication";

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
      drawBooks: [],
      firebaseBooks: [],
      genreValues: [
        "CLASSICS",
        "HORROR",
        "SCI-FI",
        "ROMANCE",
        "FANTASY",
        "THRILLER",
      ],
      ratingValues: [1, 2, 3, 4],
      priceValues: ["5-10", "10-15", "15"],
    };
  },

  computed: {
    ...mapStores(useAuthenticationStore, useFirestoreStore),
    uid() {
      return this.authenticationStore.getUser().uid;
    },
  },

  methods: {
    async filterBooks() {
      //Array from firestore
      let books = await this.firestoreStore.getBooks();

      for (let i = 0; i < books.length; i++) {
        //Run through genre list values
        for (let j = 0; j < this.genreValues.length; j++) {
          //Check if variable is equal to genre values
          if (this.secondFilter == this.genreValues[j]) {
            const genreFilteredBooks = books.filter(
              (book) => book.genre == this.secondFilter
            );
            this.drawBooks = genreFilteredBooks;
          }
        }
      }

      //Run through rating list values
      for (let j = 0; j < this.ratingValues.length; j++) {
        //Check if variable is equal to rating values
        if (this.secondFilter == this.ratingValues[j]) {
          const ratingFilteredBooks = books.filter(
            (book) => book.rating > this.secondFilter
          );
          this.drawBooks = ratingFilteredBooks;
        }
      }

      //Run through price list values
      for (let j = 0; j < this.priceValues.length; j++) {

        //Check if variable is equal to price values
        if (this.secondFilter == this.priceValues[j]) {
          let priceFilteredBooks = [];
          switch (this.secondFilter) {
            case "5-10":
              priceFilteredBooks = books.filter(
                (book) => (5 < book.price < 10)
              );
              break;
            case "10-15":
              priceFilteredBooks = books.filter(
                (book) => (10 < book.price < 15)
              );
              break;
            case "15":
              priceFilteredBooks = books.filter((book) => 15 < book.price);
              break;
          }

          this.drawBooks = priceFilteredBooks;
        }
      }
    },

    async defineCart(user, bookToAdd) {
      let cart = [];
      let firebaseCart = await this.firestoreStore.getCart(user.uid);

      //Check if cart already exists
      if (firebaseCart == null || firebaseCart == undefined) {
        //Make list with books
        cart.push(bookToAdd);
      } else if (firebaseCart.length > 0) {
        cart = [...firebaseCart, bookToAdd];
      }

      return cart;
    },

    async addToCart(e, book) {
      e.preventDefault();

      //Make sure user in signed in
      if (this.authenticationStore.getUser() !== null) {
        //User info
        let uid = this.authenticationStore.getUser().uid;

        //Book that is going to cart
        let bookToAdd = {
          id: book.id,
          title: book.title,
          author: book.author,
          image: book.image,
          price: book.price,
        };

        let cartToUpload = await this.defineCart(
          this.authenticationStore.getUser(),
          bookToAdd
        );
        this.firestoreStore.createCart(uid, cartToUpload);
        console.log(cartToUpload);
      } else {
        alert("Please sign in before adding to cart");
      }
    },
  },

  async mounted() {
    this.drawBooks = await this.firestoreStore.getBooks();
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
      <button class="shop__add" @click="addToCart($event, book)">
        ADD TO CART
      </button>
    </RouterLink>
  </div>
  <Footer />
</template>

<style lang="scss" scoped>
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
    min-height: 350px;
    margin: 10px 30px 50px;
    align-content: center;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  &__info {
    align-items: flex-start;
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

  &__add {
    width: 100%;
    height: 40px;
    font-family: "Outfit", sans-serif;
    font-size: 1em;
    margin-top: 20px;
    border: #391b00 solid 2px;
    background-color: transparent;
    text-decoration: none;
    justify-content: flex-end;

    &:hover {
      cursor: pointer;
      background-color: $mainColor;
      font-weight: 600;
      color: $background;
    }
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
      min-height: 610px;
    }

    &__img {
      height: 400px;
      object-fit: contain;
    }

    &__info {
      font-size: 1.2em;
      height: 120px;
    }

    &__add {
      margin-bottom: 20px;
    }
  }
}
</style>
