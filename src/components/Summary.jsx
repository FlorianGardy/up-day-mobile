import React from "react";
import PropTypes from "prop-types";

const Summary = ({ label, value }) => {
  return (
    <div>
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
