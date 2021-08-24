import { all } from "redux-saga/effects";

import posts from "../services/posts/sagas";

export default function* rootSaga() {
  yield all([posts()]);
}
