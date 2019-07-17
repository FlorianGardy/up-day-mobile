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
  getContext,
  updateComment
} from "../pills/event/event.action";

import "./layout.scss";
import {
  getEventDate,
  getEventKind,
  getEventMeasure,
  getEventContext,
  getEventComment
} from "../pills/event/event.selector";

const Defecation = ({
  updateDate,
  updateKind,
  getContext,
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
          title="Défécation"
          leftButtonInfo={{
            onClick: () => history.push("/history"),
            isVisible: true
          }}
          rightButtonInfo={{
            onClick: () => history.push("/events/summary"),
            isVisible: true,
            isActive: kind && measure ? true : false
          }}
        />
        <section className="pageBodyEvents">
          <DateAndTime date={date} handleChange={updateDate} />
          <div className="options">
            <OptionSelector
              title="Type d'envie"
              options={defecations}
              activeOption={kind}
              onClick={updateKind}
            />
            <ContextSelector
              title="Contexte"
              options={contextDefecation}
              context={context}
              onChange={getContext}
            />
            <OptionSelector
              title="Volume"
              options={volumes}
              activeOption={measure}
              onClick={updateVolume}
              bold
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
    updateNature: nature => dispatch(updateNature(nature)),
    updateKind: kind => {
      dispatch(updateKind(kind));
      dispatch(updateNature("Défécation"));
    },
    getContext: (context, check) => dispatch(getContext(context, check)),
    updateVolume: volume => dispatch(updateMeasure(volume)),
    updateComment: e => dispatch(updateComment(e.target.value))
  };
};

const mapStateToProps = state => ({
  date: getEventDate(state),
  kind: getEventKind(state),
  measure: getEventMeasure(state),
  context: getEventContext(state),
  comment: getEventComment(state)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Defecation);
