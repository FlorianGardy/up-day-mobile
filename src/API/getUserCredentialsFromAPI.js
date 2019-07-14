import axios from "axios";
import { getAPIconfig } from "./axiosConfig";

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
      return error.response.data.statusCode;
    });
}

const dataSelection = response => {
  let selectedData = response.data;
  return selectedData;
};
