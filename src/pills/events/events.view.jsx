import React from "react";
import EventRow from "../../components/EventRow";
import moment from "moment";
import "moment/locale/fr";
import Swipeout from "rc-swipeout";
import "rc-swipeout/assets/index.css";

import HistoryFirstCo from "../../components/HistoryFirstCo";
import { deleteEvent } from "../../API/deleteEvent";

const DELETE = "Supprimer";
const btnSwipeoutStyle = {
  margin: "2px",
  backgroundColor: "#da4e0e",
  color: "white"
};
const rowSwipeoutStyle = {
  marginTop: "5px"
};

const EventsView = ({ events, getEvents }) => {
  return (
    <>
      {events.length === 0 ? (
        <HistoryFirstCo />
      ) : (
        events.map(event => (
          <Swipeout
            style={rowSwipeoutStyle}
            key={event.id}
            autoClose
            right={[
              {
                text: DELETE,
                onPress: async () => {
                  await deleteEvent(event.id);
                  await getEvents();
                },
                style: btnSwipeoutStyle
              }
            ]}
          >
            <EventRow
              date={moment(event.date).format("HH:mm")}
              type={event.type}
              nature={event.nature}
              volume={event.volume}
              contexts={event.contexts}
              comment={event.comment}
            />
          </Swipeout>
        ))
      )}
    </>
  );
};

export default EventsView;
