import { put, select, takeLatest } from "redux-saga/effects";

import { getPostsSortOrder } from "./selectors";

function* fetchPosts(action) {
  const order = yield select(getPostsSortOrder);
  const json = yield fetch(
    `https://jsonplaceholder.typicode.com/posts?_page=${action.payload.page}&_sort=${order}&_limit=10`
  ).then(response => response.json());

  yield put({ type: "FETCH_POSTS_SUCCESS", payload: { posts: json } });
}

export default function* actionWatcher() {
  yield takeLatest("FETCH_POSTS", fetchPosts);
  yield takeLatest("FETCH_COMMENTS", fetchComments);
  yield takeLatest("SORT_POSTS", fetchPosts);
}

function* fetchComments(action) {
  const json = yield fetch(
    `https://jsonplaceholder.typicode.com/comments?postId=${action.payload.postId}`
  ).then(response => response.json());

  yield put({ type: "FETCH_COMMENTS_SUCCESS", payload: {postId: action.payload.postId, comments: json} });
}
