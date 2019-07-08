import React, { useState } from "react";
import LoginView from "./login.view.jsx";
import { updateUser } from "./login.actions.js";
import { connect } from "react-redux";
import { isUserInDatabase } from "../../API/functions.js";
import { Redirect } from "react-router-dom";
import logoKineGrey from "./logoKineGrey.png";

const Login = ({ dispatch }) => {
  const [shouldRedirect, setShouldRedirect] = useState(false);

  const handleSubmit = e => {
    let username = e.target.username.value;
    let password = e.target.password.value;

    if (isUserInDatabase(username, password)) {
      dispatch(updateUser("1")); // TODO: Put in place Auth process
      setShouldRedirect(true);
    } else {
      alert("Veuillez vérifier votre identifiant ou votre mot de passe !");
    }

    e.preventDefault();
  };

  return (
    <div>
      {shouldRedirect && <Redirect to="/history" />}
      <LoginView onSubmit={handleSubmit} logo={logoKineGrey} />
    </div>
  );
};

export default connect()(Login);
