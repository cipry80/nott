import React, { PureComponent } from 'react';
import Page from 'common/components/Page/Page';
import Loadable from 'react-loadable';
import LoadingMsg from 'common/components/LoadingMsg/LoadingMsg';
import './Home.css';

const LoadableBar = Loadable({
  loader: () => import('./HomeContent'),
  loading: () => <LoadingMsg />
});

class Home extends PureComponent {
  render = () => (
    <Page pageName="home">
      <LoadableBar />
    </Page>
  );
}

export default Home;
