import React from "react";

import Button from "@/Components/Button";
import Leagues from "@/Components/Leagues";

import { HeaderContainer, Title, Info } from "./HeaderStyled";

const Header = ({
  schedule,
  week,
  decreaseWeek,
  increaseWeek,
  setLowLeague,
  setMidLeague,
  league,
}) => (
  <HeaderContainer>
    <Leagues
      setLowLeague={setLowLeague}
      setMidLeague={setMidLeague}
      league={league}
    />
    <Info>
      <Button onClick={decreaseWeek} disabled={0 === week}>
        Anterior
      </Button>
      <Title>{schedule[week].title}</Title>
      <Button onClick={increaseWeek} disabled={schedule.length - 1 === week}>
        Siguiente
      </Button>
    </Info>
  </HeaderContainer>
);

export default Header;
