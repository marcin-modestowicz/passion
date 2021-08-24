import { put, takeLatest } from "redux-saga/effects";

function* fetchPosts() {
  const json = yield fetch(
    `https://jsonplaceholder.typicode.com/posts?/posts?_page=${1}&_limit=10`
  ).then(response => response.json());

  yield put({ type: "FETCH_POSTS_SUCCESS", payload: json });
}

export default function* actionWatcher() {
  yield takeLatest("FETCH_POSTS", fetchPosts);
}
