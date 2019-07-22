import React from "react";
import PropTypes from "prop-types";

import "./Summary.scss";

const SummaryDateItem = ({ label, date, time }) => {
  return (
    <div className="summaryItems">
      <h2>{label}</h2>
      <div className="summaryItems--type">
        <p>{date}</p>
        <p>{time}</p>
      </div>
    </div>
  );
};

SummaryDateItem.propTypes = {
  label: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired
};

export default SummaryDateItem;
