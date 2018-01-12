import React, { PureComponent } from 'react';
import Page from 'common/components/Page/Page';
import './Home.css';

class Home extends PureComponent {
  render = () => (
    <Page pageName="home">
      <p>This is the Home page.</p>
    </Page>
  );
}

export default Home;
