export const emblemReducer = (state = '', { type, url }) => {
  switch (type) {
    case 'STORE_EMBLEM':
      return url;
    default:
      return state;
  }
};
