export const UPDATE_DATE = "@event/UPDATE_DATE";
export const UPDATE_NATURE = "@event/UPDATE_NATURE";
export const UPDATE_KIND = "@event/UPDATE_KIND";
export const UPDATE_MEASURE = "@event/UPDATE_MEASURE";
export const UPDATE_CONTEXT = "@event/UPDATE_CONTEXT";
export const UPDATE_COMMENT = "@event/UPDATE_COMMENT";
export const RESET_EVENT = "@event/RESET_EVENT";

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

export const getContext = (valueContext, checked) => {
  return (dispatch, getState) => {
    const context = getState().EventReducer.context;
    if (checked === true) {
      context.push(valueContext);
    } else if (checked === false) {
      const index = context.findIndex(i => i === valueContext);
      if (index !== -1) {
        context.splice(index, 1);
      }
    }
    dispatch(updateContext(context));
  };
};
