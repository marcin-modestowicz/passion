export const getPosts = state => state.posts.data;

export const getLoading = state => state.posts.loading;

export const getPostById = id => state =>
  state.posts.data.find(post => post.id === parseInt(id, 10));
