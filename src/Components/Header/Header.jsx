import React from "react";

import Button from "@/components/Button";
import Leagues from "@/components/Leagues";

import { HeaderContainer, Title, Info } from "./HeaderStyled";
import useHeaderHooks from "./useHeaderHooks";

const Header = () => {
  const { week, title, league, matchesLength, handleSetWeek, handleSetLeague } =
    useHeaderHooks();

  return (
    <HeaderContainer>
      <Leagues handleSetLeague={handleSetLeague} league={league} />
      <Info>
        <Button onClick={() => handleSetWeek(-1)} disabled={week === 1}>
          Anterior
        </Button>
        <Title>{title}</Title>
        <Button
          onClick={() => handleSetWeek(+1)}
          disabled={matchesLength - 1 === week}
        >
          Siguiente
        </Button>
      </Info>
    </HeaderContainer>
  );
};

export default Header;
