import React, { useState } from "react";
import LoginView from "./login.view.jsx";
import { updateUser } from "./login.actions.js";
import { connect } from "react-redux";
import { isUserInDatabase } from "../../API/functions.js";
import { Redirect } from "react-router-dom";

const Login = ({ dispatch }) => {
  const [shouldRedirect, setShouldRedirect] = useState(false);

  const handleSubmit = e => {
    let username = e.target.username.value;
    let password = e.target.password.value;

    if (isUserInDatabase(username, password)) {
      dispatch(updateUser("1")); // TODO: Put in place Auth process
      setShouldRedirect(true);
    } else {
      alert("Vouuuuss ne passerez paaaaas !");
    }

    e.preventDefault();
  };

  return (
    <div>
      {shouldRedirect && <Redirect to="/history" />}
      <LoginView
        onSubmit={handleSubmit}
        logo="https://www.logogenie.fr/download/preview/medium/4165102"
      />
    </div>
  );
};

export default connect()(Login);
