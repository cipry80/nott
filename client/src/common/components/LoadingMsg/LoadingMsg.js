import React, { PureComponent } from 'react';
import message from 'antd/lib/message';
import './LoadingMsg.css';

const Error = () => message.error('Ups! Something went wrong.');
const Warning = () => message.warning("We're still loading data for you...");

class LoadingMsg extends PureComponent {
  render = () => {
    const { error, pastDelay } = this.props;

    if (error) {
      return <Error />;
    } else if (pastDelay) {
      return <Warning />;
    } else {
      return null;
    }
  };
}

export default LoadingMsg;
