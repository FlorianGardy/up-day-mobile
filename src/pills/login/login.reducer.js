const initialState = { user: "" };

export default function login(state = initialState, action) {
  switch (action.type) {
    case "@login/UPDATE_USER":
      return { ...state, user: action.username };
    default:
      return state;
  }
}
