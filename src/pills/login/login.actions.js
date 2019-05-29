const UPDATE_USER = "@login/UPDATE_USER";

export const updateUser = username => {
  return { type: UPDATE_USER, username };
};
