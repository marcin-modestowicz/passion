import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import { getPosts, getLoadingPosts, getCurrentPage } from "../../services/posts/selectors";
import { fetchPosts } from "../../services/posts/actions";

import Posts from "./Posts";

const mapStateToProps = state => ({
  posts: getPosts(state),
  loading: getLoadingPosts(state),
  currentPage: getCurrentPage(state),
});

const mapDispatchToProps = {
  fetchPosts,
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Posts)
);
