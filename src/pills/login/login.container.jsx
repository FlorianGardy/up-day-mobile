import React from "react";
import LoginView from "./login.view.jsx";
import { updateUser } from "./login.actions.js";
import { connect } from "react-redux";

const Login = ({ dispatch }) => {
  const users = [
    {
      name: "Jojo",
      password: "1234"
    },
    {
      name: "Laura",
      password: "1234"
    }
  ];

  const handleSubmit = e => {
    dispatch(updateUser(e.target.username.value));
    let isUserInDatabase = false;

    users.forEach(user => {
      if (
        e.target.username.value === user.name &&
        e.target.password.value === user.password
      ) {
        isUserInDatabase = true;
      }
    });

    isUserInDatabase
      ? alert("Vous pouvez passer.")
      : alert("Vouuuuss ne passerez paaaaas !");

    e.preventDefault();
  };
  return (
    <LoginView
      onSubmit={handleSubmit}
      logo="https://www.logogenie.fr/download/preview/medium/4165102"
    />
  );
};

export default connect()(Login);
