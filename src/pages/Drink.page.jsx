import React, { useState } from "react";
import DateAndTime from "../components/DateAndTime";
import OptionSelector from "../components/OptionSelector";
import Comment from "../components/Comment";
import Summary from "../components/Summary";

const Drink = () => {
  const [isReadyToRecap, setIsReadyToRecap] = useState(false);

  const [date, setDate] = useState(new Date());

  const dateToString = date => {
    // Passage de la date en String
    let options = {
      weekday: "long",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric"
    };
    return date.toLocaleDateString("fr-FR", options);
  };

  /* Related to drinks */
  const [drink, setDrink] = useState("eau"); //déclaration du state
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

  /* Related to comment */
  const [comment, setComment] = useState("");
  /* End related to comment */

  /* Style du bouton de base */
  const buttonStyle = {
    color: "blue",
    margin: "2px",
    width: "80px"
  };

  /* Style du bouton sélectioné */
  const selectedButtonStyle = {
    color: "red"
  };

  /* Style des containers de recap */
  const summary = {
    width: "48%",
    border: "1px pink solid"
  };

  if (isReadyToRecap) {
    return (
      <div>
        <button onClick={() => setIsReadyToRecap(false)}>drinks</button>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            border: "1px black solid",
            justifyContent: "space-around"
          }}
        >
          <div style={summary}>
            <Summary label="date" value={dateToString(date)} />
          </div>
          <div style={summary}>
            <Summary label="Type" value={drink} />
          </div>
          <div style={summary}>
            <Summary label="Contexte" value="Aucun" />
          </div>
          <div style={summary}>
            <Summary label="Volume" value={volume} />
          </div>
          <div style={{ ...summary, width: "98%" }}>
            <Summary label="Commentaire" value={comment} />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>
      <button onClick={() => setIsReadyToRecap(true)}>recap</button>
      <div style={{ background: "pink", width: "100%" }}>
        <DateAndTime date={date} handleChange={date => setDate(date)} />
      </div>

      <h2>Type de boissons</h2>
      <OptionSelector
        options={drinks} //Creer des bouttons a l'aide d'un tableau d'objet avec le couple label -> value
        activeOption={drink} //la donnée selectioné dans le state
        onClick={drink => setDrink(drink)} //la fonction qui enregistre l'etat au click du bouton
        style={buttonStyle} //le style de base des boutons
        styleWhenSelected={selectedButtonStyle} //le style que doit avoir le button qui est selectionné, appliquer les differences uniquement
      />

      <h2>Volume</h2>
      <OptionSelector
        options={volumes}
        activeOption={volume}
        onClick={volume => setVolume(volume)}
        style={buttonStyle}
        styleWhenSelected={selectedButtonStyle}
      />

      <h2>Commentaire</h2>
      <Comment
        commentText={comment}
        onChange={e => setComment(e.target.value)}
      />
    </div>
  );
};

export default Drink;
