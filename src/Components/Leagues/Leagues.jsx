import React from "react";

import Button from "@/Components/Button";
import { LeaguesContainer } from "./LeaguesStyled";

const Leagues = ({ setLowLeague, setMidLeague, league }) => (
  <LeaguesContainer>
    <Button onClick={setLowLeague} disabled={league === "low"}>
      Nivel Bajo
    </Button>
    <Button onClick={setMidLeague} disabled={league === "mid"}>
      Nivel Medio
    </Button>
  </LeaguesContainer>
);

export default Leagues;
