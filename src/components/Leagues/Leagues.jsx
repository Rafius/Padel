import React from "react";

import Button from "@/components/Button";
import { LeaguesContainer } from "./LeaguesStyled";

const LOW = "low";
const MID = "mid";

const Leagues = ({ handleSetLeague, league }) => {
  return (
    <LeaguesContainer>
      <Button onClick={() => handleSetLeague(LOW)} disabled={league === LOW}>
        Nivel Bajo
      </Button>
      <Button onClick={() => handleSetLeague(MID)} disabled={league === MID}>
        Nivel Medio
      </Button>
    </LeaguesContainer>
  );
};

export default Leagues;
