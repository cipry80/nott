import React, { PureComponent } from 'react';
import AppMenu from '../AppMenu/AppMenu';
import './AppHeader.css';

class AppHeader extends PureComponent {
  render() {
    return (
      <header className="app-header u-ph-full">
        <AppMenu />
      </header>
    );
  }
}

export default AppHeader;
