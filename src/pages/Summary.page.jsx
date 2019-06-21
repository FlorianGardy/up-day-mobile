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
  kind,
  measure,
  context,
  comment,
  history,
  userId
}) => {
  return (
    <div className="page">
      {/* redirect of kind and measure are not set */}
      {!kind && !measure && history.push("/history")}

      <TopBar
        title="Récap"
        leftButtonInfo={{
          text: "Retour",
          onClick: () => history.goBack(),
          isVisible: true
        }}
        rightButtonInfo={{
          text: "Terminer",
          onClick: async () => {
            await sendDatasToDatabase(
              date,
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
      <section className="pageBody">
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-around"
          }}
        >
          <SummaryItem
            label="date"
            value={moment(date).format("dddd DD MMMM à HH:mm")}
          />
          <SummaryItem label="Type" value={kind} />
          <SummaryContextItem label="Contexte" value={context} />
          <SummaryItem label="Volume" value={measure} />
          <SummaryItem label="Commentaire" value={comment} />
        </div>
      </section>
      <Navbar />
    </div>
  );
};

const mapDispatchToProps = state => ({
  // Je fais passer toutes les données dans le reducer de l'event en props de la page.
  date: state.EventReducer.date,
  kind: state.EventReducer.kind,
  measure: state.EventReducer.measure,
  context: state.EventReducer.context,
  comment: state.EventReducer.comment,
  userId: state.LoginReducer.user
});

export default connect(mapDispatchToProps)(Drink);
