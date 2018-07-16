import React from 'react'

const ResultModal = props =>{   
  return( <div style={props.styleInline.modal} className={`modal fade show`} id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog" role="document">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">Results {(props.score.playerScore === 3) ? 'You won!' : (props.score.noScore === 3) ? 'Its a tie' : 'You lost!'}</h5>
      </div>
      <div className="modal-body">
        <div>Win: {props.score.playerScore}</div>
        <div>Lose: {props.score.opponentScore}</div>
        <div>Tie: {props.score.noScore}</div>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-primary" onClick={(e)=>props.onClick(e)}>Play again</button>
      </div>
    </div>
  </div>
</div>)}

export default ResultModal