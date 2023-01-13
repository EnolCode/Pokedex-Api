<script setup>
import { onBeforeMount, ref } from 'vue';

const props = defineProps({
   name:{
      type: String
   },
   url:{
      type: String
   }
})

let pokeDetails = ref ({});
let pokemonImg = ref()
let pokemonId = ref()
let pokemonType = ref()

onBeforeMount(async()=>{

  const resp = await fetch(props.url)
  const data = await resp.json() 
  pokeDetails.value = data
  pokemonImg.value = pokeDetails.value.sprites.other.home.front_default;
  pokemonId.value = pokeDetails.value.id;
  pokemonType.value = pokeDetails.value.types[0].type.name;
})

const addIdZeros =  (id) =>{
  if(id < 10) return   `00${id}`
  if(id < 100) return   `0${id}`
  if(id < 1000) return   `${id}`
}

</script>

<template>
    <div class="card">
        <picture class="card__container-img">
            <img :src=pokemonImg alt="">
        </picture>
        <div class="card__container-propertiers">
            <h2 class="card__container-propertiers__id">N.º {{ addIdZeros(pokemonId) }}</h2>
            <h1 class="card__container-propertiers__name">{{ props.name }}</h1>
            <p class="card__container-propertiers__type">{{ pokemonType }}</p>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../scss/colors' as c;
  .card{
    height: 15em;

     &__container-img{
        height: 10em;
        // width: 100%;
        background:map-get( c.$colors, "light-grayish" );
        border-radius: 5px;
        display: flex;
        justify-content:center;
        align-content: center;
        
        
        img{
          margin: 0 auto;
          max-width: 80%;
          max-height: 80%;
        }
    }
    &__container-propertiers{
       display: flex;
       flex-direction: column;
       margin:0.1em 0.5em;
       &__id{
        font-size: 0.8em;
        color:map-get( c.$colors, "grey" );
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
           
    }
 }
        
</style>