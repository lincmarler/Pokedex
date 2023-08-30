import { AppState } from "../AppState.js";
import { Pokemon } from "../models/Pokemon.js";
import { pokemonsService } from "../services/PokemonsService.js";
import { Pop } from "../utils/Pop.js";
import { setHTML } from "../utils/Writer.js";


function _drawActivePokemon() {
    let activePoke = AppState.activePokemon
    if (activePoke) {
        setHTML('activePoke', activePoke.activeTemplate)
    }
}

function _drawPokemonsList() {
    let poke = AppState.pokemonList
    let listContent = ''
    poke.forEach(p => listContent += Pokemon.PokemonListTemplate(p))
    setHTML('pokeList', listContent)
}


export class PokemonsController {
    constructor() {
        this.getPokemons()
        AppState.on('pokemonList', _drawPokemonsList)
        AppState.on('activePokemon', _drawActivePokemon)
    }

    async getPokemons() {
        try {
            await pokemonsService.getPokemons()
        } catch (error) {
            Pop.error(error)
            console.error(error)
        }
    }

    async getOnePokemon(name) {
        try {
            await pokemonsService.getOnePokemon(name)
        } catch (error) {
            Pop.error(error)
            console.error(error)
        }
    }

    async getPokeType(types) {
        await pokemonsService.getPokeType(types)
    }
}