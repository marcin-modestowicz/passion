import { SORT_ORDER } from "../../constants/posts";

export const postsInitialState = {
  loading: false,
  data: [],
  currentPage: 1,
  order: SORT_ORDER.BY_ID,
};

export function posts(state = postsInitialState, { type, payload }) {
  switch (type) {
    case "FETCH_POSTS":
      return {
        ...state,
        loading: true,
        currentPage: payload.page,
      };
    case "FETCH_POSTS_SUCCESS":
      return {
        ...state,
        loading: false,
        data: state.data.concat(payload.posts)
      };
    case "SORT_POSTS":
      return {
        ...state,
        loading: true,
        currentPage: 1,
        order: payload.order,
        data: [],
      };
    default:
      return state;
  }
}

export const commentsInitialState = {
  loading: false,
  data: new Map(),
};

export function comments(state = commentsInitialState, { type, payload }) {
  switch (type) {
    case "FETCH_COMMENTS":
      return {
        ...state,
        loading: true,
      };
    case "FETCH_COMMENTS_SUCCESS":
      return {
        ...state,
        loading: false,
        data: state.data.set(payload.postId, payload.comments),
      };
    default:
      return state;
  }
}
