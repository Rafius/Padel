import React from "react";

import Button from "@/Components/Button";

import { HeaderContainer, Title } from "./HeaderStyled";

const Header = ({ schedule, week, decreaseWeek, increaseWeek }) => (
  <HeaderContainer>
    <Button onClick={decreaseWeek} disabled={0 === week}>
      Anterior
    </Button>
    <Title>{schedule[week].title}</Title>
    <Button onClick={increaseWeek} disabled={schedule.length - 1 === week}>
      Siguiente
    </Button>
  </HeaderContainer>
);

export default Header;
