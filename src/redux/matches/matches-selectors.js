import { createSelector } from "reselect";

export const matchesSelector = (state) =>
  state && state.matches;

export const dataMatcheSelector = createSelector(
  [matchesSelector],
  (matches) => matches.data
);

export const weekmatchesSelector = createSelector(
  [matchesSelector],
  (matches) => matches.week
);

export const leagueMatchesSelector = createSelector(
  [matchesSelector],
  (matches) => matches.league
);

export const currentMatchesSelector = createSelector(
  [dataMatcheSelector, leagueMatchesSelector],
  (data, league) => data.filter((item) => item.league === league) || {}
);

export const currentMatchesPerWeekSelector = createSelector(
  [currentMatchesSelector, weekmatchesSelector],
  (currentMatches, week) => currentMatches[week] || { events: [] }
);

export const currentTitleSelector = createSelector(
  [currentMatchesPerWeekSelector],
  (currentMatchesPerWeek) => currentMatchesPerWeek.title
);

export const matchesLengthPerLeagueSelector = createSelector(
  [currentMatchesSelector],
  (currentMatches) => currentMatches.length
);
