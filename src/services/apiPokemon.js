import { ref } from "vue";

class Pokemon {
    #pokemon;

    constructor(){
        this.pokemon = ref([])
    }

    getPokemons(){
        console.log(this.pokemon)
        return this.pokemon;
    }

    async fetchAll(){
        try {
            const url = "https://pokeapi.co/api/v2/pokemon/";
            const response = await fetch(url);
            const json = await response.json();
            this.pokemon.value = await json;  
        } catch (error) {
            console.error(error);
        }
    }
}

export default Pokemon;