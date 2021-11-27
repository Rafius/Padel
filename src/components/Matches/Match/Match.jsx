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

const Match = ({ home, away, homeResult, awayResult, isSecondary, index }) => (
  <MatchMain index={index} isSecondary={isSecondary}>
    <Status result={homeResult}>{homeResult ? "Jugado" : "Pendiente"}</Status>
    <TeamNames>
      <HomeTeam>{home}</HomeTeam>
      <AwayTeam>{away}</AwayTeam>
    </TeamNames>
    <Result>
      <HomeResult>{homeResult}</HomeResult>
      <AwayResult>{awayResult}</AwayResult>
    </Result>
  </MatchMain>
);

export default Match;
