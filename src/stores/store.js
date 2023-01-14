import { defineStore } from "pinia";

export const usePokemonsStore = defineStore({
  id: "pokemones",
  state: () => ({
    pokemones: [],
    pokemonId:[]
  }),
  actions: {
    async fetchPokemons() {
      await fetch("https://pokeapi.co/api/v2/pokemon/")
        .then((response) => response.json())
        .then((data) => {
          this.pokemones = data.results;
        })
        .catch((err) => {
          console.log(err);
        })
    },
  },
});