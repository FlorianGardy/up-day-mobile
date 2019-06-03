import React from "react";
import PropTypes from "prop-types";

const Summary = ({ label, value }) => {
  /* Style des containers de recap */
  const style = {
    width: "45%",
    border: "1px pink solid",
    margin: "5px"
  };
  return (
    <div style={style}>
      <h2>{label}</h2>
      <p>{value}</p>
    </div>
  );
};

Summary.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired
};

export default Summary;
