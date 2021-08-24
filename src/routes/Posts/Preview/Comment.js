import React from "react";
import "./Preview.css";

const Comment = ({ body, author }) => (
  <div className="comment">
    <p className="comment__author">{author}</p>
    <p className="comment__body">{body.repeat(3)}</p>
  </div>
);

export default Comment;
