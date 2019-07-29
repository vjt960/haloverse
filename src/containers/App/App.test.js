import React from 'react';
import { shallow } from 'enzyme';
import { App, mapStateToProps, mapDispatchToProps } from './App';
import { startLoading, endLoading, storeMaps } from '../../actions';

describe('App', () => {
  describe('App Component', () => {
    let wrapper;
    let instance;

    beforeEach(() => {
      const props = {
        startLoading: jest.fn(),
        endLoading: jest.fn(),
        storeMaps: jest.fn()
      };
      wrapper = shallow(<App {...props} />, { disableLifecycleMethods: true });
      instance = wrapper.instance();
    });

    it('should match snapshot', () => {
      expect(wrapper).toMatchSnapshot();
    });
  });

  describe('mapStateToProps', () => {
    it('should return an array of maps when called', () => {
      const mockState = {
        maps: [1, 2, 3, 4]
      };
      const expected = { maps: [1, 2, 3, 4] };
      const mappedProps = mapStateToProps(mockState);
      expect(mappedProps).toEqual(expected);
    });
  });

  describe('mapDispatchToProps', () => {
    it('calls dispatch when startLoading is called', () => {
      const mockDispatch = jest.fn();
      const actionToDispatch = startLoading();
      const mappedProps = mapDispatchToProps(mockDispatch);
      mappedProps.startLoading();
      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
    });

    it('calls dispatch when endLoading is called', () => {
      const mockDispatch = jest.fn();
      const actionToDispatch = endLoading();
      const mappedProps = mapDispatchToProps(mockDispatch);
      mappedProps.endLoading();
      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
    });

    it('calls dispatch with maps when storeMaps is called', () => {
      const mockMaps = [{ title: 'map_1' }];
      const mockDispatch = jest.fn();
      const actionToDispatch = storeMaps(mockMaps);
      const mappedProps = mapDispatchToProps(mockDispatch);
      mappedProps.storeMaps(mockMaps);
      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
    });
  });
});
