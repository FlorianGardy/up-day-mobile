import axios from "axios";
import { getAPIconfig } from "./axiosConfig";

export function sendDatasToDatabase(
  date,
  nature,
  kind,
  measure,
  context,
  comment
) {
  const body = {
    date,
    nature,
    type: kind,
    volume: measure
  };
  if (context.length !== 0) {
    body.context = context;
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

  return axios.request(config).catch(error => {
    return error.response.data.statusCode;
  });
}
