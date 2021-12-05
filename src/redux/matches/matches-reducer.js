import { reducerFactory } from "../reducer-factory";
import {
  GET_PHONE_NUMBERS,
  GET_PHONE_NUMBERS_FAIL,
  GET_PHONE_NUMBERS_SUCCESS,
  SET_WEEK,
  GET_MATCHES,
  GET_MATCHES_FAIL,
  GET_MATCHES_SUCCESS,
  SET_LEAGUE,
} from "./matches-actions";

const initialState = {
  weeks: [],
  week: 1,
  league: "low",
  isLoading: false,
};

const getMatchesHandler = (state) => ({
  ...state,
  isLoading: true,
});

const getMatchesSuccessHandler = (state, action) => ({
  ...state,
  ...action.payload.matches,
  isLoading: false,
});

const getMatchesFailHandler = (state) => ({
  ...state,
  isLoading: false,
});

const getPhoneNumbersHandler = (state) => ({
  ...state,
  isLoading: true,
});

const getPhoneNumbersSuccessHandler = (state, action) => ({
  ...state,
  ...action.payload.numbers,
  isLoading: false,
});

const getPhoneNumbersFailHandler = (state, action) => ({
  ...state,
  isLoading: false,
});

const setLeagueHandler = (state, action) => ({
  ...state,
  league: action.payload,
  week: 1,
});

const setWeekHandler = (state, action) => ({
  ...state,
  week: action.payload,
});

const handlers = {
  [GET_MATCHES]: getMatchesHandler,
  [GET_MATCHES_SUCCESS]: getMatchesSuccessHandler,
  [GET_MATCHES_FAIL]: getMatchesFailHandler,
  [GET_PHONE_NUMBERS]: getPhoneNumbersHandler,
  [GET_PHONE_NUMBERS_SUCCESS]: getPhoneNumbersSuccessHandler,
  [SET_LEAGUE]: setLeagueHandler,
  [GET_PHONE_NUMBERS_FAIL]: getPhoneNumbersFailHandler,
  [SET_WEEK]: setWeekHandler,
};

export default reducerFactory(initialState, handlers);
