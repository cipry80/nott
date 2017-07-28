import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Form from 'antd/lib/form';
import Input from 'antd/lib/input';
import Icon from 'antd/lib/icon';
import Button from 'antd/lib/button';

import './Login.css';

const FormItem = Form.Item;

class Login extends PureComponent {
  static propTypes = {
    onClickLogin: PropTypes.func.isRequired
  };

  constructor() {
    super();
    this._onChangeUsername = this._onChangeUsername.bind(this);
    this._onChangePassword = this._onChangePassword.bind(this);
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div className="page page-login">
        <div className="page__content page-login__content u-fx u-fx-align-center u-fx-justify-center">
          <Form className="login-form">
            <FormItem>
              {getFieldDecorator('username', {
                rules: [{ required: true, message: 'Please input your username!' }]
              })(
                <Input
                  prefix={<Icon type="user" />}
                  onChange={this._onChangeUsername}
                  placeholder="Username"
                  ref={input => {
                    this.usernameInput = input;
                  }}
                />
              )}
            </FormItem>
            <FormItem>
              {getFieldDecorator('password', {
                rules: [{ required: true, message: 'Please input your password!' }]
              })(
                <Input
                  prefix={<Icon type="lock" />}
                  onChange={this._onChangePassword}
                  type="password"
                  placeholder="Password"
                  ref={input => {
                    this.passwordInput = input;
                  }}
                />
              )}
            </FormItem>
            <FormItem>
              <Button
                type="primary"
                className="login-form-button"
                onClick={() =>
                  this.props.onClickLogin(this.usernameInput.value, this.passwordInput.value)}
              >
                Log In
              </Button>
            </FormItem>
            <div className="u-center">
              <a className="login-form-forgot" href="">
                Forgot password?
              </a>
            </div>
          </Form>
        </div>
      </div>
    );
  }

  _onChangeUsername(e) {
    this.props.form.setFieldsValue({ username: e.target.value });
  }

  _onChangePassword(e) {
    this.props.form.setFieldsValue({ password: e.target.value });
  }
}

export default Form.create()(Login);
