import { useState } from "react";

const TicTacToe = () => {
  const [board, setBoard] = useState(Array(9).fill(null)); // useState to manage the game board
  const [isXTurn, setIsXTurn] = useState(true); // useState to track whose turn it is (x or o)
  const [winner, setWinner] = useState(""); // useState to track the winner

  // board representing the 3x3 grid
  const renderSquare = (index) => {
    return (
      <button onClick={() => handleClick(index)} className="square">
        {board[index]}
      </button>
    );
  };

  const handleClick = (index) => {
    // prevent clicking on already filled squares or if there's a winner
    if (board[index] != null || winner) {
      return;
    }

    const newBoard = [...board];
    newBoard[index] = isXTurn ? "x" : "o";
    setBoard(newBoard);
    setIsXTurn(!isXTurn);

    const winnerCombination = checkWinner(newBoard);
    if (winnerCombination) {
      setWinner(newBoard[winnerCombination[0]]);
    }
  };

  // checkWinner function to determine if there's a winner
  const checkWinner = (board) => {
    const combination = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < combination.length; i++) {
      const [a, b, c] = combination[i];
      if (board[a] && board[a] === board[b] && board[b] === board[c]) {
        return combination[i];
      }
    }
    return null;
  };

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setIsXTurn(true);
    setWinner("");
  };

  return (
    <>
      <h1 className="heading">tic tac toe game</h1>
      <div className="board">
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
      {/* centered winner announcement and reset button */}
      <div className="reset-container">
        {winner && (
          <div className="winner">{winner} is the winner of this game!</div>
        )}
        <button onClick={resetGame} className="reset-button">
          reset Game
        </button>
      </div>
    </>
  );
};

export default TicTacToe;
