import { SET_WEEk } from ".";
import { reducerFactory } from "../reducer-factory";
import {
  GET_MATCHES,
  GET_MATCHES_SUCCESS,
  SET_LEAGUE,
} from "./matches-actions";

const initialState = {
  data: [
    {
      key: 1,
      title: "JORNADA 1 (15 al 21 Noviembre)",
      league: "low",
      events: [
        {
          home: "Erica / Kevin",
          away: "Amar / Jordiku",
        },
        {
          home: "Sergio / Toni",
          away: "Miquel G / Montse S",
        },
        {
          home: "Rafa P / Dani A",
          away: "Ruben / Paola",
          homeResult: 13,
          awayResult: 1,
        },
        {
          home: "Maria / Peque",
          away: "Claudia / Marina",
        },
        {
          home: "Ana R / Paco",
          away: "Judith / Vanessa",
        },
      ],
    },
    {
      key: 2,
      title: "JORNADA 2 (22 al 28 Noviembre)",
      league: "low",
      events: [
        {
          home: "Miquel G / Montse S",
          away: "Erica / Kevin",
        },
        {
          home: "Claudia / Marina",
          away: "Ana R / Paco",
        },
        {
          home: "Ruben / Paola",
          away: "Maria / Peque",
        },
        {
          home: "Amar / Jordiku",
          away: "Rafa P / Dani A",
        },
        {
          home: "Judith / Vanessa",
          away: "Sergio / Toni",
        },
      ],
    },
    {
      key: 11,
      title: "JORNADA 1 (15 al 21 Noviembre)",
      league: "mid",
      events: [
        {
          home: "Test / Test",
          away: "Test / Test",
        },
        {
          home: "Test / Test",
          away: "Test  / Test ",
        },
        {
          home: "Test  / Test ",
          away: "Test / Test",
          homeResult: 13,
          awayResult: 1,
        },
        {
          home: "Test / Test",
          away: "Test / Test",
        },
        {
          home: "Test  / Test",
          away: "Test / Test",
        },
      ],
    },
  ],
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
    data: action.payload.results,
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
