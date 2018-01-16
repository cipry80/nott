import { Component } from 'react';

class ScrollToTop extends Component {
  componentWillUpdate = (prevProps) => {
    if (this.props.location !== prevProps.location) {
      window.scrollTo(0, 0);
    }
  }

  render = () => this.props.children;
}

export default ScrollToTop;
