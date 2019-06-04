import React from "react";
import PropTypes from "prop-types";

const Comment = ({ onChange, commentText }) => {
  const style = { textAlign: "center" };
  return (
    <div>
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
  onChange: PropTypes.func.isRequired,
  commentText: PropTypes.string.isRequired
};

export default Comment;
