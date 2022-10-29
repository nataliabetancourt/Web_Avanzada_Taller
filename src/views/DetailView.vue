<script>
import { mapStores } from "pinia";
import Stars from "../components/Stars.vue";
import Footer from "../components/Footer.vue";
import { useFirestoreStore } from "../stores/firestore";
import { useAuthenticationStore } from "../stores/authentication";
import StarRating from "vue-star-rating";

export default {
  data() {
    return {
      currentBook: {},
      rating: null,
      userRating: null,
      dollar: Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }),
    };
  },

  computed: {
    ...mapStores(useAuthenticationStore, useFirestoreStore),
  },

  methods: {
    async rateBook() {
      if (this.authenticationStore.getUser() !== null) {
        //User info
        let uid = this.authenticationStore.getUser().uid;
        let user = await this.firestoreStore.getUser(uid);

        //Check if user has rated this book
        if (!user.rating || !user.rating.includes(this.currentBook.id) && this.rating !== null) {
          //Adds books rated by user to list, to avoid voting more than once
          this.firestoreStore.addUserRatingList(uid, this.userRatingList(user));

          //Add rating to book
          this.firestoreStore.addBookRatingList(this.currentBook.id, this.bookRatingList(this.currentBook));
          
          //Update the books rating
          this.firestoreStore.changeBookRating(this.currentBook);
        } else {
          alert("You've already voted!");
        }

      } else {
        alert("Please sign in before voting");
      }
    },

    userRatingList(user) {
      let userRatingArray;

      if (user.rating === null || user.rating === undefined) {
        userRatingArray = [this.currentBook.id];
      } else if (user.rating.length > 0) {
        userRatingArray = [...user.rating, this.currentBook.id];
      }

      return userRatingArray;
    },

    bookRatingList(book) {
      let bookRatingArray;

      if (book.ratingList == null || book.ratingList == undefined) {
        bookRatingArray = [this.rating];
      } else if (book.ratingList.length > 0) {
        bookRatingArray = [...book.ratingList, this.rating];
      }

      return bookRatingArray;
    },
  },

  async mounted() {
    this.currentBook = await this.firestoreStore.getSingleBook(
      this.$route.params.bookId
    );
  },

  components: {
    Stars,
    Footer,
    StarRating,
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
      <img :src="this.currentBook.image" alt="" class="img__img" />
    </div>
  </div>

  <div class="rating">
    <h4 class="rating__title">Rate the book yourself!</h4>
    <p class="rating__info">
      Your opinion is important to us, please feel free to rate this book to
      your liking. All you have to do is sign in and vote.
    </p>
    <star-rating
      :increment="0.5"
      v-model:rating="rating"
      :rounded-corners="true"
      :border-width="2"
      class="rating__stars"
      @click="rateBook"
    ></star-rating>
  </div>

  <Footer />
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
  margin: 140px 0 0 45px;
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
    margin: 20px 0 40px;
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
  margin: 120px auto 0;

  &__img {
    height: 500px;
    object-fit: contain;
    box-shadow: 0px 4px 5px 5px rgba(98, 98, 98, 0.228);
  }
}

.rating {
  margin: 10px 0 50px 45px;
  background-color: #6739cb;
  padding: 20px;
  width: 50%;
  border-radius: 20px;
  font-family: "Outfit", sans-serif;
  color: white;

  &__title {
    font-size: 1.2em;
    font-weight: 600;
    margin-bottom: 5px;
  }

  &__info {
    font-weight: 300;
    margin-bottom: 15px;

    &--user {
      color: $mainColor;
      margin: 10px;
      font-size: 1em;
      font-weight: 500;
    }
  }

  &__stars {
    margin-bottom: 15px;
  }
}

@media all and (max-width: 420px) {
  .book {
    flex-direction: column;
    text-align: center;
    margin: auto;
  }

  .info {
    width: 100%;
    margin: 120px auto 30px;

    &__column {
      flex-direction: column;
    }

    &__title {
      margin-bottom: 5px;
      font-size: 2em;
    }

    &__genre {
      font-size: 1.4em;
    }

    &__price {
      margin-bottom: 10px;
    }
    &__description {
      margin: 30px 20px 0 20px;
      font-size: 1.3em;
      font-weight: 300;
      white-space: pre-wrap;
    }
  }
  .img {
    margin: 0px auto 0;

    &__img {
      height: 500px;
      object-fit: contain;
      box-shadow: 0px 4px 5px 5px rgba(98, 98, 98, 0.228);
    }
  }

  .rating {
    width: 70%;
    margin-top: 50px;
  }
}
</style>