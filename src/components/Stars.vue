<script>
export default {
    data() {
        return {
            starImg: null
        }
    },

    methods: {
    starRating(star) {
      if (star == 0.5) {
        this.starImg = "/src/assets/stars/0.5.png";
      } else if (star == 1) {
        this.starImg = "/src/assets/stars/1.png";
      } else if (star == 1.5) {
        this.starImg = "/src/assets/stars/1.5.png";
      } else if (star == 2) {
        this.starImg = "/src/assets/stars/2.png";
      } else if (star == 2.5) {
        this.starImg = "/src/assets/stars/2.5.png";
      } else if (star == 3) {
        this.starImg = "/src/assets/stars/3.png";
      } else if (star == 3.5) {
        this.starImg = "/src/assets/stars/3.5.png";
      } else if (star == 4) {
        this.starImg = "/src/assets/stars/4.png";
      } else if (star == 4.5) {
        this.starImg = "/src/assets/stars/4.5.png";
      } else if (star == 5) {
        this.starImg = "/src/assets/stars/5.png";
      }
      return this.starImg;
    },
  },

  props: {
    rating: {
        type: Number
    },

    details: {
      type: Boolean
    }
  }
};
</script>

<template>
        <img :src=this.starRating(this.rating) alt=""/>
</template>

<style>
</style>