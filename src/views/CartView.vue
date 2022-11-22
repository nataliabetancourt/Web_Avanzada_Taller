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
    },

    bookTotal() {
      let total = 0;
      this.firebaseCart.forEach((book) => {
        total += book.price;
      });

      return total;
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
      this.loadCart(userId);
    },
  },

  components: {
    Footer,
  },
};
</script>

<template>
  <h2 class="title">My cart</h2>
  <div class="buy">
    <div class="buy__column">
      <div class="cart" v-for="book in firebaseCart" :key="book.id">
        <img :src="book.image" alt="" class="cart__img" />
        <div class="cart__info">
          <h4 class="cart__title">{{ book.title }}</h4>
          <p class="cart__text">{{ book.author }}</p>
          <p class="cart__text">{{ dollar.format(book.price) }}</p>
        </div>
      </div>
    </div>
    <div class="buy__column--total">
      <h2>Total:</h2>
      <p class="totalValue">{{ dollar.format(this.bookTotal()) }}</p>
    </div>
  </div>
  <Footer />
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

.buy {
  display: flex;
  width: 100%;

  &__column {
    flex-direction: column;
    width: 100%;

    &--total {
      margin: 30px 150px;
      height: 200px;
      width: 30%;
      padding: 20px;
      background: $background;
      box-shadow: 0px 4px 5px 5px rgba(98, 98, 98, 0.228);
      font-family: "Outfit", sans-serif;
      color: $fontColor;
    }
  }
}

.totalValue {
  font-size: 1.2em;
}

.cart {
  margin: 30px 45px;
  background: $background;
  box-shadow: 0px 4px 5px 5px rgba(98, 98, 98, 0.228);
  display: flex;
  width: 100%;
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

@media all and (max-width: 420px) {
  .buy {
    display: block;

    &__column {
    flex-direction: column;
    width: 100%;

    &--total {
      height: 60px;
      background: transparent;
      box-shadow: none;
      font-size: 1.4em;
    }
  }
}

.cart {
  margin: 20px 25px; 
  width: 80%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 350px;

  &__img {
    width: 50%;
    object-fit: contain;
    margin-left: 20px;
  }


  &__info {
    margin: 10px 0 0 20px;
  }
}
}
</style>