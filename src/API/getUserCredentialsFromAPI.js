import axios from "axios";
import { getAPIconfig } from "./axiosConfig";
import { manageError } from "./manageErrors";

export function getUserCredentialsFromAPI(name, password) {
  const { baseURL, headers } = getAPIconfig();

  const config = {
    method: "post",
    baseURL,
    url: `login`,
    headers,
    data: {
      name,
      password
    }
  };

  return axios
    .request(config)
    .then(response => dataSelection(response))
    .catch(error => {
      return manageError(error);
    });
}

const dataSelection = response => {
  let selectedData = response.data;
  return selectedData;
};
