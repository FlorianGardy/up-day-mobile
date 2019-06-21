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
      userId
    }
  };

  return axios.request(config);
}
