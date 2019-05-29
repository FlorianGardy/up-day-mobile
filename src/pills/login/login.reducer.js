export default function counter(state = { total: 0, score: 100 }, action) {
  switch (action.type) {
    case "INCREMENT":
      return { ...state, total: state.total + 1 };
    case "DECREMENT":
      return { ...state, total: state.total - 1 };
    default:
      return state;
  }
}
