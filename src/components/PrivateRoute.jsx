import React from "react";
import { Redirect, Route } from "react-router-dom";
import { connect } from "react-redux";
import { updateUser } from "../pills/login/login.actions";

const PrivateRoute = ({ component: Component, dispatch, ...rest }) => {
  if (localStorage.getItem("user")) {
    const { uuid, name, email, token } = JSON.parse(
      localStorage.getItem("user")
    );
    dispatch(updateUser(uuid, name, email, token));
  } else {
    // HACK
    dispatch(updateUser("", "", "", ""));
  }
  return (
    <Route
      {...rest}
      render={props =>
        localStorage.getItem("user") ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: "/", state: { from: props.location } }} />
        )
      }
    />
  );
};

export default connect()(PrivateRoute);
