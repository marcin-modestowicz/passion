export const fetchPosts = (page = 1) => ({
  type: "FETCH_POSTS",
  payload: { page }
});

export const fetchComments = postId => ({
  type: "FETCH_COMMENTS",
  payload: { postId }
});

export const sortPosts = order => ({
  type: "SORT_POSTS",
  payload: { page: 1, order }
});
