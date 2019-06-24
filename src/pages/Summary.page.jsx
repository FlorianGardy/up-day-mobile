import React from "react";
import SummaryItem from "../components/SummaryItem";
import SummaryContextItem from "../components/SummaryContextItem";
import Navbar from "../components/Navbar";
import { connect } from "react-redux";
import moment from "moment";
import TopBar from "../components/TopBar";
import { sendDatasToDatabase } from "../API/sendDatasToDatabase";

import "./layout.scss";

const Drink = ({
  dispatch,
  date,
  nature,
  kind,
  measure,
  context,
  comment,
  history,
  userId
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
              userId
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

const mapDispatchToProps = state => ({
  date: state.EventReducer.date,
  nature: state.EventReducer.nature,
  kind: state.EventReducer.kind,
  measure: state.EventReducer.measure,
  context: state.EventReducer.context,
  comment: state.EventReducer.comment,
  userId: state.LoginReducer.user
});

export default connect(mapDispatchToProps)(Drink);
