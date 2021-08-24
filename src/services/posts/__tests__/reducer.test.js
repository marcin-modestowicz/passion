import { SORT_ORDER } from "../../../constants/posts";
import { comments, commentsInitialState, posts, postsInitialState } from "../reducer";

describe('reducer', () => {
  describe('posts', () => {
    let postData;

    beforeAll(() => {
      postData = [{id: 1, title: 'test'}];
    });

    it('should initiate with state', () => {
      expect(posts(undefined,{})).toEqual(postsInitialState);
    });

    it('should update state for FETCH_POSTS action properly', () => {
      const action = {
        type: 'FETCH_POSTS',
        payload: { page: 2 }
      };
      const expectedState = {
        ...postsInitialState,
        loading: true,
        currentPage: 2,
      }
      expect(posts(postsInitialState, action)).toEqual(expectedState);
    });

    it('should update state for FETCH_POSTS_SUCCESS action properly', () => {
      const initialState = {
        ...postsInitialState,
        loading: true,
        data: postData,
      };
      const newPosts = [{id: 2, title: 'test 2'}]
      const action = {
        type: 'FETCH_POSTS_SUCCESS',
        payload: { posts: newPosts }
      };
      const expectedState = {
        ...postsInitialState,
        loading: false,
        data: [...postData, ...newPosts],
      }
      expect(posts(initialState, action)).toEqual(expectedState);
    });

    it('should update state for SORT_POSTS action properly', () => {
      const initialState = {
        ...postsInitialState,
        loading: false,
        currentPage: 2,
        order: SORT_ORDER.BY_ID,
        data: postData,
      };
      const action = {
        type: 'SORT_POSTS',
        payload: { order: SORT_ORDER.ALPHABETICALLY }
      };
      const expectedState = {
        ...postsInitialState,
        loading: true,
        currentPage: 1,
        order: SORT_ORDER.ALPHABETICALLY,
        data: [],
      }
      expect(posts(postsInitialState, action)).toEqual(expectedState);
    });
  });

  describe('comments', () => {
    it('should initiate with state', () => {
      expect(comments(undefined,{})).toEqual(commentsInitialState);
    });

    it('should update state for FETCH_COMMENTS action properly', () => {
      const action = {
        type: 'FETCH_COMMENTS',
        payload: { page: 2 }
      };
      const expectedState = {
        ...commentsInitialState,
        loading: true,
      }
      expect(comments(commentsInitialState, action)).toEqual(expectedState);
    });

    it('should update state for FETCH_COMMENTS_SUCCESS action properly', () => {
      const initialState = {
        ...commentsInitialState,
        loading: true,
        data: new Map([[1, [{postId: 1, id: 2, body: 'test comment'}]]]),
      };
      const newComments = [{postId: 2, id: 3, body: 'test comment 2'}]
      const action = {
        type: 'FETCH_COMMENTS_SUCCESS',
        payload: { comments: newComments, postId: 2 }
      };
      const expectedState = {
        ...initialState,
        loading: false,
        data: new Map([[1, [{postId: 1, id: 2, body: 'test comment'}]], [2, newComments ]]),
      }
      expect(comments(initialState, action)).toEqual(expectedState);
    });
  });
});
