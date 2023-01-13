
class Pokemon {
    #pokemon;
    url = "https://pokeapi.co/api/v2/pokemon/";

    async fetchAll(){
        try {
            const response = await fetch(this.url);
            const json = await response.json();

            let pokemons = [];

            for( const pokemon of json.results ){
                pokemons.push( pokemon );
            }
            
            return pokemons

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