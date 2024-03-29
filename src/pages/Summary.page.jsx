import React from "react";
import { connect } from "react-redux";
import moment from "moment";

import SummaryItem from "../components/SummaryItem";
import SummaryDateItem from "../components/SummaryDateItem";
import SummaryTypeItem from "../components/SummaryTypeItem";
import SummaryContextItem from "../components/SummaryContextItem";
import Navbar from "../components/Navbar";
import TopBar from "../components/TopBar";
import { createEvent } from "../API/createEvent";
import "./Summary.page.scss";
import "./layout.scss";
import {
  getEventNatureSelector,
  getEventKindSelector,
  getEventDateSelector,
  getEventMeasureSelector,
  getEventContextsSelector,
  getEventCommentSelector
} from "../pills/event/event.selector";

const Drink = ({
  dispatch,
  date,
  nature,
  kind,
  measure,
  contexts,
  comment,
  history
}) => {
  return (
    <div className="page">
      {/* If kind or measure are not define, redirect to history page */}
      {!kind && !measure && history.push("/history")}

      <TopBar
        title="Résumé"
        leftButtonInfo={{
          onClick: () => history.goBack(),
          isVisible: true
        }}
        rightButtonInfo={{
          onClick: async () => {
            await createEvent(date, nature, kind, measure, contexts, comment);
            window.location.href = "/history"; //instead of history.push -> fix an infinite loop
          },
          isVisible: true,
          isActive: true
        }}
      />
      <section className="pageBodySummary">
        <SummaryDateItem
          label="Date"
          date={moment(date).format("dddd DD MMMM")}
          time={moment(date).format("HH:mm")}
        />
        <SummaryTypeItem label="Type" nature={nature} value={kind} />
        <SummaryContextItem label="Contexte" values={contexts} />
        <SummaryItem label="Volume" value={measure} bold />
        <SummaryItem label="Commentaires" value={comment} />
      </section>
      <Navbar />
    </div>
  );
};

const mapStateToProps = state => ({
  date: getEventDateSelector(state),
  kind: getEventKindSelector(state),
  nature: getEventNatureSelector(state),
  measure: getEventMeasureSelector(state),
  contexts: getEventContextsSelector(state),
  comment: getEventCommentSelector(state)
});

export default connect(mapStateToProps)(Drink);
