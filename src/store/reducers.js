import { combineReducers } from "redux";
import { posts, comments } from "../services/posts/reducer";

export default combineReducers({
  posts,
  comments,
});
