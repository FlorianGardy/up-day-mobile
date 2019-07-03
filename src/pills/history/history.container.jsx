import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import HistoryView from "./history.view";
import moment from "moment";
import "moment/locale/fr";
import { getHistory } from "../history/history.action";
import { userSelector } from "../login/login.selectors";

const HistoryContainer = ({
  getHistoryDispatch,
  selectedHistoryDate,
  history,
  user
}) => {
  const [filteredHistory, setFilteredHistory] = useState([]);
  useEffect(() => {
    const newFilteredHistory = history.filter(event => {
      const eventMoment = moment(event.date).format("YYYY MM DD");
      const selectedHistoMoment = moment(selectedHistoryDate).format(
        "YYYY MM DD"
      );

      return eventMoment === selectedHistoMoment;
    });

    setFilteredHistory(newFilteredHistory);
  }, [history, selectedHistoryDate]);

  useEffect(() => {
    getHistoryDispatch();
  }, [user, getHistoryDispatch]);

  return (
    <div className="historyContainer">
      <HistoryView
        history={filteredHistory}
        getHistoryDispatch={getHistoryDispatch}
      />
    </div>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    getHistoryDispatch: () => dispatch(getHistory())
  };
};

const mapStateToProps = state => ({
  selectedHistoryDate: state.HistoryReducer.selectedHistoryDate,
  history: state.HistoryReducer.history,
  user: userSelector(state)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HistoryContainer);
