const initialState = {
  loading: false,
  data: [],
  currentPage: 1,
};

export default function posts(state = initialState, { type, payload }) {
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
