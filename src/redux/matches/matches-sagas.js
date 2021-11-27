import { call, put, takeLatest, select } from "redux-saga/effects";
import fetchApi from "@/utils/fetch-api";
import { GET_MATCHES, getMatchesSuccess } from "./matches-actions";
import { matchesLeagueSelector } from ".";

const urlLocal = "http://localhost:3001/matches";
const urlProd = "https://padel-api.vercel.app/matches";

function* getMatches() {
  try {
    const league = yield select(matchesLeagueSelector);

    const response = yield call(fetchApi, {
      url: `${urlProd}?league=${league}`
    });

    yield put(getMatchesSuccess(response));
  } catch (e) {
    console.log(e);
  }
}

export default function* pokemonSaga() {
  yield takeLatest([GET_MATCHES], getMatches);
}
