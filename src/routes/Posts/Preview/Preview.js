import React from "react";

import Comment from "./Comment";
import "./Preview.css";

const Preview = ({ post, loadingPost, onLoadComments, comments, loadingComments }) => {
  if (!post && !loadingPost) {
    return 'Not found';
  } else if (loadingPost) {
    return 'Loading...';
  }

  const { title, body } = post;

  return (
    <div className="preview">
      <article className="preview__container">
        <h3 className="preview__title">{title}</h3>
        <p className="preview__body">{body.repeat(15)}</p>
      </article>
      <section>
        <header className="preview__comments">
          <h4>Comments:</h4>
          <button className="preview__button" disabled={loadingComments || comments} onClick={() => onLoadComments(post.id)}>Load comments</button>
        </header>
        {!comments && loadingComments && 'Loading comments...'}
        {comments && comments.map(({id, email, name, body}) => (
          <Comment key={id} body={body} author={name} email={email} />
        ))}
      </section>
    </div>
  );
}

export default Preview;
