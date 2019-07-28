export const startLoading = () => ({
  type: 'START_LOADING'
});

export const endLoading = () => ({
  type: 'END_LOADING'
});

export const storeMaps = maps => ({
  type: 'STORE_MAPS',
  maps
});

export const storeUser = user => ({
  type: 'STORE_USER',
  user
});
