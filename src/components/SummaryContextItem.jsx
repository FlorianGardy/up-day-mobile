import React from "react";
import PropTypes from "prop-types";
import "./Summary.scss";

const SummaryContextItem = ({ label, value }) => {
  return (
    <div className="summaryItems">
      <h2>{label}</h2>
      <ul>
        {value.length !== 0
          ? value.map((v, i) => (
              <li key={i}>
                {v}
                <br />
              </li>
            ))
          : "Aucun"}
      </ul>
    </div>
  );
};

SummaryContextItem.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.array.isRequired
};

export default SummaryContextItem;
