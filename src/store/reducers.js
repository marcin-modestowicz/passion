import { combineReducers } from "redux";
import postReducer from "../services/posts/reducer";

export default combineReducers({
  posts: postReducer
});
