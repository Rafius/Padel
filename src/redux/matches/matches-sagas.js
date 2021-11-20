import { call, put, takeLatest } from "redux-saga/effects";
import { GET_MATCHES } from "./matches-actions";

function* getMatches() {
  try {
  } catch (e) {}
}

export default function* pokemonSaga() {
  yield takeLatest(GET_MATCHES, getMatches);
}
