import * as types from './User.types';

const initialState = null; 

const user = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_USER_INFO_SUCCESS:
      return Object.assign({}, state, action.user);

    case types.CLEAR_USER_INFO:
      return null;

    default:
      return state;
  }
};

export default user;
