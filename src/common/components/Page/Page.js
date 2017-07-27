import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import AppHeader from '../AppHeader/AppHeader';
import './Page.css';

class Page extends PureComponent {
  static propTypes = {
    pageName: PropTypes.string
  };

  static defaultProps = {
    pageName: 'unknown'
  };

  render() {
    return (
      <div className={`page page-${this.props.pageName}`}>
        <AppHeader />
        <div className={`page__content page-${this.props.pageName}__content u-pa-full`}>
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default Page;
