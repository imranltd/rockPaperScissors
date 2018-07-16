import React from 'react';
import { shallow, configure } from 'enzyme';
import ResultModal from './';

import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

const mockFn = jest.fn();

const data = {
  score: {
    outcome: '',
    playerScore: 0,
    opponentScore: 0,
    noScore: 0,
    endMatch: true,
  },
  styleInline: {
    modal: {
      display: 'none',
      backgroundColor: 'rgba(0,0,0,0.7)'
    }
  }
}

describe('Results Modal', ()=>{
  it('Losing', () => {
    const newData = {...data, score:{...data.score, playerScore: 0, opponentScore: 3, noScore: 2}}
    const resultModal = shallow(<ResultModal score={newData.score} styleInline={newData.styleInline} />);
    const renderedText = 'Results You lost!Win: 0Lose: 3Tie: 2Play again';
  
    expect(resultModal.text()).toEqual(renderedText);
  });

  it('Winning', () => {
    const newData = {...data, score:{...data.score, playerScore: 3, opponentScore: 0, noScore: 2}}
    const resultModal = shallow(<ResultModal score={newData.score} styleInline={newData.styleInline} />);
    const renderedText = 'Results You won!Win: 3Lose: 0Tie: 2Play again';
  
    expect(resultModal.text()).toEqual(renderedText);
  });

  it('Tieing', () => {
    const newData = {...data, score:{...data.score, playerScore: 2, opponentScore: 0, noScore: 3}}
    const resultModal = shallow(<ResultModal score={newData.score} styleInline={newData.styleInline} />);
    const renderedText = 'Results Its a tieWin: 2Lose: 0Tie: 3Play again';
  
    expect(resultModal.text()).toEqual(renderedText);
  });

  it('should call mock function when button is clicked', () => {
    const newData = {...data, score:{...data.score, playerScore: 2, opponentScore: 0, noScore: 3}}
    const resultModal = shallow(<ResultModal score={newData.score} styleInline={newData.styleInline} onClick={mockFn}/>);
    const button = resultModal.find('button')

    button.simulate('click');
    expect(mockFn).toHaveBeenCalled();
  });
})

