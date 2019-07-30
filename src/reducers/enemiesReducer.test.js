import { enemiesReducer } from './enemiesReducer';

describe('enemiesReducer', () => {
  it('should return initial state', () => {
    const expected = [];
    const result = enemiesReducer(undefined, '');
    expect(result).toEqual(expected);
  });

  it('should update enemies state with STORE_ENEMIES', () => {
    const expected = [1, 2, 3, 4, 5];
    const enemies = [1, 2, 3, 4, 5];
    const action = { type: 'STORE_ENEMIES', enemies };
    const result = enemiesReducer([], action);
    expect(result).toEqual(expected);
  });
});
