import { ProxyState } from "../AppState.js";
import { pokeBallService } from "../Services/PokeBallService.js";

function _drawPokemon() {
    console.log('draw Pokemans')
}
export class PokeBallController {
    constructor() {
        ProxyState.on('pokeballItems', _drawPokemon)
    }
}