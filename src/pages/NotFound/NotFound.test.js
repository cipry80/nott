import React from 'react';
import { shallow } from 'enzyme';
import NotFound from './NotFound';

it('Renders without crashing', () => {
  shallow(<NotFound />);
});
