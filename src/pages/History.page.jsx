import React, { useState } from "react";
import { events } from "../data";
import EventRow from "../components/EventRow.jsx";
import Navbar from "../components/Navbar";

const History = () => {
  //carousselle date + selection date
  const [selectedDate, setSelectedDate] = useState(new Date());
  /* state date selectioné */

  const getUniqueDates = events => {
    return [...new Set(events.map(event => event.date))];
  };

  return (
    <div>
      {/* To be replaced by "TopBar" component */}
      <h1>Top Bar</h1>
      <hr />
      {/* To be replaced by "DateSelector" component */}
      <h2>-- {getUniqueDates(events)[0]} --</h2>
      <hr />
      {events
        // .filter(event => event.date === selectedDate)
        .map(event => (
          <EventRow
            key={event.id}
            date={event.date}
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
