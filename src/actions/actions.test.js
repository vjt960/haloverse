import * as actions from './index';

describe('actions', () => {
  it('should have a type of START_LOADING', () => {
    const expectedAction = {
      type: 'START_LOADING'
    };
    const result = actions.startLoading();
    expect(result).toEqual(expectedAction);
  });

  it('should have a type of END_LOADING', () => {
    const expectedAction = {
      type: 'END_LOADING'
    };
    const result = actions.endLoading();
    expect(result).toEqual(expectedAction);
  });

  it('should have a type of STORE_MAPS', () => {
    const mockMaps = [{ name: 'map_1' }];
    const expectedAction = {
      type: 'STORE_MAPS',
      maps: mockMaps
    };
    const result = actions.storeMaps(mockMaps);
    expect(result).toEqual(expectedAction);
  });

  it('should have a type of STORE_USER', () => {
    const mockUser = 'Jev';
    const expectedAction = {
      type: 'STORE_USER',
      user: mockUser
    };
    const result = actions.storeUser(mockUser);
    expect(result).toEqual(expectedAction);
  });

  it('should have a type of STORE_SPARTAN', () => {
    const mockUrl = 'http://gottaLoveTesting.not';
    const expectedAction = {
      type: 'STORE_SPARTAN',
      url: mockUrl
    };
    const result = actions.storeSpartan(mockUrl);
    expect(result).toEqual(expectedAction);
  });

  it('should have a type of STORE_EMBLEM', () => {
    const mockUrl = 'http://gottaLoveTesting.not';
    const expectedAction = {
      type: 'STORE_EMBLEM',
      url: mockUrl
    };
    const result = actions.storeEmblem(mockUrl);
    expect(result).toEqual(expectedAction);
  });

  it('should have a type of STORE_STATS', () => {
    const mockStats = { stat: 5, statTwo: 'yes' };
    const expectedAction = {
      type: 'STORE_STATS',
      stats: mockStats
    };
    const result = actions.storeStats(mockStats);
    expect(result).toEqual(expectedAction);
  });

  it('should have a type of HAS_ERRORED', () => {
    const mockErrorMessage = 'You done messed up';
    const expectedAction = {
      type: 'HAS_ERRORED',
      errorMessage: mockErrorMessage
    };
    const result = actions.hasErrored(mockErrorMessage);
    expect(result).toEqual(expectedAction);
  });

  it('should have a type of CLEAR_ERROR', () => {
    const expectedAction = {
      type: 'CLEAR_ERROR'
    };
    const result = actions.clearError();
    expect(result).toEqual(expectedAction);
  });
});
