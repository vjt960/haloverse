import { statsReducer } from './statsReducer';

describe('statsReducer', () => {
  it('should return initial state', () => {
    const expected = '';
    const result = statsReducer(undefined, '');
    expect(result).toEqual(expected);
  });

  it('should update stats state with STORE_STATS', () => {
    const stats = { stat: 'statistic' };
    const action = { type: 'STORE_STATS', stats };
    const result = statsReducer('', action);
    expect(result).toEqual(stats);
  });
});
