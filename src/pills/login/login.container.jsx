import React, { useEffect } from "react";
import LoginView from "./login.view.jsx";
import { getUserCredentials, updateUser } from "./login.actions.js";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import logoKineOrange from "./logoKineOrange.png";
import { getUuid } from "../login/login.selectors";

const Login = ({ dispatch, userUuid }) => {
  useEffect(() => {
    if (localStorage.getItem("user")) {
      const { uuid, name, email, token } = JSON.parse(
        localStorage.getItem("user")
      );
      dispatch(updateUser(uuid, name, email, token));
    }
  }, [dispatch, userUuid]);

  const handleSubmit = e => {
    e.preventDefault();
    let username = e.target.username.value;
    let password = e.target.password.value;

    dispatch(getUserCredentials(username, password));
  };

  if (userUuid && localStorage.getItem("user")) {
    return <Redirect to="/" />;
  }

  return <LoginView onSubmit={handleSubmit} logo={logoKineOrange} />;
};

const mapStateToProps = state => ({
  userUuid: getUuid(state)
});

export default connect(mapStateToProps)(Login);
