class Pokemon {
    #pokemon;

    constructor(){
        this.pokemon = [];
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
            return json.results;  
        } catch (error) {
            console.error(error);
        }
    }

      async  fetchOnePokemon(){
        try {
            const urlOnePokemon = "https://pokeapi.co/api/v2/pokemon/1/";
            const res = await fetch(urlOnePokemon);
            const jsonData = await res.json();
            return jsonData
            console.log(jsonData);
        } catch (error) {
            console.log(error);
            
        }
    }
}
    


export  default Pokemon;