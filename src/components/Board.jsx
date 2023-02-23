import { useState } from "react";
import Square from "./Square";
import ScoreBoard from "./ScoreBoard";
import { useEffect } from "react";
import './ScoreBoard.css'
function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}
function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const [scores, setSCores] = useState({ xScore: 0, oScore: 0 });

  function handleClick(i) {
    const squaresCopy = [...squares];
    if (calculateWinner(squaresCopy) || squaresCopy[i]) {
      return;
    }
    else {
      status = "Draw...!"
    }
    squaresCopy[i] = xIsNext ? "X" : "O";
    setSquares(squaresCopy);
    setXIsNext(!xIsNext);
  }
  const resetHandler = () => {
    setXIsNext(true);
    setSquares(Array(9).fill(null));
  }

  function renderSquare(i) {
    return <Square value={squares[i]} onClick={() => handleClick(i)} />;
  }

  const winner = calculateWinner(squares);

  useEffect(() => {
    // check();
    if (winner) {
      if (winner === "O") {
        let { oScore } = scores;
        oScore += 1;
        setSCores({ ...scores, oScore })
      } else if (winner === "X") {
        let { xScore } = scores;
        xScore += 1;
        setSCores({ ...scores, xScore })

      }
      else {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        status = "Draw...!"
      }
    }
  }, [winner])

  let status;
  let win;
  if (winner) {
    win = `Winner: ${winner}`;

  }
  else {
    status = `Player: ${xIsNext ? "X" : "O"} turn`;
  }



  return (
    <>
      <div>
        <div className="status">
          {xIsNext ?
            <b className={`score o-score `}>{win}</b>

            :
            <b className={`score x-score ${xIsNext}`}>{win}</b>
          }
          {!xIsNext ?
            <b className={`score o-score `}>{status}</b>

            :
            <b className={`score x-score ${xIsNext}`}>{status}</b>
          }
        </div>

        <div className="board-row">
          {renderSquare(0)}
          {renderSquare(1)}
          {renderSquare(2)}
        </div>
        <div className="board-row">
          {renderSquare(3)}
          {renderSquare(4)}
          {renderSquare(5)}
        </div>
        <div className="board-row">
          {renderSquare(6)}
          {renderSquare(7)}
          {renderSquare(8)}
        </div>
      </div>
      <ScoreBoard scores={scores} xIsNext={xIsNext} />
      <button className='reset' onClick={resetHandler}>Restart game!</button>
    </>
  );
}
export default Board;