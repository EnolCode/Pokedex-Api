<script setup>
import { ref, onBeforeMount, reactive, computed } from 'vue';
import fetchAll from '@/services/apiPokemon.js';
import CardPokemon from '@/components/CardPokemon.vue';
import CardDetails from '@/components/CardDetails.vue';
import { usePokemonsStore} from "@/stores/store.js";
import { returnHome, filterForName,  } from "@/js/functions.js"

const pokemonsStore = usePokemonsStore();
let pokemons = ref([]);

onBeforeMount(async()=>{
    fetchAll.get("")
        .then( resp=> {
            pokemons.value = resp.data.results;
        })
})

let filterName = ref("");
let filterType = ref("");
let arrName = reactive([])
let arrType = reactive([])


const getPokemons = async (data) => {
    await pokemonsStore.fetchPokemons();
}

const fetchUrl = async(url,el,pokeType) => {
    const resp = await fetch(url);
    const data = await resp.json();
    let arr = []
    if(data.types[0].type.name === pokeType){
        arr.push(el)
    }
    arr
}

const filterForType = () =>{
    let pokeType = filterType.value.toLowerCase()
    filterType.value = "";
    pokemons.value.forEach(el=>{
        fetchUrl(el.url,el,pokeType)
    })
}
</script>

<template>
    <main>
    <header class="header">
        <img class="header__img" src="@/assets/images/pokeapi-logo.png" alt="logo-pokemon" @click="returnHome(newArr)">
    </header>

    <form class="filter" @submit.prevent>
        <div class="filter__search">
            <label for="search" class="search__title">Búsqueda por nombre </label>
            <div class="filter__container-search">
                <input type="text" id="search" class="search__input" v-model="filterName">
                <button class="search__button" @click="filterForName(filterName, arrName, pokemonsStore)" >
                    <i class="fa-solid fa-magnifying-glass icon-search"></i>
                </button>
            </div>
        </div>

        <div class="filter__type">
             <label for="type" class="type__title">Búsqueda por tipo</label>
             <div class="search__container-filter">
             <select name="type" id="type" class="type__select" v-model="filterType">
                <option value=""  class="type__option" selected>Seleccione el tipo a filtrar</option>
                 <option value="grass"  class="type__option">Planta</option>
                 <option value="fire" class="type__option">Fuego</option>
                 <option value="water" class="type__option">Agua</option>
                 <option value="normal" class="type__option">Normal</option>
                 <option value="bug" class="type__option">Bicho</option>
             </select>

             <button class="search__button" @click="filterForType(filterType,arrType, pokemons)" >
                    <i class="fa-solid fa-magnifying-glass icon-search"></i>
                </button>
        </div>
    </div>
    </form>
    <div class="container-cards">
        <div class="container-cards__wrap"> 
            <CardPokemon  v-show="arrName.length < 1 && arrType.length < 1" v-for="pokemon in pokemons" :key="pokemon.url" :url="pokemon.url" :name="pokemon.name" /> 
            <CardDetails v-show="arrName.length > 0" v-for="pokemon in arrName" :key="pokemon.url" :url="pokemon.url" :name="pokemon.name" /> 
            <CardPokemon  v-for="pokemon in arrType" :key="pokemon.url" :url="pokemon.url" :name="pokemon.name" /> 
            
        </div> 
    </div>
    <footer class="footer">
    <div class="footer__container-title">
      <h2 class="footer__title">&copy; Poke Api </h2>
    </div>
    <div class="footer__container-social-media">
        <a href="https://www.linkedin.com/in/enol-igareta/" target="_blank"><i class="fa-brands fa-linkedin icon-media"></i></a> 
        <a href="https://github.com/EnolCode" target="_blank"><i class="fa-brands fa-github icon-media"></i></a> 
        <a href="https://github.com/EnolCode" target="_blank"><i class="fa-brands fa-twitter icon-media"></i></a> 
    </div>
  </footer>
</main>
</template>

<style scoped lang="scss">
@use '@/scss/colors' as c;
@use '@/scss/mixins' as m;
@use '@/scss/container-cards' ;
@use '@/scss/filter';
@use '@/scss/footer';

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
            cursor:pointer;
            @include m.mv(600px){
                width: 80%;
        }
        }
    }
    
</style>