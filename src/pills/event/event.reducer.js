import {
  UPDATE_DATE,
  UPDATE_NATURE,
  UPDATE_KIND,
  UPDATE_MEASURE,
  UPDATE_CONTEXT,
  UPDATE_COMMENT,
  RESET_EVENT
} from "./event.action";

const initialState = {
  date: new Date(),
  kind: "",
  nature: "",
  measure: "",
  context: [],
  comment: null
};

export default function event(state = initialState, action) {
  switch (action.type) {
    case UPDATE_DATE:
      return { ...state, date: action.date };
    case UPDATE_NATURE:
      return { ...state, nature: action.nature };
    case UPDATE_KIND:
      return { ...state, kind: action.kind };
    case UPDATE_MEASURE:
      return { ...state, measure: action.measure };
    case UPDATE_CONTEXT:
      return { ...state, context: [...action.context] };
    case UPDATE_COMMENT:
      return { ...state, comment: action.comment };
    case RESET_EVENT:
      return { ...initialState, context: [], date: new Date() };
    default:
      return state;
  }
}
