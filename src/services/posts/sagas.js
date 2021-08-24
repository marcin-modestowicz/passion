import { put, takeLatest } from "redux-saga/effects";

function* fetchPosts(action) {
  const json = yield fetch(
    `https://jsonplaceholder.typicode.com/posts?_page=${action.payload}&_limit=10`
  ).then(response => response.json());

  yield put({ type: "FETCH_POSTS_SUCCESS", payload: json });
}

export default function* actionWatcher() {
  yield takeLatest("FETCH_POSTS", fetchPosts);
}
