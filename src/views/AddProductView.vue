<script>
import Footer from "../components/Footer.vue";
import StarRating from "vue-star-rating";
import { mapStores } from "pinia";
import { useFirestoreStore } from "../stores/firestore";

export default {
  data() {
    return {
      title: "",
      author: "",
      price: "",
      description: "",
      genre: "",
      rating: 0,
      reader: new FileReader(),
      imgURL: null,
    };
  },

  computed: {
    ...mapStores(useFirestoreStore),
  },

  methods: {
    async createNewBook() {
      //Organize id for book detail page
      const idLowerCase = this.title.toLowerCase();
      const id = idLowerCase.replace(/\s+/g, "-");

      //Create book object
      const newBook = {
        id: id,
        title: this.title,
        author: this.author,
        price: this.price,
        description: this.description,
        genre: this.genre,
        rating: this.rating,
        ratingList: [this.rating],
        image: this.imgURL,
      };

      //Add product to firestore database
      await this.firestoreStore.addBook(newBook.id, newBook);

      //Add to local storage
      //this.booksStore.newBook(newBook);

      //Empty inputs when new product added to local storage
      this.title = "";
      this.author = "";
      this.price = "";
      this.description = "";
    },

    readImage(e) {
      this.reader.readAsDataURL(e.target.files[0]);

      this.reader.addEventListener("load", () => {
        this.imgURL = this.reader.result;
      });
    },
  },

  components: {
    Footer,
    StarRating,
  },
};
</script>
  
<template>
  <h2 class="title">Add product</h2>
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

    <div class="form__rating">
      <h4 class="form__label">RATING</h4>
      <star-rating
        :increment="0.5"
        v-model:rating="rating"
        :rounded-corners="true"
        :border-width="2"
      ></star-rating>
    </div>

    <label for="images" class="form__label">IMAGES</label>
    <input
      type="file"
      name="images"
      id="images"
      class="form__upload"
      multiple
      @change="readImage"
    />

    <button type="submit" class="form__submit" @click="(e) => createNewBook()">
      ADD PRODUCT
    </button>
  </div>

  <img class="illustration" src="../assets/illustration.png" alt="" />
  <Footer />
</template>

<style lang="scss" scoped>
$background: #fdfaf3;
$fontColor: #391b00;
$mainColor: #6739cb;

.title {
  margin: 100px 0 0 45px;
  font-family: "Outfit", sans-serif;
  font-weight: 600;
  font-size: 1.6em;
}

.form {
  margin: 30px 45px;
  font-family: "Outfit", sans-serif;

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
    width: 50%;
    height: 25px;
    margin-top: 5px;
    margin-bottom: 18px;

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
  }
}

.illustration {
  position: absolute;
  right: 0;
  width: 40%;
  top: 120px;
}

@media all and (max-width: 420px) {
  .illustration {
    display: none;
  }

  .title {
    margin: 100px auto 0;
    text-align: center;
  }

  .form {
    width: 100%;
    justify-content: center;
    margin: 30px 0px 0 30px;

    &__input {
      display: flex;
      flex-direction: column;
      width: 80%;
      margin-left: 0;
    }

    &__submit {
      width: 80%;
    }
  }
}
</style>