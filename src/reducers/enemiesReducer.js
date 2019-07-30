export const enemiesReducer = (state = [], { type, enemies }) => {
  switch (type) {
    case 'STORE_ENEMIES':
      return enemies;
    default:
      return state;
  }
};
