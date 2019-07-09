import React from "react";
import SummaryItem from "../components/SummaryItem";
import SummaryContextItem from "../components/SummaryContextItem";
import Navbar from "../components/Navbar";
import { connect } from "react-redux";
import moment from "moment";
import TopBar from "../components/TopBar";
import { sendDatasToDatabase } from "../API/sendDatasToDatabase";

import "./Summary.page.scss";
import "./layout.scss";
import {
  getEventNature,
  getEventKind,
  getEventDate,
  getEventMeasure,
  getEventContext,
  getEventComment
} from "../pills/event/event.selector";
import { getUuid } from "../pills/login/login.selectors";

const Drink = ({
  dispatch,
  date,
  nature,
  kind,
  measure,
  context,
  comment,
  history,
  userUuid
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
            await sendDatasToDatabase(
              date,
              nature,
              kind,
              measure,
              context,
              comment,
              userUuid
            );
            history.push("/history");
          },
          isVisible: true,
          isActive: true
        }}
      />
      <section className="pageBodySummary">
        <SummaryItem
          label="Date"
          value={moment(date).format("dddd DD MMMM à HH:mm")}
        />
        <SummaryItem label="Type" value={kind} />
        <SummaryContextItem label="Contexte" value={context} />
        <SummaryItem label="Volume" value={measure} />
        <SummaryItem label="Commentaire" value={comment} />
      </section>
      <Navbar />
    </div>
  );
};

const mapStateToProps = state => ({
  date: getEventDate(state),
  kind: getEventKind(state),
  nature: getEventNature(state),
  measure: getEventMeasure(state),
  context: getEventContext(state),
  comment: getEventComment(state),
  userUuid: getUuid(state)
});

export default connect(mapStateToProps)(Drink);
