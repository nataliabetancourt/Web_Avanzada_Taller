<template>
  <h2 class="title">Add product</h2>
  <form class="form">
    <label for="name" class="form__label">BOOK TITLE</label>
    <input
      type="text"
      name="name"
      placeholder="Book title"
      class="form__input"
      id="title"
    />

    <label for="name" class="form__label">BOOK AUTHOR</label>
    <input
      type="text"
      name="name"
      placeholder="Book author"
      class="form__input"
      id="author"
    />

    <label for="price" class="form__label">PRICE</label>
    <input
      type="number"
      name="price"
      placeholder="Book price"
      class="form__input"
      id="price"
    />

    <label for="description" class="form__label">DESCRIPTION</label>
    <textarea
      name="description"
      class="form__input form__input--description"
      id="description"
      placeholder="Write the book summary here..."
    ></textarea>

    <label for="category" class="form__label">GENRE</label>
    <select name="category" id="category" class="form__input">
      <option hidden disabled selected value>Select an option...</option>
      <option value="face">Classics</option>
      <option value="cheek">Horror</option>
      <option value="eyes">Thriller</option>
      <option value="lips">Romance</option>
      <option value="lips">Sci-Fi</option>
      <option value="lips">Fantasy</option>
    </select>

    <div class="form__row">
      <label for="images" class="form__label">IMAGES</label>
      <input
        type="file"
        name="images"
        id="images"
        class="form__upload"
        multiple
      />

      <input type="submit" value="ADD PRODUCT" class="form__submit" />
    </div>
  </form>
  <img class="illustration" src="../assets/illustration.png" alt="" />
</template>

<script>
export default {};
</script>

<style lang="scss">
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
    border: solid 2px $mainColor;
    padding: 5px;
    width: 50%;
    height: 25px;
    margin-top: 5px;
    margin-bottom: 18px;

    &--description {
      height: 70px;
    }
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
      border: 2px solid $mainColor;
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
    border: 2px solid $mainColor;
    padding: 10px 40px;
    width: 35%;
    margin-top: 20px;
    font-weight: 500;

    &:hover {
      border: 2px solid $fontColor;
      background-color: $fontColor;
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
</style>