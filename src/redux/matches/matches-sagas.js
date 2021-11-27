import { call, put, takeLatest } from "redux-saga/effects";
import fetchApi from "@/utils/fetch-api";
import { GET_MATCHES, getMatchesSuccess } from "./matches-actions";

const urlLocal = "http://localhost:3001/matches?range=Nivel+Bajo!B18:G24";
const urlProd = "https://padel-api.vercel.app/matches?range=Nivel+Bajo!B18:G24";

function* getMatches() {
  try {
    const response = yield call(fetchApi, {
      url: urlLocal
    });

    yield put(getMatchesSuccess(response));
  } catch (e) {
    console.log(e);
  }
}

export default function* pokemonSaga() {
  yield takeLatest(GET_MATCHES, getMatches);
}
