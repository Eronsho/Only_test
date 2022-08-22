import { all, fork } from "redux-saga/effects";

import { addUserfWatcher } from "./user";

export function* rootWatcher() {
  yield all([fork(addUserfWatcher)]);
}
