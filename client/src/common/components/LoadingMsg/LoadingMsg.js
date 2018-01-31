import React, { PureComponent } from 'react';
import './LoadingMsg.css';

class LoadingMsg extends PureComponent {
  render = () => {
    const { error, pastDelay } = this.props;

    if (error) {
      return (
        <div className="loading-msg loading-error">
          Ups! Something went wrong.
        </div>
      );
    } else if (pastDelay) {
      return (
        <div className="loading-msg loading-delayed">
          We're still loading data for you...
        </div>
      );
    } else {
      return null;
    }
  };
}

export default LoadingMsg;
