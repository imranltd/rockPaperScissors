import React from 'react'

const OutcomePanel = props => {
  const { outcome } = props

  switch(outcome){
    case 'd':
      return  <div className="alert alert-warning" role="alert">ITS A TIE!!</div>

    case 'w':
      return <div className="alert alert-success" role="alert">YOU WIN!!</div>

    case 'l':
      return <div className="alert alert-danger" role="alert">YOU LOSE!!</div>

    default:
      return <div className="alert alert-primary" role="alert">GOOD LUCK</div>
  }

}

export default OutcomePanel