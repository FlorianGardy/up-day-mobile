import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { shiftDate } from "../pills/history/history.action";
import moment from "moment";
import "moment/locale/fr";

const HistoryDateSelector = ({ dispatch, selectedHistoryDate }) => {
  const style = { margin: "20px" };
  return (
    <div style={style}>
      <input
        style={style}
        type="button"
        onClick={() => dispatch(shiftDate("left"))}
        value="&larr;"
      />
      {moment(selectedHistoryDate).format("dddd DD MMMM")}
      <input
        style={style}
        type="button"
        onClick={() => dispatch(shiftDate("right"))}
        value="&rarr;"
      />
    </div>
  );
};

HistoryDateSelector.propTypes = {
  selectedHistoryDate: PropTypes.instanceOf(Date).isRequired
};

const mapStateToProps = state => ({
  selectedHistoryDate: state.HistoryReducer.selectedHistoryDate
});

export default connect(mapStateToProps)(HistoryDateSelector);
