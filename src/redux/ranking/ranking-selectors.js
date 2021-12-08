import { createSelector } from "reselect";

export const rankingSelector = (state) =>
    state && state.rankingSelector;

// export const rankingSelectorSelector = createSelector(
//     [rankingSelector],
//     (ranking) => ranking.ranking
// );
