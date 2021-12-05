import { call, put, takeLatest, select } from "redux-saga/effects";
import fetchApi from "@/utils/fetch-api";
import { GET_MATCHES, getMatchesSuccess, GET_PHONE_NUMBERS, getPhoneNumbersSuccess } from "./matches-actions";
import { matchesLeagueSelector } from "./matches-selectors";
import { getMatchesFail, getPhoneNumbersFail } from ".";

const urlLocal = "http://localhost:3001/matches";
const urlProd = "https://padel-api.vercel.app/";

function* getMatches() {
  try {
    const league = yield select(matchesLeagueSelector);

    const response = yield call(fetchApi, {
      url: `${urlProd}matches?league=${league}`
    });

    yield put(getMatchesSuccess(response));
  } catch (e) {
    yield put(getMatchesFail(e));
    console.log("getMatches FAIL", e);
  }
}

function* getPhoneNumbers() {
  try {
    const league = yield select(matchesLeagueSelector);

    const response = yield call(fetchApi, {
      url: `${urlProd}phones?league=${league}`
    });

    yield put(getPhoneNumbersSuccess(response));
  } catch (e) {
    yield put(getPhoneNumbersFail(e));
    console.log("getMatches FAIL", e);
  }
}

export default function* pokemonSaga() {
  yield takeLatest([GET_MATCHES], getMatches);
  yield takeLatest([GET_PHONE_NUMBERS], getPhoneNumbers);
}
