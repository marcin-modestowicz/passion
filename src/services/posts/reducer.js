const initialState = {
  loading: false,
  data: []
};

export default function posts(state = initialState, { type, payload }) {
  switch (type) {
    case "FETCH_POSTS":
      return {
        ...state,
        loading: true
      };
    case "FETCH_POSTS_SUCCESS":
      return {
        ...state,
        loading: false,
        data: payload
      };
    default:
      return state;
  }
}
