<script setup>
</script>

<template>
    <div class="card">
        <picture class="card__container-img">
            <img src="" alt="">
        </picture>
        <div class="card__container-propertiers">
            <h2 class="card__container-propertiers__id">001</h2>
            <h1 class="card__container-propertiers__name">Pikachu</h1>
            <p class="card__container-propertiers__type">Electrico</p>
            <div class="card__container-propertiers__button">
            <i class="fa-solid fa-plus"></i>
        </div>
    </div>
    </div>
</template>
<style lang="scss" scoped>
@use '../scss/colors' as c;
  .card{
    // width: 10em;
    height: 15em;
    background: red;
     &__container-img{
        height: 10em;
        background: blue;
    }
    &__container-propertiers{
       display: flex;
       flex-direction: column;
       margin:0.1em 0.5em;
       &__id{
        font-size: 0.8em;
        }
      &__name{
        font-size: 1.2em;
        font-weight: bold;
        color:map-get( c.$colors, "very-dark-blue" );
        margin-top: 0.5em;
      }
      &__type{
        text-align: center;
        width:5em;
        font-size: 0.7em;
        margin-top: 0.3em;
        background: orange;
      }
      &__button{
        display: flex;
        align-self: flex-end;
        background-color: aqua;
        position: relative;
        bottom: 15px;
        padding: 0.1em;
      }
           
    }
 }
        




        

</style>