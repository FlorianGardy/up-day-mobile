import axios from "axios";
import { APIconfig } from "./axiosConfig";

export function getUserCredentialsFromAPI(name, password) {
  const config = {
    method: "post",
    baseURL: APIconfig.baseUrl,
    url: `login`,
    data: {
      name,
      password
    }
  };

  return axios
    .request(config)
    .then(response => dataSelection(response))
    .catch(error => {
      console.log(error);
    });
}

const dataSelection = response => {
  let selectedData = response.data;
  return selectedData;
};
