const InitialValues = {
  player: '',
  opponent: '',
  weapons: ['Rock', 'Paper', 'Scissors'],
  score:{
    outcome: '',
    playerScore: 0,
    opponentScore: 0,
    noScore: 0,
    endMatch: false,
  },
  error: '',
  styleInline: {
    modal:{
      display: 'none',
      backgroundColor: 'rgba(0,0,0,0.7)'
    }
  }
}

export default InitialValues