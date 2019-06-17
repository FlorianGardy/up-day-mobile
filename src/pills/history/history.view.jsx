import React from "react";
import EventRow from "../../components/EventRow";
import moment from "moment";
import "moment/locale/fr";

const HistoryView = ({ history }) => {
  return (
    <div>
      {history.map(event => (
        <EventRow
          key={event.id}
          date={moment(event.date).format("HH:mm")}
          type={event.type}
          nature={event.nature}
          volume={event.volume}
          context={event.context}
          comment={event.comment}
        />
      ))}
    </div>
  );
};

export default HistoryView;
