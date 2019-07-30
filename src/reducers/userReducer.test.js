import { userReducer } from './userReducer';

describe('userReducer', () => {
  it('should return initial state', () => {
    const expected = '';
    const result = userReducer(undefined, '');
    expect(result).toEqual(expected);
  });

  it('should update user state with STORE_USER', () => {
    const user = 'exampleUser';
    const action = { type: 'STORE_USER', user };
    const result = userReducer('', action);
    expect(result).toEqual(user);
  });
});
