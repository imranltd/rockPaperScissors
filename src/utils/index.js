export const getOutcome = data => {
  let outcome = 'no'
  let playerScore = data.score.playerScore
  let opponentScore = data.score.opponentScore
  let noScore = data.score.noScore

  const player = data.player
  const opponent = data.opponent

  if(player === 'rock'){
    if(opponent === 'rock') {
      outcome = 'd'
      noScore = noScore+1
    }
    if(opponent === 'paper') {
      outcome = 'l'
      opponentScore = opponentScore+1
    }
    if(opponent === 'scissors') {
      outcome = 'w'
      playerScore = playerScore+1
    }
  }

  if(player === 'paper'){
    if(opponent === 'paper') {
      outcome = 'd'
      noScore = noScore+1
    }
    if(opponent === 'rock') {
      outcome = 'w'
      playerScore = playerScore+1
    }
    if(opponent === 'scissors') {
      outcome = 'l'
      opponentScore = opponentScore+1
    }
  }

  if(player === 'scissors'){
    if(opponent === 'scissors') {
      outcome = 'd'
      noScore = noScore+1
    }
    if(opponent === 'paper') {
      outcome = 'w'
      playerScore = playerScore+1
    }
    if(opponent === 'rock') {
      outcome = 'l'
      opponentScore = opponentScore+1
    }
  }

  const endMatch = ( playerScore === 3 || opponentScore === 3 || noScore === 3) ? true : false

  const score = {
    outcome,
    playerScore,
    opponentScore,
    noScore,
    endMatch
  }

  return score

}

export const opponentMove = (player) => {
  const random = Math.floor(Math.random() * 9)

  let opponent = ''

  if(random <= 3 ){
    opponent = 'rock'
  } else if(random > 3 && random < 6) {
    opponent = 'paper'
  } else {
    opponent = 'scissors'
  }

  return {
    player,
    opponent
  }
}

export default {
  getOutcome,
  opponentMove
}