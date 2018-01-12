import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import AppMenu from 'common/components/AppMenu/AppMenu';
import Button from 'antd/lib/button';
import './AppHeader.css';

class AppHeader extends PureComponent {
  static propTypes = {
    onClickLogout: PropTypes.func.isRequired
  };

  render = () => (
    <header className="app-header u-fx u-fx-align-center u-fx-justify-space-between u-ph-full">
      <AppMenu />
      <Button
        onClick={this.props.onClickLogout}
        type="primary"
        shape="circle"
        size="small"
        icon="logout"
      />
    </header>
  );
}

export default AppHeader;
