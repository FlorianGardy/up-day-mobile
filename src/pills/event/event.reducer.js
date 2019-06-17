const initialState = {
  date: new Date(),
  kind: "",
  measure: "",
  context: [],
  comment: ""
};

export default function event(state = initialState, action) {
  switch (action.type) {
    case "@event/UPDATE_DATE":
      return { ...state, date: action.date };
    case "@event/UPDATE_KIND":
      return { ...state, kind: action.kind };
    case "@event/UPDATE_MEASURE":
      return { ...state, measure: action.measure };
    case "@event/UPDATE_CONTEXT":
      if (action.checked === true) {
        state.context.push(action.context);
      } else if (action.checked === false) {
        const index = state.context.indexOf(action.context);
        if (index !== -1) {
          state.context.splice(index, 1);
        }
      }
      return {
        ...state,
        context: [...state.context]
      };
    case "@event/UPDATE_COMMENT":
      return { ...state, comment: action.comment };
    case "@event/RESET_EVENT":
      return initialState;
    default:
      return state;
  }
}
