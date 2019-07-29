export const errorReducer = (state = '', { type, errorMessage }) => {
  switch (type) {
    case 'HAS_ERRORED':
      return errorMessage;
    case 'CLEAR_ERROR':
      return '';
    default:
      return state;
  }
};
