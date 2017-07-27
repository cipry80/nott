import React from 'react';
import { shallow } from 'enzyme';
import Home from './Home';

it('Renders without crashing', () => {
  shallow(<Home />);
});
