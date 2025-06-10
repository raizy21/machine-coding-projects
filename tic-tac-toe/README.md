# tic tac toe

this tic tac toe game is a classic two-player game implemented using react.
the game board consists of a 3x3 grid where players take turns placing their markers, either "x" or "o".
the objective is to be the first to form a line of three markers horizontally, vertically, or diagonally.

key features:

- state management:
- the game uses the useState hook to manage the game state, including the current board configuration, whose turn it is, and whether there is a winner.

- rendering squares: each square on the board is rendered as a button.
  - clicking a button updates the board state with the current player's marker.
- winner Check:

  - after each move, the game checks for a winning combination using the checkWinner function.
  - if a player wins, their name is displayed below the board.

- reset functionality:
  - a reset button allows players to clear the board and start a new game at any time.

how it works:

1. initial state:

   - the board is initialized as an array of null values, indicating empty squares.
   - the first player is set to "x".

2. handling clicks:

   - when a square is clicked, the handleClick function is called.
   - it checks if the square is already filled or if there is a winner.
   - if not, it updates the board and switches turns.

3. winner announcement:

   - the game checks for a winner after each move.
   - if a player wins, their name is displayed, and they can choose to reset the game.
   - this implementation provides a simple and engaging way to play tic tac toe, showcasing the use of react for state management and user interaction.
