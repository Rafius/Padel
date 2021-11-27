import { SET_WEEk } from ".";
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
};

const getMatchesHandler = (state) => {
  return {
    ...state,
    isLoading: true,
  };
};

const getMatchesSuccessHandler = (
  state,
  action
) => {
  return {
    ...state,
    data: action.payload.matches,
    isLoading: false,
  };
};

const setLeagueHandler = (state, action) => {
  return {
    ...state,
    league: action.payload,
    week: 0,
  };
};

const setWeekHandler = (state, action) => {
  return {
    ...state,
    week: action.payload,
  };
};

const handlers = {
  [GET_MATCHES]: getMatchesHandler,
  [GET_MATCHES_SUCCESS]: getMatchesSuccessHandler,
  [SET_LEAGUE]: setLeagueHandler,
  [SET_WEEk]: setWeekHandler,
};

export default reducerFactory(initialState, handlers);
