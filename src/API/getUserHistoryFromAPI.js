import axios from "axios";
import { getAPIconfig } from "./axiosConfig";

export function getUserHistoryFromAPI(userUuid) {
  const { baseURL, headers } = getAPIconfig();

  const config = {
    method: "get",
    baseURL,
    url: `events`,
    headers
  };

  return axios
    .request(config)
    .then(response => {
      return dataSelection(response);
    })
    .then(selectedData => dataNormalization(selectedData))
    .catch(err => {
      localStorage.clear();
      return (window.location.href = "/login");
    });
}

const dataSelection = response => {
  let selectedData = response.data;
  return selectedData;
};

const dataNormalization = selectedData => {
  let normalizedData = selectedData.map(event => {
    let id = event.id;
    let date = new Date(event.date);
    let type = event.type;
    let nature = event.nature;
    let volume = event.volume;
    let context = event.context;
    let comment = event.comment;

    return {
      id,
      date,
      type,
      nature,
      volume,
      context,
      comment
    };
  });
  return normalizedData;
};
