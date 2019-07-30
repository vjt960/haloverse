import React from 'react';
import { shallow } from 'enzyme';
import { Form, mapStateToProps, mapDispatchToProps } from './Form';
import {
  storeUser,
  storeSpartan,
  storeEmblem,
  storeStats,
  hasErrored,
  clearError
} from '../../actions';

describe('Form', () => {
  describe('Form Component', () => {
    let wrapper, instance, props;

    beforeEach(() => {
      props = {
        storeSpartan: jest.fn(),
        storeEmblem: jest.fn(),
        storeStats: jest.fn(),
        hasErrored: jest.fn(),
        clearError: jest.fn(),
        error: '',
        userIsLoading: false,
        storeUser: jest.fn()
      };
      wrapper = shallow(<Form {...props} />);
      instance = wrapper.instance();
    });

    it('should match snapshot', () => {
      const wrapper = shallow(<Form {...props} />);
      expect(wrapper).toMatchSnapshot();
    });

    it('should handleChange on gamertag input', () => {
      const mockEvent = {
        target: { name: 'gamertag', value: '' },
        preventDefault: jest.fn()
      };
      instance.handleChange = jest.fn();

      wrapper.find('[name="gamertag"]').simulate('change', mockEvent);
      expect(wrapper.state('gamertag')).toEqual('');
    });

    it('should set state when handleChange is called', () => {
      const mockeEvent = {
        target: { name: 'gamertag', value: 'PRI3ST' },
        preventDefault: jest.fn()
      };
      const expected = 'PRI3ST';

      wrapper.instance().handleChange(mockeEvent);

      expect(wrapper.state('gamertag')).toEqual(expected);
    });

    it('should call handleSubmit when button is clicked', () => {
      const mockEvent = { preventDefault: jest.fn() };
      instance.handleSubmit = jest.fn();

      wrapper.find('.gamertag-submit').simulate('click', mockEvent);

      expect(instance.handleSubmit).toHaveBeenCalledWith(mockEvent);
    });

    it('should call loadProfile when handleSubmit is called', () => {
      const mockGamertag = 'y33t';
      instance.loadProfile = jest.fn();
      instance.loadProfile(mockGamertag);

      expect(instance.loadProfile).toHaveBeenCalledWith(mockGamertag);
    });

    it('should clear inputs after handleSubmit is called', () => {
      const expected = { gamertag: '' };

      instance.setState({ gamertag: 'Kabuski989' });
      instance.clearInput();

      expect(wrapper.state()).toEqual(expected);
    });
  });

  describe('mapStateToProps', () => {
    it('should return the object with the error state', () => {
      const mockState = { error: 'mock error here' };
      const expected = { error: 'mock error here' };
      const mappedProps = mapStateToProps(mockState);
      expect(mappedProps).toEqual(expected);
    });
  });

  describe('mapDispatchToProps', () => {
    let mockDispatch;

    beforeEach(() => {
      mockDispatch = jest.fn();
    });

    it('should call dispatch with a gamertag when storeUser is called', () => {
      const actionToDispatch = storeUser('exampleTag');
      const mappedProps = mapDispatchToProps(mockDispatch);
      mappedProps.storeUser('exampleTag');
      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
    });

    it('should call dispatch with a url when storeSpartan is called', () => {
      const actionToDispatch = storeSpartan('exampleURL');
      const mappedProps = mapDispatchToProps(mockDispatch);
      mappedProps.storeSpartan('exampleURL');
      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
    });

    it('should call dispatch with a url when storeEmblem is called', () => {
      const actionToDispatch = storeEmblem('exampleURL');
      const mappedProps = mapDispatchToProps(mockDispatch);
      mappedProps.storeEmblem('exampleURL');
      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
    });

    it('should call dispatch with stats when storeStats is called', () => {
      const actionToDispatch = storeStats({ stats: 123 });
      const mappedProps = mapDispatchToProps(mockDispatch);
      mappedProps.storeStats({ stats: 123 });
      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
    });

    it('should call dispatch with an error message when hasErrored is called', () => {
      const actionToDispatch = hasErrored('example error message');
      const mappedProps = mapDispatchToProps(mockDispatch);
      mappedProps.hasErrored('example error message');
      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
    });

    it('should call dispatch when clearError is called', () => {
      const actionToDispatch = clearError();
      const mappedProps = mapDispatchToProps(mockDispatch);
      mappedProps.clearError();
      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
    });
  });
});
