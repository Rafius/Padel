import { call, put, takeLatest, select } from "redux-saga/effects";
import fetchApi from "@/utils/fetch-api";
import { GET_MATCHES, SET_WEEK, SET_LEAGUE, getMatchesSuccess } from "./matches-actions";
import { weekmatchesSelector } from "./matches-selectors";
import { leagueMatchesSelector } from ".";

const urlLocal = "http://localhost:3001/matches";
const urlProd = "https://padel-api.vercel.app/matches";

function* getMatches() {
  try {
    const week = yield select(weekmatchesSelector);
    const league = yield select(leagueMatchesSelector);

    const response = yield call(fetchApi, {
      url: `${urlLocal}?league=${league}&week=${week}`
    });

    yield put(getMatchesSuccess(response));
  } catch (e) {
    console.log(e);
  }
}

export default function* pokemonSaga() {
  yield takeLatest([GET_MATCHES], getMatches);
}
