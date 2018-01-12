import * as actions from './User.actions';
import * as types from './User.types';
import reducer from './User.reducer';

describe('User Sync Actions', () => {
  it('Should create an action to successfully fetch user info', () => {
    const user = { name: 'Vlad' };
    const expectedAction = { type: types.GET_USER_INFO_SUCCESS, user };
    expect(actions.getUserInfoSuccess(user)).toEqual(expectedAction);
  });

  it('Should create an action to clear user info', () => {
    const expectedAction = { type: types.CLEAR_USER_INFO };
    expect(actions.clearUserInfo()).toEqual(expectedAction);
  });
});

describe('User Reducer', () => {
  it('Should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(null);
  });

  it('Should handle changing user info', () => {
    const user = { name: 'Vlad' };
    expect(
      reducer(undefined, {
        type: types.GET_USER_INFO_SUCCESS,
        user
      })
    ).toEqual(user);

    const alteredUser = { name: 'Not Vlad' };
    expect(
      reducer(user, {
        type: types.GET_USER_INFO_SUCCESS,
        user: alteredUser
      })
    ).toEqual(alteredUser);
  });

  it('Should handle clearing user info', () => {
    const user = { name: 'Vlad' };
    expect(
      reducer(user, {
        type: types.CLEAR_USER_INFO,
        user
      })
    ).toEqual(null);
  });
});
