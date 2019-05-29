import React, { useState } from "react";
import DateAndTime from "../components/DateAndTime";
import TypeOfDrink from "../components/TypeOfDrink";

function Drink() {
  const [startDate, setStartDate] = useState(new Date());
  const handleChangeDate = date => {
    setStartDate(date);
  };

  const [drink, setDrink] = useState("eau");
  const handleClickDrink = drink => {
    setDrink(drink);
  };

  return (
    <div>
      <h2>Drink</h2>
      <DateAndTime date={startDate} handleChange={handleChangeDate} />
      <h2>Types de boissons</h2>
      <TypeOfDrink onClick={handleClickDrink} />
    </div>
  );
}

export default Drink;
