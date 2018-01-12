import React from 'react';
import { shallow } from 'enzyme';
import Protected from './Protected';

it('Renders without crashing', () => {
  shallow(<Protected />);
});
