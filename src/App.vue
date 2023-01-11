<script setup>
import Pokemon from './services/apiPokemon.js';
import { ref, onBeforeMount } from 'vue';

const service = new Pokemon([]);

let pokemons = ref([]);

onBeforeMount(async()=>{
    pokemons.value = await service.fetchAll()
    console.log(pokemons.value);

})

let poke = ref([]);
  onBeforeMount(async()=>{
    poke.value = await service.fetchOnePokemon()
    console.log(poke.abilities);
  })



</script>

<template>
  <h1>Pokemons</h1>
  <!-- <ul>
    <li v-for="pokemon in pokemons">{{ pokemon }}</li>
  </ul> -->

  <ul>
    <li v-for="(poke,index) in pokemons">{{ index }}{{ poke }}</li>
  </ul>
</template>



<style scoped>

</style>
