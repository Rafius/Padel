import React from "react";

import useMatchesHooks from "@/hooks/useMatchesHooks";
import Match from "./Match";
import { MatchesContainer } from "./MatchesStyled";

const Matches = () => {
  const { matchesData } = useMatchesHooks();

  return (
    <MatchesContainer>
      {matchesData.map((event, index) => (
        <Match key={index} {...event} index={index} />
      ))}
    </MatchesContainer>
  );
};

export default Matches;
