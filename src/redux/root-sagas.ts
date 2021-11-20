import { all, fork } from "redux-saga/effects";

import { matchesSagas } from "./matches";

export default function* rootSaga() {
  yield all([fork(matchesSagas)]);
}
