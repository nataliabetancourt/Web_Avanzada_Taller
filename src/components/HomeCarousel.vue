<script>
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide } from "vue3-carousel";

export default {
  data() {
    return {
      slides: [
        "https://images-na.ssl-images-amazon.com/images/I/71j0FLAauxL.jpg",
        "https://images-na.ssl-images-amazon.com/images/I/61tqfa+xbWL.jpg",
        "https://images-na.ssl-images-amazon.com/images/I/81msb6gUBTL.jpg",
        "https://images-na.ssl-images-amazon.com/images/I/81S4cou11jL.jpg",
        "https://images-na.ssl-images-amazon.com/images/I/810y68slmXL.jpg",
      ],
    };
  },
  components: {
    Carousel,
    Slide,
  },
};
</script>

<template>
  <section class="main">
    <div class="main__column">
      <h4 class="main__title main__title--subtitle">EXPLORE OUR</h4>
      <h1 class="main__title">
        NEWEST<br />
        BESTSELLERS
      </h1>
      <button class="main__button">SHOP NOW</button>
    </div>
    <img src="../assets/shelf.png" alt="" class="shelf" />
    <div class="main__column--second">
      <Carousel :autoplay="3000" :items-to-show="1" :wrap-around="true">
        <slide v-for="slide in slides" :key="slide">
          <img :src="slide" class="main__bookcover" />
        </slide>
      </Carousel>
    </div>
  </section>
</template>

<style scoped lang="scss">
$background: #fdfaf3;
$fontColor: #391b00;
$mainColor: #6739cb;
.main {
  font-family: "Outfit", sans-serif;
  color: $fontColor;
  margin: 150px 0 0 45px;
  display: flex;

  &__column {
    z-index: 4;
    margin-top: 50px;

    &--second {
      margin-left: 80px;
      width: 50%;
    }
  }

  &__title {
    font-size: 4.3em;

    &--subtitle {
      font-size: 1.5em;
      font-weight: 400;
    }
  }

  &__button {
    width: 50%;
    height: 40px;
    font-family: "Outfit", sans-serif;
    font-size: 1em;
    margin-top: 20px;
    border: #391b00 solid 2px;
    background-color: transparent;

    &:hover {
      cursor: pointer;
      background-color: $mainColor;
      font-weight: 600;
      color: $background;
    }
  }

  &__bookcover {
    height: 420px;
    object-fit: contain;
    z-index: 10;
  }
}
.shelf {
  position: absolute;
  width: 100%;
  top: 550px;
  left: 0;
  z-index: 0;
}

.carousel {
  width: 100%;
}

@media all and (max-width: 420px) {
  .main {
    display: flex;
    flex-direction: column;
    margin: 100px auto;
    justify-content: center;
    text-align: center;

    &__column {
      display: flex;
      flex-direction: column;
      margin: auto;

      &--second {
        width: 100%;
        margin: auto;
        margin-left: -20px;
        display: flex;
        justify-content: center;
      }
    }

    &__title {
      font-size: 3em;

      &--subtitle {
        font-size: 1.5em;
        font-weight: 400;
      }
    }

    &__button {
      margin: 20px auto;
    }

    &__bookcover {
      height: 420px;
      object-fit: contain;
      z-index: 10;
      width: 100%;
    }
  }

  .shelf {
    top: 750px;
    height: 70px;
  }
}
</style>