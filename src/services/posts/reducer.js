const postsInitialState = {
  loading: false,
  data: [],
  currentPage: 1,
};

export function posts(state = postsInitialState, { type, payload }) {
  switch (type) {
    case "FETCH_POSTS":
      return {
        ...state,
        loading: true,
        currentPage: payload,
      };
    case "FETCH_POSTS_SUCCESS":
      return {
        ...state,
        loading: false,
        data: state.data.concat(payload)
      };
    default:
      return state;
  }
}

const commentsInitialState = {
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
