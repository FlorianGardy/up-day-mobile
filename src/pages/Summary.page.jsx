import React from "react";
import SummaryItem from "../components/SummaryItem";
import Navbar from "../components/Navbar";
import { connect } from "react-redux";
import moment from "moment";
import TopBar from "../components/TopBar";
import Axios from "axios";

const Drink = ({
  dispatch,
  date,
  kind,
  measure,
  context,
  comment,
  history
}) => {
  return (
    <div>
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
            await Axios.post("http://localhost:3030/events", {
              date,
              type: kind,
              nature: "coco",
              volume: measure,
              context,
              comment,
              userId: 1
            });
            history.push("/history");
          }, // Function to send data to api
          isVisible: true
        }}
      />
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
        <SummaryItem label="Contexte" value={context} />
        <SummaryItem label="Volume" value={measure} />
        <SummaryItem label="Commentaire" value={comment} />
      </div>
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
  comment: state.EventReducer.comment
});

export default connect(mapDispatchToProps)(Drink);
