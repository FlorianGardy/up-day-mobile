import axios from "axios";
import { APIconfig } from "./axiosConfig";

export function sendDatasToDatabase(
  date,
  nature,
  kind,
  measure,
  context,
  comment,
  userId
) {
  userId = 1; // TODO: Put in place Auth process
  const config = {
    method: "POST",
    baseURL: APIconfig.baseUrl,
    url: "/events",
    data: {
      date,
      nature,
      type: kind,
      volume: measure,
      context,
      comment,
      userId: userId
    }
  };

  return axios.request(config);
}
