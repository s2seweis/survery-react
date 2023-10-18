export const updateFormOrder = (questions) => {
  return {
    type: 'UPDATE_FORM_ORDER',
    payload: questions,
  };
};