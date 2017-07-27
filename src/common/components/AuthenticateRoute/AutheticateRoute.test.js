import React from 'react';
import { shallow } from 'enzyme';
import AuthenticateRoute from './AuthenticateRoute';

it('Renders without crashing', () => {
  shallow(<AuthenticateRoute />);
});
