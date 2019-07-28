export const userReducer = (state = '', { type, user }) => {
  switch (type) {
    case 'STORE_USER':
      return user;
    default:
      return state;
  }
};
