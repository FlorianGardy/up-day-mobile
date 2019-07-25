import React from "react";
import PropTypes from "prop-types";

import "./Summary.scss";
import toilet from "../assets/toilet-paper.png";
import gym from "../assets/gym.png";
import drop from "../assets/drop.png";
import coffee from "../assets/coffee-cup.png";

const iconStyle = {
  width: "30px",
  height: "30px",
  padding: "3px"
};
const createIcon = img => <img style={iconStyle} src={img} alt="icon" />;

const switchNatureIcon = nature => {
  switch (nature) {
    case "Sport":
      return createIcon(gym);
    case "Boisson":
      return createIcon(coffee);
    case "Miction":
      return createIcon(drop);
    case "Défécation":
      return createIcon(toilet);
    default:
      return createIcon("https://image.flaticon.com/icons/svg/906/906794.svg");
  }
};
const SummaryTypeItem = ({ label, nature, value }) => {
  return (
    <div className="summaryItems">
      <h2>{label}</h2>
      <div className="summaryItems--type">
        <p>{switchNatureIcon(nature)}</p>
        <p>{value}</p>
      </div>
    </div>
  );
};

SummaryTypeItem.propTypes = {
  label: PropTypes.string.isRequired,
  nature: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired
};

export default SummaryTypeItem;
