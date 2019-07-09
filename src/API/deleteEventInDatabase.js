import axios from "axios";
import { getAPIconfig } from "./axiosConfig";

export function deleteEventInDatabase(id) {
  const { baseURL, headers } = getAPIconfig();

  const config = {
    method: "DELETE",
    baseURL,
    url: `events/${id}`,
    headers
  };

  return axios.request(config);
}
