import { useState } from "react";
import * as styled from "./styled";
import { BattleIcon } from "../../assets/icons/icon_battle";
import { ProfileIcon } from "../../assets/icons/icon_profile";
import { PokedexIcon } from "../../assets/icons/icon_pokedex";

type PropsType = {
  navigate: (path: string) => void;
};

export const Header = ({ navigate }: PropsType) => {
  const isActive = (index: number) => {
    return active === index;
  };

  const colorIcon = (isActive: boolean) => {
    return isActive ? "EF4036" : "ffffff";
  };

  const [active, SetActive] = useState(0);

  function toPage(index: number, path: string) {
    SetActive(index);
    navigate(path);
  }

  return (
    <styled.Container>
      <div>
        <styled.Button
          onClick={() => toPage(0, "/profile")}
          active={isActive(0)}
        >
          <ProfileIcon color={colorIcon(isActive(0))} />
        </styled.Button>
        <styled.Button
          onClick={() => toPage(1, "/pokedex")}
          active={isActive(1)}
        >
          <PokedexIcon color={colorIcon(isActive(1))} />
        </styled.Button>
        <styled.Button
          onClick={() => toPage(2, "/battle")}
          active={isActive(2)}
        >
          <BattleIcon color={colorIcon(isActive(2))} />
        </styled.Button>
      </div>
      <styled.Profile id="header-profile-info">
        <div>
          <p id="header-profile-name">Nome do usuário</p>
          <p id="header-profile-pokemons">Pokémons capturados: 999</p>
        </div>
        <div id="header-profile-picture"></div>
      </styled.Profile>
    </styled.Container>
  );
};
