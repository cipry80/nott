import React, { Component } from 'react';
import { connect } from 'react-redux';
import { doLogin } from './Login.actions';
import { getUserInfo, getUserInfoSuccess } from '../../common/state/user/User.actions';
import Login from './Login';

class LoginContainer extends Component {
  constructor(props) {
    super();
    this._doLogin = this._doLogin.bind(this);
  }

  render() {
    return <Login onClickLogin={this._doLogin} />;
  }

  _doLogin(username, password) {
    this.props._doLogin(username, password);
  }
}

const mapStateToProps = () => ({});

const mapDispatchToProps = (dispatch, props) => {
  return {
    _doLogin: (username, password) => {
      return doLogin(username, password)
        .then(res => localStorage.setItem('token', res.body.token))
        .then(() => getUserInfo())
        .then(res => dispatch(getUserInfoSuccess(res.body)))
        .then(() => props.history.push('/'))
        .catch(err => console.log(err));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);
