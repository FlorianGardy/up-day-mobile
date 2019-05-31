import React, { useState } from "react";
import DateAndTime from "../components/DateAndTime";
// import TypeOfDrink from '../components/TypeOfDrink';
// import VolumeOfDrink from '../components/VolumeOfDrink';
import OptionSelector from "../components/OptionSelector";
import Style from "./Drink.module.css";

const Drink = () => {
  const [startDate, setStartDate] = useState(new Date());
  const handleChangeDate = date => {
    setStartDate(date);
  };
  /* Related to drinks */
  const [drink, setDrink] = useState("eau");
  const setDrinkValue = drink => {
    setDrink(drink);
  };

  const drinks = [
    {
      label: "eau",
      value: "eau"
    },
    {
      label: "the",
      value: "the"
    },
    {
      label: "alcohol",
      value: "alcohol"
    }
  ];
  /* End related to drinks */

  /* Related to volumes */
  const [volume, setVolume] = useState("medium");
  const setVolumeValue = volume => {
    setVolume(volume);
  };

  const volumes = [
    {
      label: "+",
      value: "low"
    },
    {
      label: "++",
      value: "medium"
    },
    {
      label: "+++",
      value: "High"
    }
  ];
  /* End related to volumes */

  const buttonStyle = {
    color: "blue"
  };

  const selectedButtonStyle = {
    color: "red"
  };

  return (
    <div>
      <div className={Style.dateSection}>
        <DateAndTime date={startDate} handleChange={handleChangeDate} />
      </div>
      {/* <h2>Types de boissons</h2>
      <TypeOfDrink onClick={setDrinkValue} />
      <h2>Volume</h2>
      <VolumeOfDrink onClick={setVolumeValue} /> */}
      <OptionSelector
        options={drinks} //les données
        activeChoice={drink} //la donnée dans le state
        clickHandler={setDrinkValue} //la focntion qui set la donnée
        styleWhenSelected={selectedButtonStyle} //le style que doit avoir le button quand il est selectionné
        style={buttonStyle} //le style de base
      />

      <OptionSelector
        options={volumes}
        activeChoice={volume}
        clickHandler={setVolumeValue}
        styleWhenSelected={selectedButtonStyle}
        style={buttonStyle}
      />
    </div>
  );
};

export default Drink;
