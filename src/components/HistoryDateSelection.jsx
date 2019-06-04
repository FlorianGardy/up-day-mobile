import React from "react";
import PropTypes from "prop-types";
import Moment from "react-moment";
import "moment/locale/fr";

const HistoryDateSelection = ({
  date,
  rightButtonOnClick,
  leftButtonOnClick
}) => {
  const style = { margin: "20px" };
  return (
    <div style={style}>
      <input
        style={style}
        type="button"
        onClick={leftButtonOnClick}
        value="&larr;"
      />
      <Moment format="dddd DD MMMM" date={date} />
      <input
        style={style}
        type="button"
        onClick={rightButtonOnClick}
        value="&rarr;"
      />
    </div>
  );
};

HistoryDateSelection.propTypes = {
  date: PropTypes.string.isRequired,
  rightButtonOnClick: PropTypes.func.isRequired,
  leftButtonOnClick: PropTypes.func.isRequired
};

export default HistoryDateSelection;
