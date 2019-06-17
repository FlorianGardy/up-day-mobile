import React from "react";
import Navbar from "../components/Navbar";
import HistoryDateSelector from "../components/HistoryDateSelector";
import TopBar from "../components/TopBar";
import HistoryContainer from "../pills/history/history.container";

const History = () => {
  return (
    <div>
      <TopBar
        title="Historique"
        leftButtonInfo={{ isVisible: false }}
        rightButtonInfo={{ isVisible: false }}
      />
      <HistoryDateSelector />
      <HistoryContainer />
      <Navbar />
    </div>
  );
};

export default History;
