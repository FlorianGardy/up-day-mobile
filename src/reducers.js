import { combineReducers } from "redux";
import LoginReducer from "./pills/login/login.reducer.js";
import EventReducer from "./pills/event/event.reducer.js";

export default combineReducers({
  LoginReducer,
  EventReducer
});
