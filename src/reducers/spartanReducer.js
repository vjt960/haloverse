export const spartanReducer = (state = '', { type, url }) => {
  switch (type) {
    case 'STORE_SPARTAN':
      return url;
    default:
      return state;
  }
};
