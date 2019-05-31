import React, { useState } from "react";
import { events } from "../data";
import EventRow from "../components/EventRow.jsx";
import Navbar from "../components/Navbar";

const History = () => {
  //carousselle date + selection date
  const [selectedDate, setSelectedDate] = useState(new Date());
  /* state date selectioné */
  return (
    <div>
      {/* replace with topbar */}
      <h1>Top Bar</h1>
      {/* replace with component date */}
      <h2>-- 31/06/20 --</h2>
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
