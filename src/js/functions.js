import { ref } from "vue"
import Pokemon from '@/services/apiPokemon.js';

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

export const filterForName = (name,arr,store) =>{
  let pokeName = name.toLowerCase()
  name = ""
  arr.pop()

  store.pokemones.find(el => el.name === pokeName) 
      ?   arr.push(store.pokemones.find(el => el.name === pokeName)) 
      :   alert("El nombre introducido no existe");
}


