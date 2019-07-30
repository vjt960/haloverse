export const userLoadingReducer = (state = false, action) => {
  switch (action.type) {
    case 'USER_LOADING':
      return true;
    case 'USER_LOADED':
      return false;
    default:
      return state;
  }
};
