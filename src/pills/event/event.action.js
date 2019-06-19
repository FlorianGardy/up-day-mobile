const UPDATE_DATE = "@event/UPDATE_DATE";
const UPDATE_NATURE = "@event/UPDATE_NATURE";
const UPDATE_KIND = "@event/UPDATE_KIND";
const UPDATE_MEASURE = "@event/UPDATE_MEASURE";
const UPDATE_CONTEXT = "@event/UPDATE_CONTEXT";
const UPDATE_COMMENT = "@event/UPDATE_COMMENT";
const RESET_EVENT = "@event/RESET_EVENT";

export const updateDate = date => {
  return { type: UPDATE_DATE, date };
};

export const updateNature = nature => {
  return { type: UPDATE_NATURE, nature };
};

export const updateKind = kind => {
  return { type: UPDATE_KIND, kind };
};

export const updateMeasure = measure => {
  return { type: UPDATE_MEASURE, measure };
};

export const updateContext = context => {
  return { type: UPDATE_CONTEXT, context };
};

export const updateComment = comment => {
  return { type: UPDATE_COMMENT, comment };
};

export const resetEvent = () => {
  return { type: RESET_EVENT };
};

export const getContext = (context, checked) => {
  return (dispatch, getState) => {
    const store = getState();
    if (checked === true) {
      store.EventReducer.context.push(context);
    } else if (checked === false) {
      const index = store.EventReducer.context.findIndex(i => i === context);
      if (index !== -1) {
        store.EventReducer.context.splice(index, 1);
      }
    }
    dispatch(updateContext(updateContext));
  };
};
