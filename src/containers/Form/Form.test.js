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
        storeSpartan,
        storeEmblem,
        storeStats,
        hasErrored,
        clearError
      };
      wrapper = shallow(<Form {...props} />);
      instance = wrapper.instance();
    });

    it('should match snapshot', () => {
      const wrapper = shallow(<Form />);
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
});
