import { connect } from "react-redux";

import Preview from "./Preview";
import { getComments, getLoadingPosts, getPostById } from "../../../services/posts/selectors";
import { fetchComments } from "../../../services/posts/actions";

const mapStateToProps = (
  state,
  {
    match: {
      params: {
        id
      }
    },
  }
) => ({
  post: getPostById(id)(state),
  loadingPost: getLoadingPosts(state),
  comments: getComments(id)(state)
});

const mapDispatchToProps = {
  onLoadComments: fetchComments,
};

export default connect(mapStateToProps, mapDispatchToProps)(Preview);
