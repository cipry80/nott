import React, { PureComponent } from 'react';
import Page from '../../common/components/Page/Page';
import './Protected.css';

class Protected extends PureComponent {
  render = () => (
    <Page pageName="protected">
      <p>This is the Protected page.</p>
    </Page>
  );
}

export default Protected;
