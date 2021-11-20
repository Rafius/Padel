import { MatchesTypes } from "./matches-types";

export const GET_MATCHES: string = "GET_MATCHES";
export const GET_MATCHES_SUCCESS: string = "GET_MATCHES_SUCCESS";
export const GET_MATCHES_FAIL: string = "GET_MATCHES_FAIL";

export const SET_LEAGUE: string = "SET_LEAGUE";
export const SET_WEEk: string = "SET_WEEk";
export const getMatches = () => ({
  type: GET_MATCHES,
});

export const getMatchesSuccess = (payload: any): MatchesTypes => ({
  type: GET_MATCHES_SUCCESS,
  payload,
});

export const getMatchesFail = (payload: any): MatchesTypes => ({
  type: GET_MATCHES_FAIL,
  payload,
});

export const setLeague = (payload: any) => ({
  type: SET_LEAGUE,
  payload,
});

export const setWeek = (payload: any) => ({
  type: SET_WEEk,
  payload,
});
