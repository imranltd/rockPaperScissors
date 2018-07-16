import React from 'react';
import { shallow, configure, mount } from 'enzyme';
import PlayerPanel from './';

import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

const mockFn = jest.fn();

describe('Player Panel', () => {
  const weapons = ['weapon 1', 'weapon 2', 'weapon 3']
  const playerPanel = mount(<PlayerPanel weapons={weapons} onClick={mockFn}/>);
  playerPanel.find('Button').map( (w, i) => {
    it('should render '+w.text(), () => {
      expect(w.text()).toEqual(weapons[i])
    })

    it('fire a click', () => {
      const button = w.find('button')
      button.simulate('click');
      expect(mockFn).toHaveBeenCalled();
    }) 
  })
})