import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import HistoryView from "./history.view";
import moment from "moment";
import "moment/locale/fr";
import { getHistory } from "../history/history.action";
import { userSelector } from "../login/login.selectors";
import { getSelectedHistoryDate, getHistoryList } from "./history.selector";

const HistoryContainer = ({ dispatch, selectedHistoryDate, history, user }) => {
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
    dispatch(getHistory());
  }, [user, dispatch]);

  return (
    <div className="historyContainer">
      <HistoryView history={filteredHistory} />
    </div>
  );
};

const mapStateToProps = state => ({
  selectedHistoryDate: getSelectedHistoryDate(state),
  history: getHistoryList(state),
  user: userSelector(state)
});

export default connect(mapStateToProps)(HistoryContainer);
