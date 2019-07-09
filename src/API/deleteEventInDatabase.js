import axios from "axios";
import { APIconfig } from "./axiosConfig";

export function deleteEventInDatabase(id) {
  const config = {
    method: "DELETE",
    baseURL: APIconfig.baseUrl,
    url: `events/${id}`
  };

  return axios.request(config);
}
