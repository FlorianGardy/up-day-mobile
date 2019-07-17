//TODO : to test
export function manageError(error) {
  if (error === "Network Error") {
    return [];
  }
  return error.response.data.statusCode;
}
