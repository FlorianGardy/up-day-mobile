import React from "react";
import "./login.scss";

const loginView = ({ onSubmit, logo, statusCode }) => {
  let styled = { fontSize: "12px", color: "red" };
  styled.opacity = statusCode !== 200 ? 1 : 0;
  let errorMessage;
  switch (statusCode) {
    case 400:
      errorMessage = "Identifiant ou mot de passe incorrect";
      break;
    case 403:
      errorMessage = "l'utilisateur n'est pas admin";
      break;
    default:
      errorMessage = "";
  }
  return (
    <div className="loginPage">
      <section className="logo">
        <img src={logo} alt="logo" />
        <h1>UP Day</h1>
        <h2>Calendrier Mictionnel</h2>
      </section>
      <form onSubmit={e => onSubmit(e)}>
        <input name="username" type="text" placeholder="Identifiant" />
        <input name="password" type="password" placeholder="Mot de passe" />
        <input type="submit" value="Se connecter" />
        <div style={styled}>
          <p>{errorMessage}</p>
        </div>
      </form>
    </div>
  );
};

export default loginView;
