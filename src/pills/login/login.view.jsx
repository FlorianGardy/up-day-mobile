import React from "react";

const loginView = ({ onSubmit, logo }) => {
  return (
    <div>
      <img src={logo} alt="logo" height="100px" />
      <form onSubmit={e => onSubmit(e)}>
        <input name="username" type="text" placeholder="Identifiant" />
        <input name="password" type="password" placeholder="Mot de passe" />
        <input type="submit" value="Se connecter" />
      </form>
    </div>
  );
};

export default loginView;
