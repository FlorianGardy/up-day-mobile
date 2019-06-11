import { users } from "../data";
import Axios from "axios";

// Check if the user / pass exists in the database
export const isUserInDatabase = (username, password) => {
  let result = false;
  users.forEach(user => {
    if (username === user.name && password === user.password) {
      result = true;
    }
  });
  return result;
};

// Get all the events of a given user from the API
export const getUserEventsFromAPI = userID => {
  const config = {
    method: "get",
    baseURL: "http://localhost:3001/",
    url: "/events",
    params: {
      userID: userID
    }
  };

  Axios.request(config)
    .then(function(response) {
      // handle success
      console.log(response);
      const events = response.data.events;
      console.log(events);
    })
    .catch(function(error) {
      // handle error
      console.log(error);
    });
};
