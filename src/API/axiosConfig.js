import { getToken } from "../pills/login/login.selectors";
import store from "../store";

export function getAPIconfig() {
  return {
    baseURL: "http://localhost:3030/",
    headers: {
      authorization: getToken(store.getState())
    }
  };
}
