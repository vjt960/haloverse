import { mapsReducer } from './mapsReducer';

describe('mapsReducer', () => {
  it('should return initial state', () => {
    const expected = [];
    const result = mapsReducer(undefined, '');
    expect(result).toEqual(expected);
  });

  it('should update maps state with STORE_MAPS', () => {
    const expected = [1, 2, 3, 4, 5];
    const maps = [1, 2, 3, 4, 5];
    const action = { type: 'STORE_MAPS', maps };
    const result = mapsReducer([], action);
    expect(result).toEqual(expected);
  });
});
