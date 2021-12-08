import { createSelector } from "reselect";

export const rankingSelector = (state) =>
    state && state.ranking;

export const rankingDataSelector = createSelector(
    [rankingSelector],
    (ranking) => ranking.data
);
