<script>
export default {
  data() {
    return {
      titles: [
        {
          name: "TOP 100 BOOKS",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nullam non nisi est sit amet facilisis magna etiam tempor. Tincidunt nunc pulvinar sapien et ligula ullamcorper malesuada. Aliquam sem fringilla ut morbi tincidunt augue interdum. Aliquam ultrices sagittis orci a scelerisque purus semper eget duis. ",
          books: [
            "https://static.independent.co.uk/2022/08/08/19/Books-Q%26A-Jennette_McCurdy_52079.jpg?width=1200",
            "https://i0.wp.com/ellaberintodelminotauro.com.co/wp-content/uploads/2022/02/fairy-tale-9781668002179_xlg.jpg?ssl=1",
            "https://m.media-amazon.com/images/I/71PNGYHykrL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/91ajvO3vlnL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/61h3ZkQxjTL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/61tqfa+xbWL.jpg",
          ],
          title: 1,
          isShowing: false,
        },
        {
          name: "FALL'S BIGGEST BOOKS",
          description:
            "Ultrices mi tempus imperdiet nulla malesuada pellentesque. Vel eros donec ac odio tempor orci dapibus ultrices in. Nisl condimentum id venenatis a condimentum vitae sapien. Orci phasellus egestas tellus rutrum tellus pellentesque eu. Sapien nec sagittis aliquam malesuada bibendum arcu vitae elementum. Fermentum odio eu feugiat pretium nibh ipsum consequat nisl. Sodales ut eu sem integer vitae justo eget. Morbi enim nunc faucibus a pellentesque sit amet. ",
          books: [
            "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1647526587l/60415700.jpg",
            "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1660752887l/59830251.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/81m4rgPWCFL.jpg",
            "https://images.penguinrandomhouse.com/cover/9780593446065",
            "https://images-na.ssl-images-amazon.com/images/I/41-5B-pCIkL._SX329_BO1,204,203,200_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/81e29pejAeL.jpg",
          ],
          title: 2,
          isShowing: false,
        },
        {
          name: "YA FAVORITES",
          description:
            "Tristique risus nec feugiat in fermentum posuere urna nec tincidunt. Eget gravida cum sociis natoque penatibus et magnis. Non arcu risus quis varius quam quisque id diam vel. Nulla aliquet enim tortor at auctor urna. Ac turpis egestas integer eget aliquet nibh. Dui faucibus in ornare quam. Parturient montes nascetur ridiculus mus mauris vitae ultricies leo integer.",
          books: [
            "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1633986670l/59227936.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/81xSl05tjtL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/91Iuhbh7aIL.jpg",
            "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1616690030i/56913189.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/81VDhiKgyaL.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/81896Wx2dUL.jpg",
          ],
          title: 3,
          isShowing: false,
        },
      ],
      highlightTitle: 0,
      showInfo: {},
    };
  },

  methods: {
    onListItemClick(title) {
      //Establish which title is showing
      this.showInfo.name = title.name;
      this.showInfo.description = title.description;
      this.showInfo.books = title.books;
      this.showInfo.showButton = true;
      this.highlightTitle = title.title;
    },
  },

  watch: {
    highlightTitle(val) {
      for (let index = 0; index < this.titles.length; index++) {
        //Check if selected title is the same and change color
        if (val == this.titles[index].title) {
          this.titles[index].isShowing = true;
        } else {
          this.titles[index].isShowing = false;
        }
      }
    },
  },
};
</script>

<template>
  <ul>
    <li
      class="favorites"
      :class="{ 'favorites--selected': title.isShowing }"
      v-for="title in titles"
      :key="title.name"
      @click="() => onListItemClick(title)"
      id="favorites"
    >
      {{ title.name }}
    </li>
  </ul>
  <div class="info">
    <p class="info__description">{{ showInfo.description }}</p>
    <div class="info__images">
      <img
        class="info__images--img"
        v-for="book in showInfo.books"
        v-bind:src="book"
      />
    </div>
    <button class="info__btn" v-if="showInfo.showButton">SEE MORE</button>
  </div>
</template>

<style scoped lang="scss">
$background: #fdfaf3;
$fontColor: #391b00;
$mainColor: #6739cb;

li {
  list-style: none;

  &__hover {
    cursor: pointer;
  }
}

ul {
  display: flex;
  margin: 130px 80px 0 80px;
  justify-content: space-between;
  cursor: pointer;
}
.favorites {
  font-family: "Outfit", sans-serif;
  font-weight: 600;
  font-size: 1.4em;
  color: $fontColor;

  &--selected {
    font-weight: 900;
    color: $mainColor;
  }
}

.info {
  margin: 40px 45px 20px 45px;

  &__description {
    color: $fontColor;
    margin: auto;
    font-family: "Outfit", sans-serif;
    font-size: 1em;
    font-weight: 300;
    text-align: center;
    width: 70%;
  }

  &__images {
    display: flex;
    &--img {
      width: 20%;
      height: 240px;
      object-fit: contain;
      margin: 30px 0 30px 0;
    }
  }

  &__btn {
    display: flex;
    justify-content: center;
    text-align: center;
    line-height: 38px;
    margin: auto;
    width: 50%;
    height: 40px;
    font-family: "Outfit", sans-serif;
    font-size: 1em;
    margin-top: 20px 0 80px;
    border: #391b00 solid 2px;
    background-color: transparent;

    &:hover {
      cursor: pointer;
      background-color: $mainColor;
      font-weight: 600;
      color: $background;
    }
  }
}

@media all and (max-width: 420px) {
  ul {
    display: flex;
    flex-direction: column;
    margin: 80px auto 0;
    text-align: center;
  }

  .favorites {
    margin-bottom: 20px;
    margin-left: -10px;
    font-size: 1.8em;
  }

  .info {
    margin-top: 20px;

    &__description {
      width: 100%;
      font-size: 1.2em;
    }

    &__images {
      width: 100%;
      flex-direction: column;

      &--img {
        width: 100%;
        height: 300px;
      }
    }
  }
}
</style>