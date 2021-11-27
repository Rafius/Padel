import { call, put, takeLatest } from "redux-saga/effects";
import fetchApi from "@/utils/fetch-api";
import { GET_MATCHES, getMatchesSuccess } from "./matches-actions";

const urlLocal = "http://localhost:3001/matches";
const urlProd = "https://padel-api.vercel.app/matches";

function* getMatches() {
  try {
    const response = yield call(fetchApi, {
      url: urlProd
    });
    yield put(getMatchesSuccess(response));
    console.log(response);
  } catch (e) {
    console.log(e);
  }
}

export default function* pokemonSaga() {
  yield takeLatest(GET_MATCHES, getMatches);
}
