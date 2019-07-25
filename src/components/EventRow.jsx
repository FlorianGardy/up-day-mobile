import React from "react";
import PropTypes from "prop-types";

import toilet from "../assets/toilet-paper.png";
import gym from "../assets/gym.png";
import drop from "../assets/drop.png";
import coffee from "../assets/coffee-cup.png";

const iconStyle = {
  width: "20px",
  height: "20px"
};

const createIcon = img => <img style={iconStyle} src={img} alt="icone" />;

const switchIcon = label => {
  switch (label) {
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

const EventRow = ({ date, type, nature, volume, contexts, comment }) => {
  return (
    <div className="eventRow">
      <div className="eventTime">{date}</div>
      <div className="natureIcon">{switchIcon(nature)}</div>
      <div className="eventNature">{nature}</div>
      <div className="eventVolume">{volume}</div>
      <div className="rowDetails">
        <div className="eventType">{type}</div>
        <ul className="eventContext">
          {contexts
            ? contexts.map((contextItem, index) => (
                <li key={index}>{contextItem}</li>
              ))
            : ""}
        </ul>
      </div>
    </div>
  );
};

EventRow.propTypes = {
  date: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  nature: PropTypes.string.isRequired,
  volume: PropTypes.string.isRequired,
  contexts: PropTypes.arrayOf(PropTypes.string),
  comment: PropTypes.string
};

export default EventRow;
