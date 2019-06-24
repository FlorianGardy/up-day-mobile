import React from "react";
import PropTypes from "prop-types";
import "./Summary.scss";

const SummaryItem = ({ label, value }) => {
  /* Style des containers de recap */
  const style = {
    width: "45%",
    border: "1px pink solid",
    margin: "5px"
  };
  return (
    <div className="summaryItems">
      <h2>{label}</h2>
      {value.length !== 0 ? value.map((v, i) => <p key={i}>{v}</p>) : "Aucun"}
    </div>
  );
};

SummaryItem.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.array.isRequired
};

export default SummaryItem;
