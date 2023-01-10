<script setup>
import Pokemon from './services/apiPokemon.js';
import { onMounted } from 'vue';

const service = new Pokemon();
const pokemons = service.getPokemons();

onMounted(async()=>{
    await service.fetchAll()
})

</script>

<template>
  <h1>Pokemons</h1>
  <ul>
    <li v-for="pokemon in pokemons">{{ pokemon }}</li>
  </ul>
</template>

<style scoped>

</style>
