import React, { InputHTMLAttributes, useState } from "react";
import { Pokemon } from "../../../classes/Pokemon";
import * as styled from "./styled";

type PropsType = React.PropsWithChildren<{
  pokemon: Pokemon;
  textColor: String;
  isSelected: boolean;
  setSelected: (isSelected: boolean) => void;
  backgroundColor: String;
}>;

export const PokemonContainer = ({
  ...props
}: PropsType & InputHTMLAttributes<HTMLInputElement>) => {
  return (
    <styled.Container
      selected={props.isSelected}
      type={`${props.pokemon.getType()}`}
      onClick={() => props.setSelected(true)}
    >
      <div className="detail-background db-1"></div>
      <div className="detail-background db-2"></div>
      <img
        draggable={false}
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${props.pokemon.getId()}.png`}
      />
      <div className="info">
        <h1>{props.pokemon.getName()}</h1>
        <p>#{props.pokemon.getId()}</p>
      </div>
    </styled.Container>
  );
};
