import React, { PureComponent } from 'react';
import Perf from 'react-addons-perf';

class PerfProfiler extends PureComponent {
  constructor() {
    super();

    this.toggle = this.toggle.bind(this);

    this.state = {
      started: false
    };
  }

  toggle() {
    const { started } = this.state;

    if (started) {
      Perf.stop();
    } else {
      Perf.start();
    }

    this.setState({ started: !started });
  }

  printWasted() {
    const lastMeasurements = Perf.getLastMeasurements();
    Perf.printWasted(lastMeasurements);
  }

  printOperations() {
    const lastMeasurements = Perf.getLastMeasurements();
    Perf.printOperations(lastMeasurements);
  }

  render() {
    const { started } = this.state;

    return (
      <div
        style={{ position: 'absolute', right: 0, padding: '1rem', background: '#bbb', zIndex: 1 }}
      >
        <h1>Performance Profiler</h1>
        <div>
          <button className="u-rounded" style={{ padding: '.5rem' }} onClick={this.toggle}>
            {started ? 'Stop' : 'Start'}
          </button>
        </div>
        <div>
          <button style={{ padding: '.5rem' }} onClick={this.printWasted}>
            Print Wasted
          </button>
        </div>
        <div>
          <button style={{ padding: '.5rem' }} onClick={this.printOperations}>
            Print Operations
          </button>
        </div>
      </div>
    );
  }
}

export default PerfProfiler;
