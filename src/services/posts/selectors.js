export const getPosts = state => state.posts.data;

export const getLoadingPosts = state => state.posts.loading;

export const getPostById = id => state =>
  state.posts.data.find(post => post.id === parseInt(id, 10));

export const getPostsCurrentPage = state => state.posts.currentPage;

export const getPostsSortOrder = state => state.posts.order;

export const getComments = postId => state =>
  state.comments.data.get(parseInt(postId, 10));

export const getLoadingComments = state => state.comments.loading;
