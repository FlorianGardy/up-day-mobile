import {
  ADD_EVENT,
  UPDATE_EVENT,
  REMOVE_EVENT,
  REFRESH_HISTORY,
  UPDATE_SELECTED_DATE
} from "./history.action";

const initialState = {
  history: [],
  selectedHistoryDate: new Date()
};

export default function history(state = initialState, action) {
  switch (action.type) {
    case ADD_EVENT:
      // TO BE COMPLETED
      return { ...state };
    case UPDATE_EVENT:
      // TO BE COMPLETED
      return { ...state };
    case REMOVE_EVENT:
      // TO BE COMPLETED
      return { ...state };
    case REFRESH_HISTORY:
      return { ...state, history: action.history };
    case UPDATE_SELECTED_DATE:
      return { ...state, selectedHistoryDate: action.date };
    default:
      return state;
  }
}
