import './App.css';
import Board from './components/Board';
function App() {
  return (
    <div className="App">
    <p className='tic'>Tic-Tac-Toe<span className="material-symbols-outlined">
videogame_asset
</span></p>
    <div className="game">
      <div className="game-board">
        <Board />
      </div>
    </div>  
    </div>
  );
}

export default App

