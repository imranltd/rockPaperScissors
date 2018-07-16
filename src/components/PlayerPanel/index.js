import React from 'react'

import Button from '../Button';

const PlayerPanel = props => props.weapons.map( (weapon, index) => {
  let icon = ''
  let value = ''
  switch (weapon){
    case 'Rock':
      icon = 'fa-hand-rock';
      value = 'rock'
      break;
    case 'Paper':
      icon = 'fa-hand-paper';
      value = 'paper'
      break;
    case 'Scissors':
      icon = 'fa-hand-scissors'
      value = 'scissors'
      break;
    default:
    icon = 'fa-hand'
    value = ''
  }

  return(
    <Button onClick={(e) => props.onClick(e, value, index)} key={index}>
      <span className={`far ${icon} fa-flip-horizontal fa-5x`} aria-hidden="true"></span>
      <div>{weapon}</div>
    </Button>
  )
})


export default PlayerPanel