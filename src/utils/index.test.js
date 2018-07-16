
import {  getOutcome, opponentMove} from './'
const data = {
  score: {
    endMatch: false,
    noScore: 0,
    opponentScore: 0,
    playerScore: 0
  },
  player: '',
  opponent: ''
}

const initialOutput = {
  endMatch: false, 
  noScore: 0,
  opponentScore: 0, 
  outcome: '',
  playerScore: 0
}

describe('outcome of matching round ', () => {
  const output = {...initialOutput, noScore: 1, outcome: 'd'}

  it('should be a TIE if paper vs paper', () => {
    const input = {...data, player: 'paper', opponent: 'paper'}
    expect(getOutcome(input)).toEqual(output)
  })

  it('should be a TIE if rock vs rock', () => {
    const input = {...data, player: 'rock', opponent: 'rock'}
    expect(getOutcome(input)).toEqual(output)
  })

  it('should be a TIE if scissors vs scissors', () => {
    const input = {...data, player: 'scissors', opponent: 'scissors'}
    expect(getOutcome(input)).toEqual(output)
  })

})

describe('outcome of player winning ', () => {
  const output = {...initialOutput, playerScore: 1, outcome: 'w'}

  it('paper beats rock', () => {
    const input = {...data, player: 'paper', opponent: 'rock'}
    expect(getOutcome(input)).toEqual(output)
  })

  it('rock beats scissors', () => {
    const input = {...data, player: 'rock', opponent: 'scissors'}
    expect(getOutcome(input)).toEqual(output)
  })

  it('scissors beats paper', () => {
    const input = {...data, player: 'scissors', opponent: 'paper'}
    expect(getOutcome(input)).toEqual(output)
  })

})

describe('outcome of player losing ', () => {
  const output = {...initialOutput, opponentScore: 1, outcome: 'l'}
  
  it('rock loses paper', () => {
    const input = {...data, player: 'rock', opponent: 'paper'}
    expect(getOutcome(input)).toEqual(output)
  })

  it('scissors loses rock', () => {
    const input = {...data, player: 'scissors', opponent: 'rock'}
    expect(getOutcome(input)).toEqual(output)
  })

  it('paper loses scissors', () => {
    const input = {...data, player: 'paper', opponent: 'scissors'}
    expect(getOutcome(input)).toEqual(output)
  })

})

describe('end of match', () => {
  it('player wins', () => {
    const input = {...data, player: 'paper', opponent: 'rock', score:{...data.score, playerScore: 2}}
    const output = {...initialOutput, endMatch: true, outcome: 'w', playerScore: 3}
    expect(getOutcome(input)).toEqual(output)
  })

  it('player ties', () => {
    const input = {...data, player: 'paper', opponent: 'paper', score:{...data.score, noScore: 2}}
    const output = {...initialOutput, endMatch: true, outcome: 'd', noScore: 3}
    expect(getOutcome(input)).toEqual(output)
  })

  it('player loses', () => {
    const input = {...data, player: 'rock', opponent: 'paper', score:{...data.score, opponentScore: 2}}
    const output = {...initialOutput, endMatch: true, outcome: 'l', opponentScore: 3}
    expect(getOutcome(input)).toEqual(output)
  })
})

describe('opponent makes a move', () => {

  it('returns an object with opponent & player property', () => {
    expect(opponentMove('paper').hasOwnProperty('opponent')).toEqual(true)
    expect(opponentMove('paper').hasOwnProperty('player')).toEqual(true)
  })

  it('returns an object with opponent property with value', () => {

   const output = opponentMove('paper')

    expect(output.player).toBeTruthy()
    expect(output.opponent).toBeTruthy()
  })

  it('returns undefined for player', () => {
    const output = opponentMove()

     expect(output.player).toBeFalsy()
     expect(output.opponent).toBeTruthy()
   })

   it('returns paper for Opponent and paper for Player', () => {
    const mockMath = Object.create(global.Math);
    mockMath.random = () => 0.5;
    global.Math = mockMath;

    const input = opponentMove('paper')
    const output = {
      player: 'paper',
      opponent: 'paper'
    }

    expect(input).toEqual(output)
   })

   it('returns rock for Opponent and paper for Player', () => {
    const mockMath = Object.create(global.Math);
    mockMath.random = () => 0.2;
    global.Math = mockMath;

    const input = opponentMove('paper')
    const output = {
      player: 'paper',
      opponent: 'rock'
    }

    expect(input).toEqual(output)
   })

   it('returns scissors for Opponent and paper for Player', () => {
    const mockMath = Object.create(global.Math);
    mockMath.random = () => 0.8;
    global.Math = mockMath;

    const input = opponentMove('paper')
    const output = {
      player: 'paper',
      opponent: 'scissors'
    }

    expect(input).toEqual(output)
  })


})