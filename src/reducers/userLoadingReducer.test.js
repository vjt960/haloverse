import { userLoadingReducer } from './userLoadingReducer';

describe('userLoadingReducer', () => {
  it('should return initial state', () => {
    const expected = false;
    const result = userLoadingReducer(undefined, '');
    expect(result).toEqual(expected);
  });

  it('should update loading state with START_LOADING', () => {
    const expected = true;
    const action = { type: 'USER_LOADING' };
    const result = userLoadingReducer(false, action);
    expect(result).toEqual(expected);
  });

  it('should update loading state with USER_LOADED', () => {
    const expected = false;
    const action = { type: 'USER_LOADED' };
    const result = userLoadingReducer(true, action);
    expect(result).toEqual(expected);
  });
});
