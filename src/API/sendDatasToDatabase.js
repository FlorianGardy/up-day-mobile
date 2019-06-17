import axios from "axios";
import { APIconfig } from "./axiosConfig";

export function sendDatasToDatabase(
  date,
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
      type: kind,
      nature: "coco",
      volume: measure,
      context,
      comment,
      userId
    }
  };

  return axios.request(config);
}
