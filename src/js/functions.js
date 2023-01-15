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

  console.log("Hola")

export const returnHome = (arr) =>{
  location.reload();
  arr = [];

}
// console.log()
export const filterForName = (name,arr,store) =>{
  let pokeName = name.toLowerCase()
  name = ""
  arr.pop()

  store.pokemones.find(el => el.name === pokeName) 
      ?   arr.push(store.pokemones.find(el => el.name === pokeName)) 
      :   alert("El nombre introducido no existe");
}


// export const filterForType = (type,arr,store, service) =>{
//   let pokeType = type.toLowerCase()
//   type = ""
//   const service = new Pokemon([]);

//   // arr.pop()
//   // store.pokemones.forEach(el=> console.log(el.types))
//   // store.pokemones.filter(el => el.types[0].type.name === pokeType) 
//   //     ?   arr.push(store.pokemones.filter(el => el.types[0].type.name === pokeType)) 
//   //     :   alert("El tipo introducido no existe");
// }
