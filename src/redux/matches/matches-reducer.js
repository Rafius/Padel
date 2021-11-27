import { SET_WEEK } from ".";
import { reducerFactory } from "../reducer-factory";
import {
  GET_MATCHES,
  GET_MATCHES_SUCCESS,
  SET_LEAGUE,
} from "./matches-actions";

const initialState = {
  data: [],
  week: 0,
  league: "low",
  isLoading: false
};

const getMatchesHandler = (state) => ({
  ...state,
  isLoading: true,
});

const getMatchesSuccessHandler = (
  state,
  action
) => {
  return ({
    ...state,
    ...action.payload.matches,
    isLoading: false,
  });
};

const setLeagueHandler = (state, action) => ({
  ...state,
  league: action.payload,
  week: 0,
});

const setWeekHandler = (state, action) => ({
  ...state,
  week: action.payload,
  isLoading: true,
});

const handlers = {
  [GET_MATCHES]: getMatchesHandler,
  [GET_MATCHES_SUCCESS]: getMatchesSuccessHandler,
  [SET_LEAGUE]: setLeagueHandler,
  [SET_WEEK]: setWeekHandler,
};

export default reducerFactory(initialState, handlers);
