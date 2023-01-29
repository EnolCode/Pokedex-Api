import axios from "axios"

 const fetchAll = axios.create({
    baseURL: "https://pokeapi.co/api/v2/pokemon"    
 })
    
export default fetchAll;
