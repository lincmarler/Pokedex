import { AppState } from "../AppState.js";
import { Pop } from "../utils/Pop.js";


export class Pokemon {
    constructor(data) {
        this.name = data.species.name
        this.img = data.sprites.front_default
        this.weight = data.weight
        this.height = data.height
        this.types = data.types
        this.creatorId = data.creatorId
    }

    static PokemonListTemplate(poke) {
        return ` <p class="selectable text-light" onclick="app.PokemonsController.getOnePokemon('${poke.name}')">${poke.name}</p>
        `
    }

    get activeTemplate() {
        return `
    <div class="col-6 bg-secondary p-3">
      <div class="row">
        <h1 class="col-12 text-center">${this.name}</h1>
        <img class="img-fluid"
          src="${this.img}"
          alt="${this.name}">
        <div class="row p-2">
          <div class="col-6 fs-4">Height: ${this.height}</div>
          <div class="col-6 fs-4">Weight: ${this.weight}</div>
          <div class="col-12 fs-4 pt-2">${this.types}</div>
          <div class="text-end">
            <button class="btn btn-danger col-3">Catch</button>
          </div>
        </div>
      </div>
    </div>
        `
    }

    get pokemonType() {
        let typeContent = ''
        this.types.forEach(t => typeContent = )
    }

}