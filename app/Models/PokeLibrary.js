export class PokeLibrary {
    constructor(pokeData) {
        this.name = pokeData.name
        this.url = pokeData.url
    }

    get Template() {
        return /*html*/ `
        <li class="list-group-item m-2 py-2 selectable poke-item" data-bs-toggle="modal" data-bs-target="#focusedPokemon" onclick="app.pokeCardController.getPokemon('${this.url}')"><h6 class="text-center">${this.name.toUpperCase()}</h6></li>
        `
    }
}