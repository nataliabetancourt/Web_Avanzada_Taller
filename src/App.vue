<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header class="header">
    <div class="header__column">
      <img src="./assets/full_logo.png" alt="" class="header__logo">
      <nav class="header__pages">
        <RouterLink to="/" class="header__pages__item">HOME</RouterLink>
        <RouterLink to="/shop" class="header__pages__item">SHOP</RouterLink>
        <RouterLink to="/" class="header__pages__item">MEMBERSHIP</RouterLink>
        <RouterLink to="/" class="header__pages__item">WISHLIST</RouterLink>
        <RouterLink to="/add" class="header__pages__item">ADD PRODUCT</RouterLink>
      </nav>
    </div>
    <div class="header__account">
      <RouterLink to="/">MY ACCOUNT</RouterLink>
    </div>
  </header>
  <RouterView />
</template>

<style scoped lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Outfit:wght@100;200;300;400;500;600;700&display=swap');

$background: #FDFAF3;
$fontColor: #391B00;

a {
  text-decoration: none;
  color: $fontColor;
}
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 68px;
  width: 100%;
  background-color: $background;
  font-family: 'Outfit', sans-serif;
  font-size: 1.125em;
  font-weight: 500;
  box-shadow: 0 5px 6px rgba(216, 212, 203, 0.341);
  position: fixed;
  z-index: 10;
  top: 0;

  &__column {
    display: flex;
    align-items: center;
  }

  &__pages {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 80%;
    margin: 10px;

    &__item {
      margin: 10px;
    }
  }

  &__logo {
    object-fit: contain;
    margin: 0 0 5px 15px;
  }

  &__account {
    margin: 15px;
  }
}
</style>
