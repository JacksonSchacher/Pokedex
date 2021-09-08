export class FocusedPokemon {
    constructor(pokeData) {
        this.name = pokeData.name
        this.img = pokeData.sprites.front_default
        this.types = pokeData.types
        this.gameIndex = pokeData.game_indices[0].game_index
        this.stats = pokeData.stats
    }


    get Template() {
        return /*html*/ `
        <div class="modal-header">
                        <div class="d-flex justify-content-between w-100">
                            <h5 class="modal-title" id="exampleModalLabel">${this.name.toUpperCase()}</h5>
                            <h6 class="me-2">#${this.gameIndex}</h6>
                        </div>

                    </div>
                    <div class="modal-body text-center">

                        <img class="pokemon-sprite rounded-circle p-3" src="${this.img}" alt="pokemon pic">
                        <hr>

                        <div class="flex-column align-items-start">
                            ${this.Types}
                        </div>
                        <hr>
                        <div>
                        ${this.Stats}
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-warning">Catch!</button>
                    </div>
        `

    }

    get Types() {
        let template = ``
        let elemTypes = this.types
        elemTypes.forEach(t => template += `<span class="bg-primary text-dark rounded-circle m-1 p-2">${t.type.name}</span>`);
        return template
    }
    get Stats() {
        let template = ``
        let statsArr = this.stats
        statsArr.forEach(s => template += `<span>${s.stat.name}: ${s.base_stat}</span><br>`);
        return template
    }
}