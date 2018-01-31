import React from 'react';
import { shallow } from 'enzyme';
import LoadingMsg from './LoadingMsg';

it('Renders without crashing', () => {
  shallow(<LoadingMsg />);
});
