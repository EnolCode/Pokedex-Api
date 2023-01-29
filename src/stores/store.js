import { defineStore } from "pinia";
import { ref, reactive } from "vue";
import fetchAll from "../services/apiPokemon";

export const usePokemonsStore = defineStore("pokemons",()=>{

  const pokemones = reactive([]);
  
  function fetchPokemons() {
        fetch("https://pokeapi.co/api/v2/pokemon")
      .then( res=> res.json())
      .then(data=>{
        // console.log(data)
        data.results.forEach((element,index)=>{
          const pokemon ={
            ...element,
            index:index+1
          }
          pokemones.push(pokemon)
        })
      })

  }

  return{ pokemones , fetchPokemons}
});