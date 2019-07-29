import React from 'react';
import { shallow } from 'enzyme';
import { Placeholder } from './Placeholder';

describe('Placeholder', () => {
  it('should match snapshot', () => {
    const wrapper = shallow(<Placeholder />);
    expect(wrapper).toMatchSnapshot();
  });
});
