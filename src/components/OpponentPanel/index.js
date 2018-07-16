import React from 'react'

const OpponentPanel = props => {
  const { opponent } = props

  switch(opponent){
    case 'rock':
      return <div><span className="fas fa-hand-rock fa-10x" aria-hidden="true"></span><div>Rock</div></div>

    case 'paper':
      return <div><span className="fas fa-hand-paper  fa-10x" aria-hidden="true"></span><div>Paper</div></div>

    case 'scissors':
      return <div><span className="fas fa-hand-scissors fa-10x" aria-hidden="true"></span><div>Scissors</div></div>

    default:

    return 'Opponent is waiting for your move'
  }
}

export default OpponentPanel