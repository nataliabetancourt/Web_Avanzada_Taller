<script>
    import 'vue3-carousel/dist/carousel.css';
    import { Carousel, Slide} from 'vue3-carousel';
    
    export default {
      data() {
        return {
          slides: [
            {
              book: 'https://kbimages1-a.akamaihd.net/d4d08a78-871e-4693-8d5c-fbd2fa3dd0c2/1200/1200/False/it-ends-with-us-versione-italiana.jpg',
              bg: 'https://bestcityscape.com/wp-content/uploads/2019/03/cherry-blossom-background-93880.jpg'
            },
            {
              book: 'https://images-na.ssl-images-amazon.com/images/I/61tqfa+xbWL.jpg',
              bg: 'https://media.istockphoto.com/photos/littoral-zone-underwater-picture-id174426615?k=20&m=174426615&s=170667a&w=0&h=qEm-lqwLJIZz_nekZoPcI_jJY3bP2lXwYB6geUF0POU='
            },
            {
              book: 'https://images-na.ssl-images-amazon.com/images/I/81msb6gUBTL.jpg',
              bg: 'http://wallup.net/wp-content/uploads/2016/01/163729-abstract-pattern-blue-texture.jpg'
            },
            {
              book: 'https://images-na.ssl-images-amazon.com/images/I/81S4cou11jL.jpg',
              bg: 'https://i0.wp.com/modogeeks.com/wp-content/uploads/2020/12/shadow-and-bone.jpg?fit=1366%2C768&ssl=1'
            },
            {
              book: 'https://images-na.ssl-images-amazon.com/images/I/810y68slmXL.jpg',
              bg: 'https://images.alphacoders.com/662/thumb-1920-662999.jpg'
            }
          ],
        }
      },
      components: {
        Carousel,
        Slide,
      }
    }
</script>

<template>
    <section class="main">
    <div class="main__column">
      <h4 class="main__title main__title--subtitle">EXPLORE OUR</h4>
      <h1 class="main__title">NEWEST<br>
        BESTSELLERS</h1>
      <button class="main__button">SHOP NOW</button>
    </div>
    <img src="../assets/shelf.png" alt="" class="shelf">
    <div class="main__column--second">
      <Carousel :autoplay="3000" :items-to-show="1" :wrap-around="true">
        <slide v-for="slide in slides" :key="slide">
          <img :src="slide.book" class="main__bookcover">
        </slide>
      </Carousel>
    </div>
  </section>
</template>

<style scoped lang="scss">
    $background: #FDFAF3;
    $fontColor: #391B00;
    $mainColor: #6739CB;
    .main {
      font-family: 'Outfit', sans-serif;
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
        font-family: 'Outfit', sans-serif;
        font-size: 1em;
        margin-top: 20px;
        border: #391B00 solid 2px;
        background-color: transparent;
    
        &:hover {
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
      width: 80%;
    }
</style>