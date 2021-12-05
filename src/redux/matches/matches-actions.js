
export const GET_MATCHES = "GET_MATCHES";
export const GET_MATCHES_SUCCESS = "GET_MATCHES_SUCCESS";
export const GET_MATCHES_FAIL = "GET_MATCHES_FAIL";


export const GET_PHONE_NUMBERS = "GET_PHONE_NUMBERS";
export const GET_PHONE_NUMBERS_SUCCESS = "GET_PHONE_NUMBERS_SUCCESS";
export const GET_PHONE_NUMBERS_FAIL = "GET_PHONE_NUMBERS_FAIL";

export const SET_LEAGUE = "SET_LEAGUE";
export const SET_WEEK = "SET_WEEK";


export const getMatches = () => ({
  type: GET_MATCHES,
});

export const getMatchesSuccess = (payload) => ({
  type: GET_MATCHES_SUCCESS,
  payload,
});

export const getMatchesFail = (payload) => ({
  type: GET_MATCHES_FAIL,
  payload,
});

export const getPhoneNumbers = () => ({
  type: GET_PHONE_NUMBERS,
});

export const getPhoneNumbersSuccess = (payload) => ({
  type: GET_PHONE_NUMBERS_SUCCESS,
  payload,
});

export const getPhoneNumbersFail = (payload) => ({
  type: GET_PHONE_NUMBERS_FAIL,
  payload,
});

export const setLeague = (payload) => ({
  type: SET_LEAGUE,
  payload,
});

export const setWeek = (payload) => ({
  type: SET_WEEK,
  payload,
});
