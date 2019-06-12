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

// Get the history of a given user from the API
export function getUserHistoryFromAPI(userID) {
  const config = {
    method: "get",
    baseURL: "http://localhost:3001/",
    url: "/history",
    params: {
      userID: userID
    }
  };

  return Axios.request(config)
    .then(function(response) {
      return response.data.history;
    })
    .catch(function(error) {
      console.log(error);
    });
}
