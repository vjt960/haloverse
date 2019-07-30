import { errorReducer } from './errorReducer';

describe('errorReducer', () => {
  it('should return initial state', () => {
    const expected = '';
    const result = errorReducer(undefined, '');
    expect(result).toEqual(expected);
  });

  it('should update error state with HAS_ERRORED', () => {
    const state = '';
    const mockError = 'Error: example text';
    const action = { type: 'HAS_ERRORED', errorMessage: mockError };
    const result = errorReducer(state, action);
    expect(result).toEqual(mockError);
  });

  it('should update error state with CLEAR_ERROR', () => {
    const state = '';
    const action = { type: 'CLEAR_ERROR' };
    const result = errorReducer(state, action);
    expect(result).toEqual(state);
  });
});
