import React from "react";

import Button from "@/components/Button";
import Leagues from "@/components/Leagues";

import { HeaderContainer, Title, Info } from "./HeaderStyled";
import useHeaderHooks from "./useHeaderHooks";

const Header = () => {
  const {
    week,
    title,
    league,
    matchesLength,
    decreaseWeek,
    increaseWeek,
    handleSetLeague,
  } = useHeaderHooks();

  return (
    <HeaderContainer>
      <Leagues handleSetLeague={handleSetLeague} league={league} />
      <Info>
        <Button onClick={decreaseWeek} disabled={0 === week}>
          Anterior
        </Button>
        <Title>{title}</Title>
        <Button onClick={increaseWeek} disabled={matchesLength - 1 === week}>
          Siguiente
        </Button>
      </Info>
    </HeaderContainer>
  );
};

export default Header;
