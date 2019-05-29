import React, { useState } from "react";
import DateAndTime from "../components/DateAndTime";
import TypeOfDrink from "../components/TypeOfDrink";
import VolumeOfDrink from "../components/VolumeOfDrink";

const Drink = () => {
  const [startDate, setStartDate] = useState(new Date());
  const handleChangeDate = date => {
    setStartDate(date);
  };

  const [drink, setDrink] = useState("eau");
  const handleClickDrink = drink => {
    setDrink(drink);
  };

  const [volume, setVolume] = useState("medium");
  const handleClickVolume = volume => {
    setVolume(volume);
  };

  return (
    <div>
      <h2>Drink</h2>
      <DateAndTime date={startDate} handleChange={handleChangeDate} />
      <h2>Types de boissons</h2>
      <TypeOfDrink onClick={handleClickDrink} />
      <h2>Volume</h2>
      <VolumeOfDrink onClick={handleClickVolume} />
    </div>
  );
};

export default Drink;
