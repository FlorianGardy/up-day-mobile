import React from "react";
import PropTypes from "prop-types";

import "./Comment.scss";

const Comment = ({ onChange, commentText, title }) => {
  return (
    <div className="comment">
      {/* <h2>{title}</h2> */}
      <textarea
        className="text"
        placeholder="Commentaires..."
        onChange={onChange}
        value={commentText}
        cols="25"
        rows="4"
      />
    </div>
  );
};

Comment.propTypes = {
  title: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  commentText: PropTypes.string
};

export default Comment;
