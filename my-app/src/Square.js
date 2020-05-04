import React from 'react';

function Square(props) {
  return (
    <div className="boardSquare" key={props.id} onClick={props.onClick}>
      {props.value}
    </div>
  );
}

export default Square
