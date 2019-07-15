const initialState = {
  uuid: "",
  name: "",
  email: "",
  token: ""
};

export default function login(state = initialState, action) {
  switch (action.type) {
    case "@login/UPDATE_USER":
      return {
        ...state,
        uuid: action.payload.uuid,
        name: action.payload.name,
        email: action.payload.email,
        token: action.payload.token
      };
    default:
      return state;
  }
}
