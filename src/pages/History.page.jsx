import React, { useState, useEffect } from "react";
import moment from "moment";
import { events } from "../data";
import EventRow from "../components/EventRow.jsx";
import Navbar from "../components/Navbar";
import HistoryDateSelection from "../components/HistoryDateSelection";
import TopBar from "../components/TopBar";

const History = () => {
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
        date={uniqueDates[dateIndex]}
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

export default History;
