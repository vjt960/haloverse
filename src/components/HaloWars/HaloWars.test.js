import React from 'react';
import { shallow } from 'enzyme';
import { HaloWars } from './HaloWars';

describe('HaloWars', () => {
  it('should match snapshot', () => {
    const wrapper = shallow(<HaloWars />);
    expect(wrapper).toMatchSnapshot();
  });
});
