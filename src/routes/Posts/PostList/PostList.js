import React from "react";

import Post from "./Post";
import List from "../../../components/List";

const PostList = ({ posts, loading }) => (
  <List data={posts} loading={loading} component={Post} keyName="title" />
);

export default PostList;
