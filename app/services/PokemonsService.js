import { AppState } from "../AppState.js";
import { baseURL } from '../env.js'
import { Pokemon } from "../models/Pokemon.js";

// @ts-ignore
export const api = axios.create({
    baseURL: baseURL,
    timeout: 8000,
    withCredentials: true
})

// @ts-ignore
export const pokeApi = new axios.create({
    baseURL: 'https://pokeapi.co/api/v2/',
    timeout: 8000
})

class PokemonsService {

    async getPokemons() {
        const res = await pokeApi.get('pokemon')
        console.log('Got em all', res.data);
        AppState.pokemonList = res.data.results
        console.log(AppState.pokemonList)
    }

    async getOnePokemon(name) {
        console.log(name);
        const res = await pokeApi.get(`pokemon/${name}`)
        AppState.activePokemon = new Pokemon(res.data)
    }

    async getPokeType(types) {
        const response = await axios.get('https://pokeapi.co/api/v2/pokemon-form/2/')
    }
}

export const pokemonsService = new PokemonsService()