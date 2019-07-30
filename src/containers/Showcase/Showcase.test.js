import React from 'react';
import { shallow } from 'enzyme';
import { Showcase, mapStateToProps } from './Showcase';

describe('Showcase', () => {
  describe('Showcase Component', () => {
    let wrapper;

    beforeEach(() => {
      const props = { maps: [1, 2, 3], isLoading: false };
      wrapper = shallow(<Showcase {...props} />);
    });

    it('should match snapshot', () => {
      expect(wrapper).toMatchSnapshot();
    });
  });

  describe('mapStateToProps', () => {
    it('returns an object with isLoading and maps from state', () => {
      const mockState = {
        isLoading: false,
        maps: [1, 2, 3],
        extraProp: 'fill',
        uselessProp: 'fill'
      };
      const expected = { isLoading: false, maps: [1, 2, 3] };
      const mappedProps = mapStateToProps(mockState);
      expect(mappedProps).toEqual(expected);
    });
  });
});
