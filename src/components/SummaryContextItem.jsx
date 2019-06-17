import React from "react";
import PropTypes from "prop-types";

const SummaryItem = ({ label, value }) => {
  /* Style des containers de recap */
  const style = {
    width: "45%",
    border: "1px pink solid",
    margin: "5px"
  };
  return (
    <div style={style}>
      <h2>{label}</h2>
      {value.map(v => (
        <p>v</p>
      ))}
    </div>
  );
};

SummaryItem.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired
};

export default SummaryItem;
