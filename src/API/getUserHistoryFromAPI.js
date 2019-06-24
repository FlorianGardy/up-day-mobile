import axios from "axios";
import { APIconfig } from "./axiosConfig";

export function getUserHistoryFromAPI(userID) {
  userID = 1; // TODO: Put in place Auth process

  const config = {
    method: "get",
    baseURL: APIconfig.baseUrl,
    url: `events/${userID}`
  };

  return axios
    .request(config)
    .then(response => {
      return dataSelection(response);
    })
    .then(selectedData => dataNormalization(selectedData))
    .catch(error => {
      console.log(error);
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
