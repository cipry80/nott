import React, { PureComponent } from 'react';
import Page from 'common/components/Page/Page';
import Loadable from 'react-loadable';
import LoadingMsg from 'common/components/LoadingMsg/LoadingMsg';
import './Protected.css';

const LoadableBar = Loadable({
  loader: () => import('./ProtectedContent'),
  loading: () => <LoadingMsg />
});

class Protected extends PureComponent {
  render = () => (
    <Page pageName="protected">
      <LoadableBar />
    </Page>
  );
}

export default Protected;
