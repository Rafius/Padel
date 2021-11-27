import { createSelector } from "reselect";

export const matchesSelector = (state) =>
  state && state.matches;

export const weekmatchesSelector = createSelector(
  [matchesSelector],
  (matches) => matches.week
);

export const leagueMatchesSelector = createSelector(
  [matchesSelector],
  (matches) => matches.league
);

export const isLoadingSelector = createSelector(
  [matchesSelector],
  (matches) => matches.isLoading
);

export const matchesDataSelector = createSelector(
  [matchesSelector],
  (matches) => matches.data || []
);

export const matchesTitleSelector = createSelector(
  [matchesSelector],
  (matches) => matches.title
);
