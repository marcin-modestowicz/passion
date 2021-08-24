import React from "react";
import "./Preview.css";

const Comment = ({ body, author, email }) => (
  <article className="comment">
    <h4 className="comment__author">{author} ({email})</h4>
    <p className="comment__body">{body.repeat(3)}</p>
  </article>
);

export default Comment;
