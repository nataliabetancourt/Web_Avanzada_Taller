<script>
export default {
    name: "PageNotFound"
};
</script>

<template>
    <div class="container">
        <h1 class="title">404 Page Not Found</h1>
        <img class="container__image" src="../assets/404_img.png" alt="404 image">
    </div>
</template>

<style lang="scss" scoped>
$background: #fdfaf3;
$fontColor: #391b00;
$mainColor: #6739cb;

.container {
    margin-top: 120px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    &__image {
        width: 30%;

    }
}

.title {
  font-family: "Outfit", sans-serif;
  font-weight: 600;
  font-size: 1.6em;
  color: $fontColor;
}
</style>