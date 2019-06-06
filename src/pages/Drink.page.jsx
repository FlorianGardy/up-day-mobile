import React, { useState, useEffect } from "react";
import DateAndTime from "../components/DateAndTime";
import OptionSelector from "../components/OptionSelector";
import Comment from "../components/Comment";
import SummaryItem from "../components/SummaryItem";
import { volumes, drinks } from "../data";
import Navbar from "../components/Navbar";
import { connect } from "react-redux";
import moment from "moment";
import TopBar from "../components/TopBar";
import {
  updateDate,
  updateKind,
  updateMeasure,
  updateComment,
  resetEvent
} from "../pills/event/event.action";

const Drink = ({
  dispatch,
  date,
  kind,
  measure,
  context,
  comment,
  history
}) => {
  const [isReadyToRecap, setIsReadyToRecap] = useState(false);

  if (isReadyToRecap) {
    return (
      <div>
        <TopBar
          title="Boisson"
          leftButtonInfo={{
            text: "Retour",
            onClick: () => setIsReadyToRecap(false),
            isVisible: true
          }}
          rightButtonInfo={{
            text: "Terminer",
            onClick: () => {
              console.log("send to database");
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
  }

  return (
    <div>
      <TopBar
        title="Boisson"
        leftButtonInfo={{
          text: "Annuler",
          onClick: () => history.push("/history"),
          isVisible: true
        }}
        rightButtonInfo={{
          text: "Suivant",
          onClick: () => setIsReadyToRecap(true),
          isVisible: true
        }}
      />

      <DateAndTime
        date={date}
        handleChange={date => dispatch(updateDate(date))}
      />

      <h2>Type de boissons</h2>
      <OptionSelector
        options={drinks} //Creer des bouttons a l'aide d'un tableau d'objet avec le couple label -> value
        activeOption={kind} //la donnée selectioné dans le state
        onClick={drink => dispatch(updateKind(drink))} //la fonction qui enregistre l'etat au click du bouton
      />
      <h2>Volume</h2>
      <OptionSelector
        options={volumes}
        activeOption={measure}
        onClick={volume => dispatch(updateMeasure(volume))}
      />
      <h2>Commentaire</h2>
      <Comment
        commentText={comment}
        onChange={e => dispatch(updateComment(e.target.value))}
      />
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
