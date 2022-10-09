import React from "react";
import { PokedexIcon } from "../../assets/icons/icon_pokedex";
import { SearchIcon } from "../../assets/icons/icon_search";
import { SearchBar } from "../../components/searchBar/searchBar";
import { colors } from "../../styles/colors";
import * as styled from "./styled";

export const Pokedex = () => {
  const [search, setSearch] = React.useState("");
  const [searchBarFocus, setSearchBarFocus] = React.useState(false);

  return (
    <styled.Container>
      <div id="pokemon-info">Pokédex1</div>
      <div id="pokemons">
        <SearchBar
          onFocus={() => setSearchBarFocus(true)}
          onBlur={() => setSearchBarFocus(false)}
          placeholder="Pesquise um Pokémon"
          icon={
            <SearchIcon
              color={colors.theme.colors["grey-300"].value}
              variantColor={colors.theme.colors["grey-400"].value}
              toVariantColor={searchBarFocus}
            />
          }
        />
      </div>
    </styled.Container>
  );
};
