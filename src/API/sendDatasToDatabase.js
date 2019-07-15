import axios from "axios";
import { getAPIconfig } from "./axiosConfig";

export function sendDatasToDatabase(
  date,
  nature,
  kind,
  measure,
  context,
  comment,
  uuid
) {
  const body = {
    date,
    nature,
    type: kind,
    volume: measure,
    uuid
  };
  if (context.length !== 0) {
    body.context = context.join("|");
  }
  if (comment) {
    body.comment = comment;
  }

  const { baseURL, headers } = getAPIconfig();

  const config = {
    method: "POST",
    baseURL,
    url: "/events",
    headers,
    data: body
  };

  return axios.request(config);
}
