import React from "react";
import Navbar from "../components/Navbar";
import TopBar from "../components/TopBar";

import "./layout.scss";

function Infos() {
  // Component style
  const style = {
    main: {
      margin: "20px"
    },
    ulist: {
      textAlign: "left",
      padding: "10px"
    },
    titleComment: {}
  };

  return (
    <div className="page">
      <TopBar
        title="Informations"
        leftButtonInfo={{ isVisible: false }}
        rightButtonInfo={{ isVisible: false }}
      />
      <section className="pageBody" style={style.main}>
        <div id="firstBlock">
          <h2>Pourquoi ?</h2>
          <p>Cette évaluation vous aide à:</p>
          <ul style={style.ulist}>
            <li>
              analyser avec votre thérapeuthe et à comprendre vos habitude
              mictionnelles et défécatoire
            </li>
            <li>prendre en charge vos problèmes</li>
          </ul>
        </div>
        <div id="secondBlock">
          <h2 style={style.titleComment}>Comment ?</h2>
          <p>
            Noter à chaque fois et au moment précis où ça se produit les
            événements suivants pendant 3 jours et 3 nuits
          </p>
          <ul style={style.ulist}>
            <li>1 jour sans contrainte (WE)</li>
            <li>2 jours avec contraintes horaires</li>
          </ul>
        </div>
      </section>
      <Navbar />
    </div>
  );
}

export default Infos;
