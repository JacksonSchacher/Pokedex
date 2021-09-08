import { ProxyState } from "../AppState.js";
import { pokeLibraryService } from "../Services/PokeLibraryService.js";

function _drawLibrary() {
    let template = ''
    ProxyState.pokeLibrary.forEach(p => template += p.Template)
    document.getElementById('poke-library').innerHTML = template
}
export class PokeLibraryController {
    constructor() {
        ProxyState.on('pokeLibrary', _drawLibrary)
        pokeLibraryService.getPokeLibrary()
    }
}