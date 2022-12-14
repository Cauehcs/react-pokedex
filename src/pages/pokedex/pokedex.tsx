import React, { useState } from "react";
import { PokedexIcon } from "../../assets/icons/icon_pokedex";
import { SearchIcon } from "../../assets/icons/icon_search";
import { Pokemon } from "../../classes/Pokemon";
import { getContainerColors } from "../../components/pokedex/pokemonContainer/colorsContainer";
import { PokemonContainer } from "../../components/pokedex/pokemonContainer/pokemonContainer";
import { SearchBar } from "../../components/searchBar/searchBar";
import { Pokemons } from "../../data/pokemons";
import { colors } from "../../styles/colors";
import * as styled from "./styled";

export const Pokedex = () => {
  const [search, setSearch] = useState("");
  const [searchBarFocus, setSearchBarFocus] = useState(false);

  const [selectedPokemon, setSelected] = useState(0);

  const pokemons: Pokemon[] = Pokemons.getInstance().getList();

  const filteredPokemons = pokemons.filter((pokemon) => {
    return (
      pokemon.getName().toLowerCase().includes(search.toLowerCase()) ||
      pokemon.getId().toString().includes(search)
    );
  });

  return (
    <styled.Container>
      <div id="pokemon-info">Pokédex1</div>
      <div id="pokemons">
        <SearchBar
          onFocus={() => setSearchBarFocus(true)}
          onBlur={() => setSearchBarFocus(false)}
          placeholder="Pesquise um Pokémon"
          onChange={(e) => setSearch(e.target.value)}
          icon={
            <SearchIcon
              color={colors.theme.colors["grey-300"].value}
              variantColor={colors.theme.colors["grey-400"].value}
              toVariantColor={searchBarFocus}
            />
          }
        />
        <div id="sidebar-pokemons">
          {filteredPokemons.map((pokemon) => (
            <PokemonContainer
              pokemon={pokemon}
              isSelected={selectedPokemon === pokemon.getId()}
              setSelected={() => setSelected(pokemon.getId())}
              textColor={getContainerColors(pokemon.getType()).textColor}
              backgroundColor={
                getContainerColors(pokemon.getType()).backgroundColor
              }
            />
          ))}
        </div>
      </div>
    </styled.Container>
  );
};
