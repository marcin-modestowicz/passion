import React from "react";
import { Switch, Route } from "react-router-dom";

import PostList from "./PostList";
import Preview from "./Preview";

class Posts extends React.Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  handleLoadMore = () => {
    const {
      fetchPosts,
      currentPage,
    } = this.props;

    fetchPosts(currentPage + 1);
  }

  render() {
    const { loading, posts } = this.props;

    return (
      <Switch>
        <Route
          exact
          path="/posts"
          render={() => <PostList {...{ loading, posts, onLoadMore: this.handleLoadMore }} />}
        />
        <Route path="/posts/:id" component={Preview} />
      </Switch>
    );
  }
}

export default Posts;
