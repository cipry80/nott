import React from 'react';
import { shallow } from 'enzyme';
import AppMenu from './AppMenu';

it('Renders without crashing', () => {
  shallow(<AppMenu />);
});
