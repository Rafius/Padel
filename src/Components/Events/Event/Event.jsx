import React from "react";

import {
  EventMain,
  Status,
  HomeTeam,
  AwayTeam,
  TeamNames,
  Result,
  HomeResult,
  AwayResult,
} from "./EventStyled";

const Event = ({ home, away, homeResult, awayResult, isSecondary }) => {
  return (
    <EventMain isSecondary={isSecondary}>
      <Status result={homeResult}>{homeResult ? "Jugado" : "Pendiente"}</Status>
      <TeamNames>
        <HomeTeam won={homeResult > awayResult}>
          {home} {homeResult}
        </HomeTeam>
        <AwayTeam won={awayResult > homeResult}>{away}</AwayTeam>
      </TeamNames>
      <Result>
        <HomeResult>{homeResult}</HomeResult>
        <AwayResult>{awayResult}</AwayResult>
      </Result>
    </EventMain>
  );
};

export default Event;
