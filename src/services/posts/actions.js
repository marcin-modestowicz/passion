export const fetchPosts = (page) => ({
  type: "FETCH_POSTS",
  payload: page
});

export const fetchComments = (postId) => ({
  type: "FETCH_COMMENTS",
  payload: postId
});
