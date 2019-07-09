import { REFRESH_HISTORY, UPDATE_SELECTED_DATE } from "./history.action";

const initialState = {
  history: [],
  selectedHistoryDate: new Date()
};

export default function history(state = initialState, action) {
  switch (action.type) {
    case REFRESH_HISTORY:
      return { ...state, history: action.history };
    case UPDATE_SELECTED_DATE:
      return { ...state, selectedHistoryDate: action.date };
    default:
      return state;
  }
}
