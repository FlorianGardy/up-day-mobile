import React, { useState, useEffect } from "react";
import Moment from "react-moment";
import moment from "moment";
import { events } from "../data";
import EventRow from "../components/EventRow.jsx";
import Navbar from "../components/Navbar";
import HistoryDateSelection from "../components/HistoryDateSelection";
import TopBar from "../components/TopBar";

const History = () => {
  moment.suppressDeprecationWarnings = true; // supress moment warning due to date format

  const [dateIndex, setDateIndex] = useState(0);
  const [uniqueDates, setUniqueDates] = useState(moment().format("MM-DD-YYYY"));

  useEffect(() => {
    setUniqueDates(
      [
        ...new Set(events.map(event => moment(event.date).format("MM-DD-YYYY")))
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
        date={uniqueDates[dateIndex]}
        rightButtonOnClick={() =>
          dateIndex < uniqueDates.length - 1 && setDateIndex(dateIndex + 1)
        }
        leftButtonOnClick={() => dateIndex > 0 && setDateIndex(dateIndex - 1)}
      />
      {events
        .filter(
          event =>
            moment(event.date).format("MM-DD-YYYY") === uniqueDates[dateIndex]
        )
        .map(event => (
          <EventRow
            key={event.id}
            date={<Moment format="HH:mm" date={event.date} />}
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

export default History;
