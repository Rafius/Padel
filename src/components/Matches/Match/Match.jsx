import React from "react";

import {
  MatchMain,
  Status,
  HomeTeam,
  AwayTeam,
  TeamNames,
  Result,
  HomeResult,
  AwayResult,
} from "./MatchStyled";

const Match = ({
  home,
  away,
  homeResult,
  awayResult,
  isSecondary,
  index,
  text = "Hola cuando os va bien jugar el partido de la semana 7",
  phone = "+34625926240",
}) => {
  const href = `whatsapp://send?text=${text}&phone=${phone}&abid=${phone}`;
  return (
    <MatchMain index={index} isSecondary={isSecondary}>
      <Status result={homeResult}>{homeResult ? "Jugado" : "Pendiente"}</Status>
      <TeamNames>
        <HomeTeam href={href}>{home}</HomeTeam>
        <AwayTeam href={href}>{away}</AwayTeam>
      </TeamNames>
      <Result>
        <HomeResult>{homeResult}</HomeResult>
        <AwayResult>{awayResult}</AwayResult>
      </Result>
    </MatchMain>
  );
};

export default Match;
