import React, { useReducer } from 'react';
import logo from './logo.svg';
import Square from './Square';
import {
  BoardSquareContext,
  BoardSetSquareContext,
  SquareContext,
} from './App.js';

// main board component
function Board() {
  const boardSquares = React.useContext(BoardSquareContext);
  const setBoardSquares = React.useContext(BoardSetSquareContext);

  const initialSate = 'true';
  const reducer = (state, action) => {
    switch (action) {
      case 'setXPlayer':
        return !state;
    }
  };
  const [isXPlayer, dispatch] = useReducer(reducer, initialSate);

  // fucntion for when a sqaure is clicked
  const whenClicked = index => {
    // spread the items in boardSquare to new array to make a copy
    const squares = [...boardSquares];
    // check if square has a value
    if (squares[index]) return;
    // add next turn
    squares[index] = isXPlayer ? 'X' : 'O';

    // set the new state of the board squares
    setBoardSquares(squares);

    // change the state for the next turn
    dispatch('setXPlayer');
  };

  let gameStatus;
  const winner = findWinner(boardSquares);
  gameStatus = winner
    ? `Winner is ${winner}!`
    : `It is${isXPlayer ? 'X' : 'O'}'s Turn...'`;

  return (
    <div className="board">
      <h2 className={gameStatus}>{gameStatus}</h2>
      <div className="boardRow">
        {boardSquares.map((square, index) => (
          <Square
            id={index}
            value={boardSquares[index]}
            onClick={() => whenClicked(index)}
          />
        ))}
      </div>
    </div>
  );
}

// function to determine winner
const findWinner = squares => {
  // winning combinations

  const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < winningCombos.length; i++) {
    // destructure winningCombos[i] array
    const [a, b, c] = winningCombos[i];
    // returning x or o if squares match
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  // else return null
  return null;
};

export default Board;
