import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import AppHeaderContainer from 'common/components/AppHeader/AppHeaderContainer';
import './Page.css';

class Page extends PureComponent {
  static propTypes = {
    pageName: PropTypes.string
  };

  static defaultProps = {
    pageName: 'unknown'
  };

  render = () => (
    <div className={`page page-${this.props.pageName}`}>
      <AppHeaderContainer />
      <div
        className={`page__content page-${
          this.props.pageName
        }__content u-pa-full`}
      >
        {this.props.children}
      </div>
    </div>
  );
}

export default Page;
