import React, { useState, useEffect } from "react";
import moment from "moment";
import { events } from "../data";
import EventRow from "../components/EventRow.jsx";
import Navbar from "../components/Navbar";
import HistoryDateSelection from "../components/HistoryDateSelection";
import TopBar from "../components/TopBar";
import { connect } from "react-redux";

const History = ({ user }) => {
  const [dateIndex, setDateIndex] = useState(0);
  const [uniqueDates, setUniqueDates] = useState([
    moment().format("YYYY-MM-DD")
  ]);

  useEffect(() => {
    setUniqueDates(
      [
        ...new Set(events.map(event => moment(event.date).format("YYYY-MM-DD")))
      ].sort((a, b) => a - b)
    );
  }, []);

  return (
    <div>
      <TopBar
        title="Historique"
        leftButtonInfo={{ isVisible: false }}
        rightButtonInfo={{ isVisible: false }}
      />
      <HistoryDateSelection
        date={moment(uniqueDates[dateIndex]).format("dddd DD MMMM")}
        rightButtonOnClick={() => dateIndex > 0 && setDateIndex(dateIndex - 1)}
        leftButtonOnClick={() =>
          dateIndex < uniqueDates.length - 1 && setDateIndex(dateIndex + 1)
        }
      />
      {events
        .filter(
          event =>
            moment(event.date).format("YYYY-MM-DD") === uniqueDates[dateIndex]
        )
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
        ))}
      <Navbar />
    </div>
  );
};

// Gets the userID from the global state (Redux) and passes it to the component as prop
const mapStateToProps = state => ({
  user: state.LoginReducer.user
});

export default connect(mapStateToProps)(History);
