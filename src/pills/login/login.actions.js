import { getUserCredentialsFromAPI } from "../../API/getUserCredentialsFromAPI";

const UPDATE_USER = "@login/UPDATE_USER";

export const updateUser = (uuid, name, email, token) => {
  return { type: UPDATE_USER, payload: { uuid, name, email, token } };
};

export const getUserCredentials = (userName, UserPass) => {
  return async (dispatch, getState) => {
    const { uuid, name, email, token } = await getUserCredentialsFromAPI(
      userName,
      UserPass
    );
    console.log(uuid, name, email, token);

    if (token !== "") {
      dispatch(updateUser(uuid, name, email, token));
    }
  };
};
