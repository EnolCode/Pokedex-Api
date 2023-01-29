import { defineStore } from "pinia";
import axios from "axios";
export const pokemonAxios = axios.create({
  baseURL: "https://pokeapi.co/api/v2/pokemon/"
})

export const usePokemonsStore = defineStore({
  id: "pokemones",
  state: () => ({
    pokemones: [],
    pokemonId:[]
  }),
  actions: {
     fetchPokemons() {
        pokemonAxios.get("")
        .then(resp => resp.data.results)
        .catch((err) => {
          console.log(err);
        })
    },

    fetchPokemon(name){
      let pokemones=[]

      pokemonAxios.get(name)
       .then(resp =>{
        pokemones.push(resp.data)
       })
       .catch((err) => {
         console.log(err);
        })
        return pokemones
    }
  }, 
});