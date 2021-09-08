import { ProxyState } from "../AppState.js";
import { pokeLibraryService } from "../Services/PokeLibraryService.js";


function _drawCard() {
    // @ts-ignore
    document.getElementById('focused-pokemon').innerHTML = ProxyState.focusedPokemon.Template
    console.log(ProxyState.focusedPokemon);

}
export class PokeCardController {
    constructor() {
        ProxyState.on('focusedPokemon', _drawCard)
    }

    async getPokemon(url) {
        try {
            await pokeLibraryService.getPokemon(url)
        } catch (error) {
            console.error('🙌 [ERROR GETTING POKEMON]', error)
        }
    }
}