import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import { getPosts, getLoading } from "../../services/posts/selectors";
import { fetchPosts } from "../../services/posts/actions";

import Posts from "./Posts";

const mapStateToProps = state => ({
  posts: getPosts(state),
  loading: getLoading(state)
});

const mapDispatchToProps = {
  fetchPosts
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Posts)
);
