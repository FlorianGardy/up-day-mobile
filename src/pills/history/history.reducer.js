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
      // TODO: Add an event to the history
      return { ...state };
    case UPDATE_EVENT:
      // TODO: Update an event into the history
      return { ...state };
    case REMOVE_EVENT:
      // TODO: Remove an event from the history
      return { ...state };
    case REFRESH_HISTORY:
      return { ...state, history: action.history };
    case UPDATE_SELECTED_DATE:
      return { ...state, selectedHistoryDate: action.date };
    default:
      return state;
  }
}
