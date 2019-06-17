const UPDATE_DATE = "@event/UPDATE_DATE";
const UPDATE_KIND = "@event/UPDATE_KIND";
const UPDATE_MEASURE = "@event/UPDATE_MEASURE";
const UPDATE_CONTEXT = "@event/UPDATE_CONTEXT";
const UPDATE_COMMENT = "@event/UPDATE_COMMENT";
const RESET_EVENT = "@event/RESET_EVENT";

export const updateDate = date => {
  return { type: UPDATE_DATE, date };
};

export const updateKind = kind => {
  return { type: UPDATE_KIND, kind };
};

export const updateMeasure = measure => {
  return { type: UPDATE_MEASURE, measure };
};

export const updateContext = (context, checked) => {
  return { type: UPDATE_CONTEXT, context, checked };
};

export const updateComment = comment => {
  return { type: UPDATE_COMMENT, comment };
};

export const resetEvent = () => {
  return { type: RESET_EVENT };
};
