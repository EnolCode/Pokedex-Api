<script setup>
import Pokemon from '@/services/apiPokemon.js';
import { ref, onBeforeMount, reactive, computed } from 'vue';
import CardPokemon from '@/components/CardPokemon.vue';
import CardDetails from '@/components/CardDetails.vue';
import { usePokemonsStore} from "@/stores/store.js";
import { returnHome, filterForName,  } from "@/js/functions.js"


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
let filterType = ref("");
let arrName = reactive([])
let arrType = reactive([])

const fetchUrl = async(url,el,pokeType) => {
    const resp = await fetch(url);
    const data = await resp.json();
    if(data.types[0].type.name === pokeType){
           arrType.push(el)
            // console.log(data.forms.url)
        }
}

const filterForType = () =>{
    if(arrType.length>1) return arrType = []
    let pokeType = filterType.value.toLowerCase()
    filterType.value = "";
    pokemons.value.forEach(el=>{
        fetchUrl(el.url,el,pokeType)
    })

}
// console.log(arrName)

// filterForType()

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
             <select name="type" id="type" class="type__select" v-model="filterType">
                <option value=""  class="type__option" selected>Seleccione el tipo a filtrar</option>
                 <option value="grass"  class="type__option">Planta</option>
                 <option value="fire" class="type__option">Fuego</option>
                 <option value="water" class="type__option">Agua</option>
                 <option value="normal" class="type__option">Normal</option>
                 <option value="bug" class="type__option">Bicho</option>
             </select>
             <button class="search__button" @click="filterForType" >
                    <i class="fa-solid fa-magnifying-glass icon-search"></i>
                </button>
        </div>
    </form>
    <div class="container-cards">
        <div class="container-cards__wrap"> 
            <CardPokemon  v-show="arrName.length < 1 && arrType.length < 1" v-for="pokemon in pokemons" :key="pokemon.url" :url="pokemon.url" :name="pokemon.name" /> 
            <CardDetails v-show="arrName.length > 0" v-for="pokemon in arrName" :key="pokemon.url" :url="pokemon.url" :name="pokemon.name" /> 
            <CardPokemon v-show="arrType.length > 0" v-for="pokemon in arrType" :key="pokemon.url" :url="pokemon.url" :name="pokemon.name" /> 
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
            cursor:pointer;
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