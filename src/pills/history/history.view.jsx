import React from "react";
import EventRow from "../../components/EventRow";
import moment from "moment";
import "moment/locale/fr";
import HistoryFirstCo from "../../components/HistoryFirstCo";

const HistoryView = ({ history }) => {
  return (
    <>
      {history.length === 0 ? (
        <HistoryFirstCo />
      ) : (
        history
          .reverse()
          .map(event => (
            <EventRow
              key={event.id}
              date={moment(event.date).format("HH:mm")}
              type={event.type}
              nature={event.nature}
              volume={event.volume}
              context={event.context}
              comment={event.comment}
            />
          ))
      )}
    </>
  );
};

export default HistoryView;
