import React from "react";
import DateAndTime from "../components/DateAndTime";
import OptionSelector from "../components/OptionSelector";
import ContextSelector from "../components/ContextSelector";
import Comment from "../components/Comment";
import { volumes, defecations, contextDefecation } from "../data";
import Navbar from "../components/Navbar";
import { connect } from "react-redux";
import TopBar from "../components/TopBar";
import {
  updateDate,
  updateNature,
  updateKind,
  updateMeasure,
  updateContext,
  updateComment
} from "../pills/event/event.action";

import "./layout.scss";

const Defecation = ({
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
    <div className="page">
      <TopBar
        title="Défécation"
        leftButtonInfo={{
          text: "Annuler",
          onClick: () => history.push("/history"),
          isVisible: true
        }}
        rightButtonInfo={{
          text: "Suivant",
          onClick: () => history.push("/events/summary"),
          isVisible: true,
          isActive: kind && measure ? true : false
        }}
      />
      <section className="pageBody">
        <DateAndTime date={date} handleChange={updateDate} />
        <OptionSelector
          title="type d'envie"
          options={defecations}
          activeOption={kind}
          onClick={updateKind}
        />
        <ContextSelector
          title="Context"
          options={contextDefecation}
          context={context}
          onChange={updateContext}
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
      </section>
      <Navbar />
    </div>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    updateDate: date => dispatch(updateDate(date)),
    updateNature: nature => dispatch(updateNature(nature)),
    updateKind: kind => {
      dispatch(updateKind(kind));
      dispatch(updateNature("Défécation"));
    },
    updateContext: (context, check) => dispatch(updateContext(context, check)),
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
)(Defecation);
