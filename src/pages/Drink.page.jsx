import React, { useState } from "react";
import DateAndTime from "../components/DateAndTime";
import OptionSelector from "../components/OptionSelector";
import Comment from "../components/Comment";
import SummaryItem from "../components/SummaryItem";
import { volumes, drinks } from "../data";
import Navbar from "../components/Navbar";
import TopBar from "../components/TopBar";

const Drink = ({ history }) => {
  const [isReadyToRecap, setIsReadyToRecap] = useState(false);

  const [drink, setDrink] = useState("eau"); //déclaration du state
  const [volume, setVolume] = useState("medium");
  const [comment, setComment] = useState("");
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

  if (isReadyToRecap) {
    return (
      <div>
        <TopBar
          title="Boisson"
          leftButtonInfo={{
            text: "Retour",
            onClick: () => setIsReadyToRecap(false),
            isVisible: true
          }}
          rightButtonInfo={{
            text: "Terminer",
            onClick: () => console.log("send to database"), // Function to send data to api
            isVisible: true
          }}
        />
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-around"
          }}
        >
          <SummaryItem label="date" value={dateToString(date)} />
          <SummaryItem label="Type" value={drink} />
          <SummaryItem label="Contexte" value="Aucun" />
          <SummaryItem label="Volume" value={volume} />
          <SummaryItem label="Commentaire" value={comment} />
        </div>
        <Navbar />
      </div>
    );
  }

  return (
    <div>
      <TopBar
        title="Boisson"
        leftButtonInfo={{
          text: "Annuler",
          onClick: () => history.push("/history"),
          isVisible: true
        }}
        rightButtonInfo={{
          text: "Suivant",
          onClick: () => setIsReadyToRecap(true),
          isVisible: true
        }}
      />

      <DateAndTime date={date} handleChange={date => setDate(date)} />

      <h2>Type de boissons</h2>
      <OptionSelector
        options={drinks} //Creer des bouttons a l'aide d'un tableau d'objet avec le couple label -> value
        activeOption={drink} //la donnée selectioné dans le state
        onClick={drink => setDrink(drink)} //la fonction qui enregistre l'etat au click du bouton
      />

      <h2>Volume</h2>
      <OptionSelector
        options={volumes}
        activeOption={volume}
        onClick={volume => setVolume(volume)}
      />

      <h2>Commentaire</h2>
      <Comment
        commentText={comment}
        onChange={e => setComment(e.target.value)}
      />

      <Navbar />
    </div>
  );
};

export default Drink;
