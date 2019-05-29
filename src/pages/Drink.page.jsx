import React, { useState } from "react";
import DateAndTime from "../components/DateAndTime";

function Drink() {
  const [startDate, setStartDate] = useState(new Date());
  const handleChange = date => {
    setStartDate(date);
  };
  return (
    <div>
      <h2>Drink</h2>
      <DateAndTime date={startDate} handleChange={handleChange} />
    </div>
  );
}

export default Drink;
