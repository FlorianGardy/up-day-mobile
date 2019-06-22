import React from "react";
import DateAndTime from "../components/DateAndTime";
import OptionSelector from "../components/OptionSelector";
import Comment from "../components/Comment";
import { volumes, drinks } from "../data";
import Navbar from "../components/Navbar";
import { connect } from "react-redux";
import TopBar from "../components/TopBar";
import {
  updateDate,
  updateKind,
  updateMeasure,
  updateComment,
  updateNature
} from "../pills/event/event.action";

import "./layout.scss";

const Drink = ({
  updateDate,
  updateKind,
  updateContext,
  updateVolume,
  updateComment,
  date,
  kind,
  measure,
  context,
  comment,
  history
}) => {
  return (
    <>
      <div className="page">
        <TopBar
          title="Boisson"
          leftButtonInfo={{
            // text: "Annuler",
            onClick: () => history.push("/history"),
            isVisible: true
          }}
          rightButtonInfo={{
            // text: "Suivant",
            onClick: () => history.push("/events/summary"),
            isVisible: true,
            isActive: kind && measure ? true : false
          }}
        />
        <section className="pageBody">
          <DateAndTime date={date} handleChange={updateDate} />
          <div className="options">
            <OptionSelector
              title="Type de boisson"
              options={drinks}
              activeOption={kind}
              onClick={updateKind}
            />
            <OptionSelector
              title="Volume"
              options={volumes}
              activeOption={measure}
              onClick={updateVolume}
            />
            <Comment
              title="Commentaire"
              commentText={comment}
              onChange={updateComment}
            />
          </div>
        </section>
      </div>
      <Navbar />
    </>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    updateDate: date => dispatch(updateDate(date)),
    updateKind: kind => {
      dispatch(updateKind(kind));
      dispatch(updateNature("Boisson"));
    },
    updateVolume: volume => dispatch(updateMeasure(volume)),
    updateComment: e => dispatch(updateComment(e.target.value))
  };
};

const mapStateToProps = state => ({
  date: state.EventReducer.date,
  kind: state.EventReducer.kind,
  measure: state.EventReducer.measure,
  context: state.EventReducer.context,
  comment: state.EventReducer.comment
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Drink);
