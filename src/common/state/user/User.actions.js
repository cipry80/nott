import * as types from './User.types';
import Helpers from '../../../common/helpers/Helpers';
import Store from '../../../redux/Store';

export const getUserInfo = () => {
  const { user } = Store.getState();

  if (!user) {
    return Helpers.get('https://api.github.com/users/1', {}, false);
  } else {
    return Promise.resolve(user);
  }
};

export const getUserInfoSuccess = user => ({
  type: types.GET_USER_INFO_SUCCESS,
  user
});

export const clearUserInfo = () => ({ type: types.CLEAR_USER_INFO });
