import React from "react";
import Navbar from "../components/Navbar";
import TopBar from "../components/TopBar";

import "./layout.scss";
import "./Infos.page.scss";

function Infos() {
  return (
    <>
      <div className="page">
        <TopBar
          title="Informations"
          leftButtonInfo={{ isVisible: false }}
          rightButtonInfo={{ isVisible: false }}
        />
        <section className="pageBodyInfos">
          <div className="firstBlock">
            <h2>A quoi sert cette évaluation?</h2>
            <p>
              {" "}
              Permettre à votre thérapeute d'analyser et de comprendre vos
              habitudes mictionnelles et défécatoires, afin de trouver une
              solution à vos problèmes.
            </p>
          </div>
          <div className="secondBlock">
            <h2>Comment faire?</h2>
            <p>
              Noter à chaque fois et au moment précis où ça se produit les
              événements suivants pendant 3 jours et 3 nuits, avec :
            </p>
            <ul>
              <li>- 1 jour sans contrainte (ex. WE)</li>
              <li>- 2 jours avec contraintes horaires</li>
            </ul>
          </div>
        </section>
      </div>
      <Navbar />
    </>
  );
}

export default Infos;
