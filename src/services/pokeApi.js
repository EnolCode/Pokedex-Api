import axios from "axios";

const pokemonApi = axios.create({
    baseUrl: "https://pokeapi.co/api/v2/pokemon"
})

export default pokemonApi;