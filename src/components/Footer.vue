<template>
  <footer class="footer">
    <p>2013-2022 © Islestarr Holdings Ltd. All rights reserved.</p>
    <ul>
        <li><a href="">Terms & Conditions</a></li>
        <li><a href="">Privacy Policy</a></li>
        <li><img class="footer__social" src="https://cdn-icons-png.flaticon.com/512/87/87390.png" alt=""></li>
        <li><img class="footer__social" src="https://cdn-icons-png.flaticon.com/512/20/20673.png" alt=""></li>
    </ul>
  </footer>
</template>

<script>
export default {

}
</script>

<style lang="scss">
$fontColor: #391B00;

ul {
    list-style: none;
    display: flex;
    margin-left: 5px;
}

li {
    margin-left: 30px;
}

a {
    color: $fontColor;
}

.footer {
    display: flex;
    width: 100%;
    font-family: 'Outfit', sans-serif;
    font-size: 1em;
    font-weight: 300;
    margin: 30px 45px;
    color: $fontColor;

    &__social {
        height: 30px;
    }
}
</style>