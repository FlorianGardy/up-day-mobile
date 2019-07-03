import React from "react";
import EventRow from "../../components/EventRow";
import moment from "moment";
import "moment/locale/fr";
import HistoryFirstCo from "../../components/HistoryFirstCo";
import Swipeout from "rc-swipeout";
import "rc-swipeout/assets/index.css";
import { deleteEventInDatabase } from "../../API/deleteEventInDatabase";

const HistoryView = ({ history, getHistoryDispatch }) => {
  return (
    <>
      {history.length === 0 ? (
        <HistoryFirstCo />
      ) : (
        history.reverse().map(event => (
          <Swipeout
            key={event.id}
            autoClose
            right={[
              {
                text: "Supprimer",
                onPress: async () => {
                  await deleteEventInDatabase(event.id);
                  await getHistoryDispatch();
                  console.log("L'event a été supprimé et histo rafraichi");
                },
                style: { backgroundColor: "red", color: "white" }
              }
            ]}
          >
            <EventRow
              // key={event.id}
              date={moment(event.date).format("HH:mm")}
              type={event.type}
              nature={event.nature}
              volume={event.volume}
              context={event.context}
              comment={event.comment}
            />
          </Swipeout>
        ))
      )}
    </>
  );
};

export default HistoryView;
