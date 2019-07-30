import { loadingReducer } from './loadingReducer';

describe('loadingReducer', () => {
  it('should return initial state', () => {
    const expected = false;
    const result = loadingReducer(undefined, '');
    expect(result).toEqual(expected);
  });

  it('should update loading state with START_LOADING', () => {
    const expected = true;
    const action = { type: 'START_LOADING' };
    const result = loadingReducer(false, action);
    expect(result).toEqual(expected);
  });

  it('should update loading state with END_LOADING', () => {
    const expected = false;
    const action = { type: 'END_LOADING' };
    const result = loadingReducer(true, action);
    expect(result).toEqual(expected);
  });
});
