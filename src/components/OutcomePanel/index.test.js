import React from 'react';
import { shallow, configure } from 'enzyme';
import Outcome from './';

import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('Outcome Panel', () => {
  const input = ['d', 'w', 'l', '']
  const output = ['ITS A TIE!!', 'YOU WIN!!', 'YOU LOSE!!', 'GOOD LUCK']

  input.map( (input, index) => {
    it('displays the outcome '+input, () => {
      const outcome = shallow(<Outcome outcome={input} />);
      expect(outcome.text()).toEqual(output[index])
    })
  })
})