import { getUserCredentialsFromAPI } from "../../API/getUserCredentialsFromAPI";

export const UPDATE_USER = "@login/UPDATE_USER";
export const UPDATE_USER_ERROR = "@login/UPDATE_USER_ERROR";

export const updateUser = (uuid, name, email, token) => {
  return { type: UPDATE_USER, payload: { uuid, name, email, token } };
};

export const updateUserError = error => {
  return { type: UPDATE_USER_ERROR, payload: error };
};

export const getUserCredentials = (userName, UserPass) => {
  return async (dispatch, getState) => {
    const res = await getUserCredentialsFromAPI(userName, UserPass);
    if (res === 400) {
      dispatch(updateUserError(res));
    } else {
      const { uuid, name, email, token } = res;
      if (token) {
        let storedUser = JSON.stringify({ uuid, name, email, token });
        localStorage.setItem("user", storedUser);
        dispatch(updateUser(uuid, name, email, token));
      }
    }
  };
};
