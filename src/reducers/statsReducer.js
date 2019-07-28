export const statsReducer = (state = '', { type, stats }) => {
  switch (type) {
    case 'STORE_STATS':
      return stats;
    default:
      return state;
  }
};
