import React from 'react';
import logo from './logo.svg';
import Board from './Board';
import './App.css';

export const BoardSquareContext = React.createContext();
export const BoardSetSquareContext = React.createContext();

function App() {
  const [boardSquares, setBoardSquares] = React.useState(
    new Array(9).fill(null)
  );

  return (
    <div className="App">
    <h1>A tic-tac-toe game</h1>
    <BoardSquareContext.Provider value={boardSquares}>
      <BoardSetSquareContext.Provider value={setBoardSquares}>
          <Board />
      </BoardSetSquareContext.Provider>
    </BoardSquareContext.Provider>

    </div>
  );
}

export default App;
