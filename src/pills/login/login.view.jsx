import React from "react";
import "./login.scss";

const loginView = ({ onSubmit, logo }) => {
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
      </form>
    </div>
  );
};

export default loginView;
