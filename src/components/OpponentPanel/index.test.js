import React from 'react';
import { shallow, configure } from 'enzyme';
import OpponentPanel from './';

import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('Opponent Panel', () => {
  const input = ['rock', 'paper', 'scissors']
  const output = ['Rock', 'Paper', 'Scissors']

  input.map( (input, index) => {
    it('displays a '+input, () => {
      const opponentPanel = shallow(<OpponentPanel opponent={input} />);
      expect(opponentPanel.text()).toEqual(output[index])
    })
  })
  
})