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

export const storeSpartan = url => ({
  type: 'STORE_SPARTAN',
  url
});

export const storeEmblem = url => ({
  type: 'STORE_EMBLEM',
  url
});

export const storeStats = stats => ({
  type: 'STORE_STATS',
  stats
});

export const hasErrored = errorMessage => ({
  type: 'HAS_ERRORED',
  errorMessage
});

export const clearError = () => ({
  type: 'CLEAR_ERROR'
});
