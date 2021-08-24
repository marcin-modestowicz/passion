import React from "react";
import "./Preview.css";

const Preview = ({ post, loading }) => {
  if (!post && !loading) {
    return 'Not found';
  } else if (loading) {
    return 'Loading...';
  }

  const { title, body } = post;
 
  return (
    <div className="preview">
      <article className="preview__container">
        <h3 className="preview__title">{title}</h3>
        <p className="preview__body">{body.repeat(15)}</p>
      </article>
      <h4>Comments:</h4>
    </div>
  );
}

export default Preview;
