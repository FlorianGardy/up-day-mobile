import { users } from "../data";

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
