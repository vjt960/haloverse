import React from 'react';
import { shallow } from 'enzyme';
import { Catalog, mapStateToProps } from './Catalog';

describe('Catalog', () => {
  it('should match snapshot', () => {
    const props = { enemies: [1, 2, 3] };
    const wrapper = shallow(<Catalog {...props} />);
    expect(wrapper).toMatchSnapshot();
  });

  describe('mapStateToProps', () => {
    it('should return array of enemies from state', () => {
      const mockState = { enemies: [1, 2, 3, 4] };
      const expected = { enemies: [1, 2, 3, 4] };
      const mappedProps = mapStateToProps(mockState);
      expect(mappedProps).toEqual(expected);
    });
  });
});
