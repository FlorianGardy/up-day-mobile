import { userSelector } from "../login/login.selectors";
import { getUserHistoryFromAPI } from "../../API/getUserHistoryFromAPI";

// ACTIONS
export const ADD_EVENT = "@history/ADD_EVENT";
export const UPDATE_EVENT = "@history/UPDATE_EVENT";
export const REMOVE_EVENT = "@history/REMOVE_EVENT";
export const REFRESH_HISTORY = "@history/REFRESH_HISTORY";
export const SHIFT_DATE = "@history/SHIFT_DATE";
export const UPDATE_SELECTED_DATE = "@history/UPDATE_SELECTED_DATE";

// ACTION CREATORS
export const addEvent = event => {
  return { type: ADD_EVENT, event };
};

export const updateEvent = event => {
  return { type: UPDATE_EVENT, event };
};

export const removeEvent = event => {
  return { type: REMOVE_EVENT, event };
};

export const refreshHistory = history => {
  return { type: REFRESH_HISTORY, history };
};

export function getHistory() {
  return async (dispatch, getState) => {
    const store = getState();
    const user = userSelector(store);
    const history = await getUserHistoryFromAPI(user);
    if (typeof history !== "undefined") {
      dispatch(refreshHistory(history));
    }
  };
}

export function updateSelectedDate(date) {
  return { type: UPDATE_SELECTED_DATE, date };
}

export function shiftDate(direction) {
  return (dispatch, getState) => {
    const store = getState();
    const history = store.HistoryReducer.history;
    const currentDate = store.HistoryReducer.selectedHistoryDate;
    // Creates an array containing (unique) sorted dates from history
    const sortedDates = [...new Set(history.map(event => event.date))].sort(
      (a, b) => a - b
    );
    if (direction === "left") {
      const filteredSortedDate = sortedDates.filter(date => date < currentDate);
      if (filteredSortedDate.length > 0) {
        const newDate = new Date(
          filteredSortedDate[filteredSortedDate.length - 1]
        );
        dispatch(updateSelectedDate(newDate));
      }
    } else if (direction === "right") {
      const filteredSortedDate = sortedDates.filter(date => date > currentDate);
      if (filteredSortedDate.length > 0) {
        const newDate = new Date(filteredSortedDate[0]);
        dispatch(updateSelectedDate(newDate));
      }
    }
  };
}
