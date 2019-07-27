export const mapsReducer = (state = [], { type, maps }) => {
  switch (type) {
    case 'STORE_MAPS':
      return maps;
    default:
      return state;
  }
};
