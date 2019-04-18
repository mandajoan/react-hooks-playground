import React, {useState} from 'react';
//useState allows functional components to have state
import ReactDOM from 'react-dom';
import './index.css';

//Starter Code:
//https://codepen.io/gaearon/pen/oWWQNa 

//destructuring props here
const Square = ({value, onClick }) =>  {
    //value and function to trigger state change -- initial state is null
    //onClick calls setValue() and updates state
      return (
        <button onClick={onClick} className="square">
          { value }
        </button>
      );
  }

const Board = () => {
    //shortcut array method to create an array of 9 nulls
    const [ squares, setSquares ] = useState(Array(9).fill(null))
    //use HOC to toggle between x & o
    const [isXNext, setXNext] = useState(true)
    //the squares component doesn't need to be aware of the value of other squares
    //so we keep all logic here (vs passing in more info via props)
    const renderSquare = (i) => {
        return <Square value={squares[i]} 
        onClick={() => {
        //make a copy of array to update state
        const nextSquares = squares.slice()
        nextSquares[i] = isXNext ? 'x' : 'o'
        setXNext(!isXNext)
        setSquares(nextSquares) }}
        number={i}/>
    }
    const status = 'Next player: X';
     return (
        <div>
          <div className="status">{status}</div>
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
    );
    
}
  
const Game = () => {
    return (
        <div className="game">
          <div className="game-board">
            <Board />
          </div>
          <div className="game-info">
            <div>{/* status */}</div>
            <ol>{/* TODO */}</ol>
          </div>
        </div>
    );
}
  
  // ========================================
  
  ReactDOM.render(
    <Game />,
    document.getElementById('root')
  );
  
