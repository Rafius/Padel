import React from "react";

import Button from "@/components/Button";
import { LeaguesContainer } from "./LeaguesStyled";

const LOW = "Nivel Bajo";
const MID = "Nivel Medio";

const Leagues = ({ handleSetLeague, league }) => {
  return (
    <LeaguesContainer>
      {league === MID ? (
        <Button onClick={() => handleSetLeague(LOW)}>Nivel Bajo</Button>
      ) : (
        <Button onClick={() => handleSetLeague(MID)}>Nivel Medio</Button>
      )}
    </LeaguesContainer>
  );
};

export default Leagues;
