<script>
import { mapStores } from "pinia";
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
      firebaseCart: [],
    };
  },

  methods: {
    async loadCart(id) {
      this.firebaseCart = await this.firestoreStore.getCart(id);
      console.log(this.firebaseCart);
    },
  },

  computed: {
    ...mapStores(useAuthenticationStore, useFirestoreStore),
    async uid() {
      return this.authenticationStore.getUser().uid;
    },
  },

  watch: {
    async uid() {
      let userId = await this.uid;
      console.log(userId);
      this.loadCart(userId);
    },
  },
};
</script>

<template>
  <h2 class="title">My cart</h2>
  <div class="cart" v-for="book in firebaseCart" :key="book.id">
    <img :src="book.image" alt="" class="cart__img" />
    <div class="cart__info">
      <h4 class="cart__title">{{ book.title }}</h4>
      <p class="cart__text">{{ book.author }}</p>
      <p class="cart__text">{{ dollar.format(book.price) }}</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
$background: #fdfaf3;
$fontColor: #391b00;
$mainColor: #6739cb;
.title {
  margin: 120px 0 0 45px;
  font-family: "Outfit", sans-serif;
  color: $fontColor;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-family: "Outfit", sans-serif;
  font-weight: 600;
  font-size: 1.6em;
}

.cart {
  margin: 30px 45px;
  background: $background;
  box-shadow: 0px 4px 5px 5px rgba(98, 98, 98, 0.228);
  display: flex;
  width: 90%;
  height: 250px;
  padding: 20px;
  font-family: "Outfit", sans-serif;

  &__img {
    width: 20%;
    object-fit: contain;
    margin-left: 20px;
  }

  &__info {
    margin: 90px 0 0 20px;
  }

  &__title {
    font-weight: 500;
    font-size: 1.6em;
    color: $fontColor;
    margin-top: 7px;
  }

  &__text {
    font-weight: 300;
    font-size: 1.2em;
    color: $fontColor;
  }
}
</style>