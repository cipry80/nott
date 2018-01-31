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
      return <div className="loading-msg loading-delay">Loading...</div>;
    } else {
      return null;
    }
  };
}

export default LoadingMsg;
