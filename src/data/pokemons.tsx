import { Pokemon } from "../classes/Pokemon";
import { Database } from "../services/firebase/db";

export const pokeApiBaseUrl = "https://pokeapi.co/api/v2";
export const numberOfPokemons = 905;

export class Pokemons {
  private listPokemon: Pokemon[] = [];
  private static instance: Pokemons;

  constructor() {}

  public static getInstance(): Pokemons {
    if (!Pokemons.instance) {
      Pokemons.instance = new Pokemons();
    }

    return Pokemons.instance;
  }

  public getList(): Pokemon[] {
    if (this.listPokemon.length !== numberOfPokemons) {
      this.fetch();
    }

    const db = new Database();
    return this.listPokemon;
  }

  protected async fetch() {
    for (let index = 1; index <= numberOfPokemons; index++) {
      const responsePk = await fetch(`${pokeApiBaseUrl}/pokemon/${index}`);
      const jsonPk = await responsePk.json();

      if (!this.listPokemon.find((pokemon) => pokemon.getId() === index)) {
        const db = new Database();
        db.set(
          `pokemons/${index}`,
          new Pokemon({
            name: jsonPk.name,
            type: jsonPk.types[0].type.name,
            id: jsonPk.id,
            spriteUrl: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${jsonPk.id}.png`,
          })
        );

        this.listPokemon.push(
          new Pokemon({
            name: jsonPk.name,
            type: jsonPk.types[0].type.name,
            id: jsonPk.id,
            spriteUrl: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${jsonPk.id}.png`,
          })
        );
      }
    }
  }
}
