import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { doLogout } from './AppHeader.actions';
import AppHeader from './AppHeader';

class AppHeaderContainer extends Component {
  constructor(props) {
    super();
    this._doLogout = this._doLogout.bind(this);
  }

  render() {
    return <AppHeader onClickLogout={this._doLogout} />;
  }

  _doLogout() {
    this.props._doLogout();
  }
}

const mapStateToProps = () => ({});

const mapDispatchToProps = (dispatch, props) => {
  return {
    _doLogout: () => {
      return doLogout()
        .then(res => localStorage.removeItem('token'))
        .then(() => props.history.push('/'))
        .catch(err => console.log(err));
    }
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AppHeaderContainer));
