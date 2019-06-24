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
  let id = 1; //Force user 1 during dev
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
      userId: id
    }
  };

  return axios.request(config);
}
