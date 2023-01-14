<script setup>
import Pokemon from '@/services/apiPokemon.js';
import { ref, onBeforeMount, reactive } from 'vue';
import CardPokemon from '@/components/CardPokemon.vue';
import { usePokemonsStore} from "@/stores/store.js";


const pokemonsStore = usePokemonsStore();

const service = new Pokemon([]);

let pokemons = ref();

onBeforeMount(async()=>{
    pokemons.value = await service.fetchAll();
    getPokemons();
})

const getPokemons = async (data) => {
    await pokemonsStore.fetchPokemons();
}
let filterName = ref("");
let newArr = reactive([])

const getName = () =>{
    let pokeName = filterName.value.toLowerCase()
    filterName.value = ""
    newArr.pop()
  
    pokemonsStore.pokemones.find(el => el.name === pokeName) 
        ?   newArr.push(pokemonsStore.pokemones.find(el => el.name === pokeName)) 
        :   alert("El nombre introducido no existe");
}




</script>

<template>
    <main>
    <header class="header">
        <img class="header__img" src="@/assets/images/pokeapi-logo.png" alt="logo-pokemon">
    </header>

    <form class="filter" @submit.prevent="getName">
        <div class="filter__search">
            <label for="search" class="search__title">Búsqueda por nombre </label>
            <div class="filter__container-search">
                <input type="text" id="search" class="search__input" v-model="filterName">
                <button class="search__button" >
                    <i class="fa-solid fa-magnifying-glass icon-search"></i>
                </button>
            </div>
        </div>

        <div class="filter__type">
             <label for="type" class="type__title">Búsqueda por tipo</label>
             <select name="type" id="type" class="type__select">
                <option value=""  class="type__option" selected>Seleccione el tipo a filtrar</option>
                 <option value=""  class="type__option">Electrico</option>
                 <option value="" class="type__option">Planta</option>
                 <option value="" class="type__option">Agua</option>
                 <option value="" class="type__option">Fuego</option>
             </select>
        </div>
    </form>
    <div class="container-cards">
        <div class="container-cards__wrap"> 
            <CardPokemon  v-show="newArr.length < 1" v-for="pokemon in pokemons" :key="pokemon.url" :url="pokemon.url" :name="pokemon.name" /> 
            <CardPokemon v-show="newArr.length > 0" v-for="pokemon in newArr" :key="pokemon.url" :url="pokemon.url" :name="pokemon.name" /> 
             <!-- <CardPokemon   />  -->
            
        </div> 
    </div>
    <footer class="footer">
        <p class="footer__copy">POKE APaI</p>
    </footer>
</main>
</template>

<style scoped lang="scss">
@use '@/scss/colors' as c;
@use '@/scss/mixins' as m;
@use '@/scss/container-cards' ;
@use '@/scss/filter';

    main{
      @include m.flex(flex, column, nowrap, auto ,center);
      background: map-get(c.$colors , "dark-blue") url("/src/assets/images/background.png");

    }
    .header{
        @include m.flex(flex, auto, nowrap, center , auto );
        background: map-get(c.$colors , "white") url("/src/assets/images/background.png");
        padding-bottom: 1em;
        width: 60%;
        &__img{
            width: 30%;
        }
    }

    .footer{
          @include m.flex(flex, auto, nowrap, center ,center);
          background:  map-get(c.$colors , "dark-blue" );
          padding: 2em;
          width: 100% ;

          &__copy{
            color:  map-get( c.$colors, "white" );
          }
    }
    
</style>