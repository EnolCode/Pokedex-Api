import { ref } from "vue"
import Pokemon from '@/services/apiPokemon.js';
import { usePokemonsStore, pokemonAxios } from "@/stores/store.js";

export const addIdZeros =  (id) =>{
    if(id < 10) return   `00${id}`
    if(id < 100) return   `0${id}`
    if(id < 1000) return   `${id}`
  }
  
export const firstCapitalLetter = (str) =>{
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

export const returnHome = (arr) =>{
  location.reload();
  arr = [];
}




