import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import Menu from 'antd/lib/menu';
import { withRouter } from 'react-router';
import './AppMenu.css';

const determineKeys = location => {
  const { pathname } = location;
  if (pathname === '/') {
    return ['home'];
  }

  return [pathname.substr(1)];
};

class AppHeader extends PureComponent {
  render() {
    const { location } = this.props;

    return (
      <Menu selectedKeys={determineKeys(location)} className="app-menu" mode="horizontal">
        <Menu.Item key="home">
          <Link to="/">Home</Link>
        </Menu.Item>
        <Menu.Item key="protected">
          <Link to="/protected">Protected</Link>
        </Menu.Item>
      </Menu>
    );
  }
}

export default withRouter(AppHeader);
