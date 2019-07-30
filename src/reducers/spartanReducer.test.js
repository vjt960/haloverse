import { spartanReducer } from './spartanReducer';

describe('spartanReducer', () => {
  it('should return initial state', () => {
    const expected = '';
    const result = spartanReducer(undefined, '');
    expect(result).toEqual(expected);
  });

  it('should update spartan state with STORE_SPARTAN', () => {
    const url = 'example.com';
    const action = { type: 'STORE_SPARTAN', url };
    const result = spartanReducer('', action);
    expect(result).toEqual(url);
  });
});
