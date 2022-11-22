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
      edit: false,
      chosenBook: '',

      //INPUTS FOR BOOK EDIT
      title: "",
      author: "",
      price: "",
      description: "",
      genre: "",
      reader: new FileReader(),
      imgURL: null,
    };
  },

  computed: {
    ...mapStores(useAuthenticationStore, useFirestoreStore),
    uid() {
      return this.authenticationStore.getUser().uid;
    },

    admin() {
      return this.authenticationStore.getIsAdmin();
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
              priceFilteredBooks = books.filter((book) => 5 < book.price < 10);
              break;
            case "10-15":
              priceFilteredBooks = books.filter((book) => 10 < book.price < 15);
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

    showEdit(e, book) {
      e.preventDefault();
      this.edit = true;
      this.chosenBook = book;
    },

    closeEdit() {
      this.edit = false;
    },

    async editBook() {
      //Book object to be added
      const book = {
        id: this.chosenBook.id,
        title: this.title,
        author: this.author,
        price: this.price,
        description: this.description,
        genre: this.genre,
        image: this.imgURL,
      };

      //Add product to firestore database
      await this.firestoreStore.editBook(this.chosenBook.id, book);

      //Close pop up when done
      this.edit = false;
    },

    async deleteBook() {
      await this.firestoreStore.deleteBook(this.chosenBook.id);
      //Close pop up when done
      this.edit = false;
    },

    readImage(e) {
      this.reader.readAsDataURL(e.target.files[0]);

      this.reader.addEventListener("load", () => {
        this.imgURL = this.reader.result;
      });
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
      <button class="shop__edit" v-if="admin" @click="showEdit($event, book)">
        EDIT
      </button>
    </RouterLink>
  </div>

  <div class="edit" v-if="edit" id="edit-popup">
    <h2 class="edit__title">Edit product</h2>
    <button class="edit__close" @click="closeEdit">X</button>
    <div class="form">
      <label for="title" class="form__label">TITLE</label>
      <input
        type="text"
        name="name"
        placeholder="Book title"
        class="form__input"
        id="title"
        v-model="title"
      />

      <label for="author" class="form__label">AUTHOR</label>
      <input
        type="text"
        name="name"
        placeholder="Book author"
        class="form__input"
        id="author"
        v-model="author"
      />

      <label for="price" class="form__label">PRICE</label>
      <input
        type="number"
        name="price"
        placeholder="Book price"
        class="form__input"
        id="price"
        v-model="price"
      />

      <label for="description" class="form__label">DESCRIPTION</label>
      <textarea
        name="description"
        class="form__input form__input--description"
        id="description"
        placeholder="Write the book summary here..."
        v-model="description"
        @change="descriptionBreaks"
      ></textarea>

      <label for="category" class="form__label">GENRE</label>
      <select name="category" id="category" class="form__input" v-model="genre">
        <option hidden disabled selected value>Select an option...</option>
        <option value="CLASSICS">Classics</option>
        <option value="HORROR">Horror</option>
        <option value="THRILLER">Thriller</option>
        <option value="ROMANCE">Romance</option>
        <option value="SCI-FI">Sci-Fi</option>
        <option value="FANTASY">Fantasy</option>
      </select>

      <label for="images" class="form__label">IMAGES</label>
      <input
        type="file"
        name="images"
        id="images"
        class="form__upload"
        multiple
        @change="readImage"
      />

      <button
        type="submit"
        class="form__submit"
        @click="(e) => editBook()"
      >
        CHANGE BOOK
      </button>
      <button class="form__submit form__submit--delete" @click="deleteBook">DELETE BOOK</button>
    </div>
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
    min-height: 120px;
    margin-top: 10px;
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

  &__edit {
    margin-top: 10px;
    width: 100%;
    background-color: $mainColor;
    color: $background;
    border: none;
    height: 20px;
    border-radius: 10px;

    &:hover {
      cursor: pointer;
      background-color: $fontColor;
      color: $background;
    }
  }
}

.edit { 
    background-color: $background;
    position: fixed;
    top: 55%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 9;
    font-family: "Outfit", sans-serif;
    color: $fontColor;
    width: 60%;
    display: flex;
    flex-direction: column;
    padding: 10px;
    border-radius: 10px;

    &__title {
      align-items: center;
      text-align: center;
      margin-top: 10px;
    }

    &__close {
    font-family: "Outfit", sans-serif;
      position: absolute;
      top: 20px;
      right: 20px;
      width: 20px;
      height: 20px;
      color: $mainColor;
      font-weight: 700;
      font-size: 1.3em;
      border: none;
      background-color: transparent;

      &:hover {
        cursor: pointer;
      }
    }
}

#edit-popup {
  -webkit-box-shadow:  0px 0px 0px 9999px rgba(0, 0, 0, 0.7);
  box-shadow:  0px 0px 0px 9999px rgba(0, 0, 0, 0.7);
}

.form {
  font-family: "Outfit", sans-serif;
  margin: 10px auto;
  width: 90%;

  &__label {
    font-weight: 500;
    font-size: 1em;
  }

  &__input {
    font-family: "Outfit", sans-serif;
    display: block;
    font-size: 1em;
    border: solid 2px $fontColor;
    padding: 5px;
    width: 90%;
    height: 25px;
    margin-top: 5px;
    margin-bottom: 5px;

    &--description {
      height: 70px;
    }
  }

  &__rating {
    margin-bottom: 10px;
  }

  &__upload {
    display: block;
    margin: 8px 0;

    &::-webkit-file-upload-button {
      visibility: hidden;
    }

    &::before {
      content: "Upload book cover";
      color: $fontColor;
      display: inline-block;
      background-color: white;
      border: 2px solid $fontColor;
      border-radius: 3px;
      padding: 5px 8px;
      outline: none;
      cursor: pointer;
      font-weight: 700;
    }

    &:hover::before {
      background: $mainColor;
      color: $background;
    }
  }

  &__submit {
    font-family: "Outfit", sans-serif;
    color: $fontColor;
    background-color: transparent;
    border: 2px solid $fontColor;
    padding: 10px 40px;
    width: 35%;
    margin-top: 20px;
    font-weight: 500;

    &:hover {
      cursor: pointer;
      border: 2px solid $fontColor;
      background-color: $mainColor;
      font-weight: normal;
      color: $background;
    }

    &--delete {
      margin-left: 30px;
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
