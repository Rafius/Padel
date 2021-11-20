import { createSelector } from "reselect";
import { ApplicationState } from "../reducer";

export const matchesSelector = (state: ApplicationState) =>
  state && state.matches;

export const dataMatcheSelector = createSelector(
  [matchesSelector],
  (matches: any) => matches.data
);

export const weekmatchesSelector = createSelector(
  [matchesSelector],
  (matches: any) => matches.week
);

export const leagueMatchesSelector = createSelector(
  [matchesSelector],
  (matches: any) => matches.league
);

export const currentMatchesSelector = createSelector(
  [dataMatcheSelector, leagueMatchesSelector],
  (data: any, league: any) => data.filter((item) => item.league === league)
);

export const currentMatchesPerWeekSelector = createSelector(
  [currentMatchesSelector, weekmatchesSelector],
  (currentMatches: any, week: any) => currentMatches[week]
);

export const currentTitleSelector = createSelector(
  [currentMatchesPerWeekSelector],
  (currentMatchesPerWeek) => currentMatchesPerWeek.title
);

export const matchesLengthPerLeagueSelector = createSelector(
  [currentMatchesSelector],
  (currentMatches) => currentMatches.length
);
