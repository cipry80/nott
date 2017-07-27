import React, { Component } from 'react';
import { connect } from 'react-redux';
import { doLogin } from './Login.actions';
import { getUserInfo, getUserInfoSuccess } from '../../common/state/user/User.actions';
import Login from './Login';

class LoginContainer extends Component {
  constructor(props) {
    super();

    this.state = {
      username: '',
      password: ''
    };

    this._onChangeUsername = this._onChangeUsername.bind(this);
    this._onChangePassword = this._onChangePassword.bind(this);
    this._doLogin = this._doLogin.bind(this);
  }

  render() {
    return (
      <Login
        username={this.state.username}
        onChangeUsername={this._onChangeUsername}
        password={this.state.password}
        onChangePassword={this._onChangePassword}
        onClickLogin={this._doLogin}
      />
    );
  }

  _onChangeUsername(e) {
    this.setState({ username: e.target.value });
  }

  _onChangePassword(e) {
    this.setState({ password: e.target.value });
  }

  _doLogin() {
    const { username, password } = this.state;
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
