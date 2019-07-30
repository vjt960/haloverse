import React from 'react';
import { shallow } from 'enzyme';
import { Halo, mapStateToProps } from './Halo';

describe('Halo', () => {
  it('should match snapshot', () => {
    const props = {
      storeEnemies: jest.fn(),
      maps: [1, 2, 3],
      stats: 'yeet',
      enemies: [1, 2, 3]
    };
    const wrapper = shallow(<Halo {...props} />, {
      disableLifecycleMethods: true
    });
    expect(wrapper).toMatchSnapshot();
  });
});

describe('mapStateToProps', () => {
  it('should return an array of map objects', () => {
    const mockState = {
      enemies: ['map1', 'map2', 'map3']
    };

    const expected = {
      enemies: ['map1', 'map2', 'map3']
    };
    const mappedProps = mapStateToProps(mockState);
    expect(mappedProps).toEqual(expected);
  });

  it('should return an object containing user stats', () => {
    const mockState = {
      stats: { one: 'one', two: 'two' }
    };

    const expected = {
      stats: { one: 'one', two: 'two' }
    };
    const mappedProps = mapStateToProps(mockState);
    expect(mappedProps).toEqual(expected);
  });

  it('should return an array of enemy objects', () => {
    const mockState = {
      maps: ['enemy1', 'enemy2', 'enemy3']
    };

    const expected = {
      maps: ['enemy1', 'enemy2', 'enemy3']
    };
    const mappedProps = mapStateToProps(mockState);
    expect(mappedProps).toEqual(expected);
  });
});
