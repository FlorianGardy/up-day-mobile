import React, { useState } from "react";
import LoginView from "./login.view.jsx";
import { getUserCredentials } from "./login.actions.js";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import logoKineGrey from "./logoKineGrey.png";

const Login = ({ dispatch }) => {
  const [shouldRedirect, setShouldRedirect] = useState(false);

  const handleSubmit = e => {
    let username = e.target.username.value;
    let password = e.target.password.value;

    dispatch(getUserCredentials(username, password));

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
