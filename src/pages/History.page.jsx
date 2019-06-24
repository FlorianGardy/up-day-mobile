import React from "react";
import Navbar from "../components/Navbar";
import HistoryDateSelector from "../components/HistoryDateSelector";
import TopBar from "../components/TopBar";
import HistoryContainer from "../pills/history/history.container";

import "./layout.scss";

const History = () => {
  return (
    <>
      <div className="page">
        <TopBar
          title="Historique"
          leftButtonInfo={{ isVisible: false }}
          rightButtonInfo={{ isVisible: false }}
        />
        <section className="pageBodyHistory">
          <HistoryDateSelector />
          <HistoryContainer />
        </section>
      </div>
      <Navbar />
    </>
  );
};

export default History;
