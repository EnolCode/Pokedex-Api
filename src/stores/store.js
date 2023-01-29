import { defineStore } from "pinia";
import fetchAll from "../services/apiPokemon";

export const usePokemonsStore = defineStore({
  id: "pokemones",
  state: () => ({
    pokemones: [],
    pokemonId:[]
  }),
  actions: {
    fetchPokemons() {
    fetchAll.get("")
    .then( resp=> {
              this.pokemones = resp.data.results;
        })
        .catch((err) => {
          console.log(err);
        })
    },
  }, 
});