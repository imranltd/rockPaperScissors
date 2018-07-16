import React, { Component } from 'react';

import InitialValues from '../data/'

import PlayerPanel from '../components/PlayerPanel'
import OpponentPanel from '../components/OpponentPanel'
import Heading from '../components/Heading'
import Header from '../components/Header'
import ResultsModal from '../components/ResultModal'
import OutcomePanel from '../components/OutcomePanel'

import {opponentMove, getOutcome} from '../utils'

class Application extends Component {
  constructor(props) {
    super(props)

    this.state = InitialValues

    this.handlePlayerMove = this.handlePlayerMove.bind(this)
    this.restartGame = this.restartGame.bind(this)
}

handlePlayerMove = function(e, data, index) {
  e.preventDefault()
  let promise = new Promise( (resolve, reject) => {
    let player = data
    if (player !== '') { 
      resolve(data);
    } else { 
      reject(Error("Promise rejected")); 
    }
  });

  promise.then(player => {
    this.setState({player})
      return player
    })
    .then(opponentMove)
    .then(allMoves => {
      this.setState({opponent:allMoves.opponent})
      const score = this.state.score
      return {
        player: allMoves.player,
        opponent: allMoves.opponent,
        score
      }
      })
    .then(data => getOutcome(data))
    .then(score => {
      this.setState({score}); 
      return score
    })
    .then(result => {
      if(result.endMatch){
        const modal = {...this.state.styleInline.modal, display: 'block'} 
        const styleInline = {...this.state.styleInline, modal}
        this.setState({styleInline})
       }
       return result
     })
  }


  restartGame() { this.setState(InitialValues) }

  render() {
    return (
      <div className="App">
        {(this.state.score.endMatch) && <ResultsModal score={this.state.score} styleInline={this.state.styleInline} onClick={(e)=>{this.restartGame(e)}}/>}
        <div className="container-fluid justify-content-center">
        <div className="row">
          <Header>
            <Heading level={1}>Rock, Paper & Scissors</Heading>
            <Heading level={2}>First to win the 3 rounds</Heading>
          </Header>
        </div>
        <div className="row">
          <div  className="col-12">
            {this.state.error}
            <OutcomePanel outcome={this.state.score.outcome} />
          </div>
        </div>
          
          <div>
            <div className="row">
              <div className="col-6 text-center">
                <Heading level={3}>Player</Heading>
                <PlayerPanel weapons={this.state.weapons} onClick={(e, value, index) => {this.handlePlayerMove(e, value, index)}}/>
              </div>
              <div className="col-6 text-center">
                <h3>Opponent</h3>
                <OpponentPanel opponent={this.state.opponent} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Application;