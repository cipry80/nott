import React, { Component } from 'react';
import { connect } from 'react-redux';
import { doLogin } from './Login.actions';
import {
  getUserInfo,
  getUserInfoSuccess
} from '../../common/state/user/User.actions';
import Login from './Login';

class LoginContainer extends Component {
  render() {
    return <Login onClickLogin={this._doLogin} />;
  }

  _doLogin = (username, password) => this.props._doLogin(username, password);
}

const mapDispatchToProps = (dispatch, props) => ({
  _doLogin: async (username, password) => {
    try {
      const res = await doLogin(username, password);
      localStorage.setItem('token', res.body.token);
      const user = await getUserInfo();
      await dispatch(getUserInfoSuccess(user.body));
      props.history.push('/');
    } catch (e) {
      console.log(e);
    }
  }
});

export default connect(() => ({}), mapDispatchToProps)(LoginContainer);
