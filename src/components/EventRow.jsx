import React from "react";
import PropTypes from "prop-types";
import "./EventRow.scss";

const EventRow = ({ date, type, nature, volume, context, comment }) => {
  return (
    <div className="eventRow">
      <div className="time">{date}</div>
      <div className="info">
        {nature} - {type}
        <br />
        {context.length !== 0
          ? context.map((contextItem, index) => (
              <div key={index}>->{contextItem}</div>
            ))
          : "Aucun context"}
      </div>
      <div className="volume">{volume}</div>
    </div>
  );
};

EventRow.propTypes = {
  date: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  nature: PropTypes.string.isRequired,
  volume: PropTypes.string.isRequired,
  context: PropTypes.array,
  comment: PropTypes.string
};

export default EventRow;
