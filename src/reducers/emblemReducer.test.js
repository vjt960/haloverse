import { emblemReducer } from './emblemReducer';

describe('emblemReducer', () => {
  it('should return initial state', () => {
    const expected = '';
    const result = emblemReducer(undefined, '');
    expect(result).toEqual(expected);
  });

  it('should update emblem state with STORE_EMBLEM', () => {
    const state = '';
    const mockURL = 'example.com';
    const action = { type: 'STORE_EMBLEM', url: mockURL };
    const result = emblemReducer(state, action);
    expect(result).toEqual(mockURL);
  });
});
