import React from "react";
import PropTypes from "prop-types";

const Comment = ({ onChange, commentText, title }) => {
  const style = { textAlign: "center", resize: "none" };
  return (
    <div>
      <h2>{title}</h2>
      <textarea
        style={style}
        placeholder="Laissez un commentaire"
        onChange={onChange}
        value={commentText}
        cols="30"
        rows="5"
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
