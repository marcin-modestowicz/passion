import React from "react";
import { Switch, Route } from "react-router-dom";

import PostList from "./PostList";
import Preview from "./Preview";

class Posts extends React.Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  render() {
    const { loading, posts } = this.props;

    return (
      <Switch>
        <Route
          exact
          path="/posts"
          render={() => <PostList {...{ loading, posts }} />}
        />
        <Route path="/posts/:id" component={Preview} />
      </Switch>
    );
  }
}

export default Posts;
