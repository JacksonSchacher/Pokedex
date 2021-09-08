import { ProxyState } from "../AppState.js"
import { FocusedPokemon } from "../Models/FocusedPokemon.js";
import { PokeLibrary } from "../Models/PokeLibrary.js"

// @ts-ignore
const pokeApi = axios.create({
    baseURL: 'https://pokeapi.co/api/v2/pokemon?limit=152'
});
// @ts-ignore
const pokeApiBlank = axios.create({
    baseURL: ''
});
class PokeLibraryService {
    async getPokemon(url) {
        let res = await pokeApiBlank.get(url)
        console.log("get Focused Pokemon", res.data)
            // @ts-ignore
        ProxyState.focusedPokemon = new FocusedPokemon(res.data)
    }
    async getPokeLibrary() {
        let res = await pokeApi.get()
        console.log("get poke Library", res.results)
        ProxyState.pokeLibrary = res.data.results.map(p => new PokeLibrary(p))

    }
}
export const pokeLibraryService = new PokeLibraryService()