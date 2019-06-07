import React from "react";
import DateAndTime from "../components/DateAndTime";
import OptionSelector from "../components/OptionSelector";
import Comment from "../components/Comment";
import { volumes, urinations } from "../data";
import Navbar from "../components/Navbar";
import { connect } from "react-redux";
import TopBar from "../components/TopBar";
import {
  updateDate,
  updateKind,
  updateMeasure,
  updateComment
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
  return (
    <div>
      <TopBar
        title="Miction"
        leftButtonInfo={{
          text: "Annuler",
          onClick: () => history.push("/history"),
          isVisible: true
        }}
        rightButtonInfo={{
          text: "Suivant",
          onClick: () => history.push("/events/summary"),
          isVisible: kind && measure ? true : false
        }}
      />
      <DateAndTime
        date={date}
        handleChange={date => dispatch(updateDate(date))}
      />
      <h2>Type d'envie</h2>
      <OptionSelector
        options={urinations} //Creer des bouttons a l'aide d'un tableau d'objet avec le couple label -> value
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
