import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Form, Input, Icon, Button } from 'antd';
import './Login.css';

const FormItem = Form.Item;

class Login extends PureComponent {
  static propTypes = {
    username: PropTypes.string,
    password: PropTypes.string,
    onChangeUsername: PropTypes.func,
    onChangePassword: PropTypes.func,
    onClickLogin: PropTypes.func.isRequired
  };

  static defaultProps = {
    username: '',
    password: '',
    onChangeUsername: () => {},
    onChangePassword: () => {}
  };

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
                  value={this.props.username}
                  onChange={this.props.onChangeUsername}
                  placeholder="Username"
                />
              )}
            </FormItem>
            <FormItem>
              {getFieldDecorator('password', {
                rules: [{ required: true, message: 'Please input your password!' }]
              })(
                <Input
                  prefix={<Icon type="lock" />}
                  value={this.props.password}
                  onChange={this.props.onChangePassword}
                  type="password"
                  placeholder="Password"
                />
              )}
            </FormItem>
            <FormItem>
              <Button
                type="primary"
                className="login-form-button"
                onClick={this.props.onClickLogin}
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
}

export default Form.create()(Login);
