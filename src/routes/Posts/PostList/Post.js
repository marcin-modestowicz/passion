import React from "react";
import { Link } from "react-router-dom";

const Post = ({ title, body, author, avatar, id }) => (
  <div className="post">
    <h3 className="post__title">
      <Link to={`/posts/${id}`}>{title}</Link>
    </h3>
    <div className="post__author-container">
      <img src={avatar} className="post__avatar" alt="author profile picture" />
      <span className="post__author">{author}</span>
    </div>
    <p className="post__body">{body.slice(0, 70)}...</p>
  </div>
);

Post.defaultProps = {
  author: "Author",
  avatar:
    "https://images.unsplash.com/photo-1452269826925-82be65baa057?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=500&h=500&fit=crop&ixid=eyJhcHBfaWQiOjF9",
  title: "qui est esse",
  body:
    "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
};

export default Post;
