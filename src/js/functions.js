import { ref } from "vue"

export const addIdZeros =  (id) =>{
    if(id < 10) return   `00${id}`
    if(id < 100) return   `0${id}`
    if(id < 1000) return   `${id}`
  }
  
export const firstCapitalLetter = (str) =>{
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

