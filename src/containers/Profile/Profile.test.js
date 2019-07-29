import React from 'react';
import { shallow } from 'enzyme';
import { Profile, mapStateToProps } from './Profile';

describe('Profile', () => {
  describe('Profile Component', () => {
    let wrapper, instance;

    beforeEach(() => {
      const props = {
        user: 'exampleGamer',
        spartan: 'exampleURL',
        emblem: 'anotherURL',
        stats: {
          rank: 1,
          xp: 100,
          kills: 0,
          deaths: 0,
          wins: 0,
          losses: 0,
          headshots: 0,
          shots: 999,
          hits: 9,
          damage: 27,
          time: { hours: 5, minutes: 5, seconds: 5 },
          medals: 10
        }
      };
      wrapper = shallow(<Profile {...props} />, {
        disableLifecycleMethods: true
      });
      instance = wrapper.instance();
    });

    it('should match snapshot', () => {
      expect(wrapper).toMatchSnapshot();
    });

    it('should be able to get player Kill-Death ratio', () => {
      instance.getKDR = jest.fn();
      instance.getKDR();
      expect(instance.getKDR).toHaveBeenCalled();
    });
  });

  describe('mapStateToProps', () => {
    it('should return an object with user, spartan, emblem and stats from store', () => {
      const mockState = {
        user: 'exampleUser',
        spartan: 'exampleURL',
        emblem: 'anotherURL',
        stats: { stat: 'fact' },
        mockProp: 'fill',
        mockTwo: 'fill'
      };
      const expected = {
        user: 'exampleUser',
        spartan: 'exampleURL',
        emblem: 'anotherURL',
        stats: { stat: 'fact' }
      };

      const mappedProps = mapStateToProps(mockState);
      expect(mappedProps).toEqual(expected);
    });
  });
});
