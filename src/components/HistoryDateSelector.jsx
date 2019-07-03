import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { shiftDate } from "../pills/history/history.action";
import moment from "moment";
import "moment/locale/fr";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretLeft, faCaretRight } from "@fortawesome/free-solid-svg-icons";

const HistoryDateSelector = ({ dispatch, selectedHistoryDate }) => {
  return (
    <div className="historyDateSelector">
      <div
        type="button"
        onClick={() => dispatch(shiftDate("left"))}
        className="btn"
      >
        <FontAwesomeIcon icon={faCaretLeft} size="2x" />
      </div>
      {moment(selectedHistoryDate).format("dddd DD MMMM")}
      <div
        type="button"
        onClick={() => dispatch(shiftDate("right"))}
        className="btn"
      >
        <FontAwesomeIcon icon={faCaretRight} size="2x" />
      </div>
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
