<script setup>
import Pokemon from '@/services/apiPokemon.js';
import { ref, onBeforeMount } from 'vue';
import CardPokemon from '@/components/CardPokemon.vue';

const service = new Pokemon([]);

let pokemons = ref([]);

onBeforeMount(async()=>{
    pokemons.value = await service.fetchAll()
    console.log(pokemons.value);

})

</script>

<template>
    <main>
    <header class="header">
        <img class="header__img" src="@/assets/images/pokeapi-logo.png" alt="logo-pokemon">
    </header>

    <form class="filter" action="#">

        <div class="filter__search">
            <label for="search" class="search__title">Nombre o número</label>
            <div class="filter__container-search">
                <input type="text" id="search" class="search__input">
                <button class="search__button"><i class="fa-solid fa-magnifying-glass icon-search"></i></button>
            </div>
        </div>

        <div class="filter__type">
             <label for="type" class="type__title">Busqueda por tipo</label>
             <select name="type" id="type" class="type__select">
                <option value=""  class="type__option" selected>Seleccione el tipo a filtrar</option>
                 <option value=""  class="type__option">Electrico</option>
                 <option value="" class="type__option">Planta</option>
                 <option value="" class="type__option">Agua</option>
                 <option value="" class="type__option">Fuego</option>
             </select>
        </div>
    </form>
<CardPokemon/>

    <footer class="footer">
        <p class="footer__copy">POKE APaI</p>
    </footer>
</main>
</template>

<style scoped lang="scss">
@use '@/scss/colors' as c;

    main{
        height: 100vh;
        display:flex;
        flex-direction: column;
        align-items: center;
    }

    .header{
        margin-bottom: 3em;
        &__img{
        }
    }

    .filter{
        display: flex;
        width: 50%;
        justify-content: space-around;
        background: map-get(c.$colors , "dark-blue" );
        
        &__container-search{
            display: flex;
            flex-direction: row;
        }

        &__search{
            .search__input{
                background:white;
                padding:.6em;
            }

            .search__title{
                font-size: 2em;
                color: white;
            }

            .search__button{
                // font-size: 1.8em;
                padding: .8em;
                background: orange;
                margin-left: 2em;
            }

            .icon-search{
                font-size: 1.4em;
                color: white;

            }
        }

        &__type{
            display: flex;
            flex-direction: column;

            .type__title{
                font-size: 2em;
                color: white;
            }

            .type__select{
                padding: 1em;
                background: white;
            }
        }
    }
    .footer{
          background: map-get(c.$colors , "dark-blue" );
          width: 100% ;
          position: abolute;
          bottom: 0;
    }
</style>