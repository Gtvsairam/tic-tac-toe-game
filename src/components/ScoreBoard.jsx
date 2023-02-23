import React from 'react'
import './ScoreBoard.css'

const ScoreBoard = ({ scores, xIsNext }) => {
  const { xScore, oScore } = scores;
  return (
    <div className="scoreboard">
      <span className={`score x-score ${!xIsNext && "inactive"}`}>X -{xScore}</span>
      <span className={`score o-score ${xIsNext && "inactive"}`}>O -{oScore}</span>
    </div>
  )
}

export default ScoreBoard