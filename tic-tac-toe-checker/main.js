function isSolved(board) {
  if ((board[0][0] === 1 && board[0][1] === 1 && board[0][2] === 1) ||
      (board[1][0] === 1 && board[1][1] === 1 && board[1][2] === 1) ||
      (board[2][0] === 1 && board[2][1] === 1 && board[2][2] === 1) ||
      (board[0][0] === 1 && board[1][0] === 1 && board[2][0] === 1) ||
      (board[0][1] === 1 && board[1][1] === 1 && board[2][1] === 1) ||
      (board[0][2] === 1 && board[1][2] === 1 && board[2][2] === 1) ||
      (board[0][0] === 1 && board[1][1] === 1 && board[2][2] === 1) ||
      (board[0][2] === 1 && board[1][1] === 1 && board[2][0] === 1)) {
    return 1
  }
  else if ((board[0][0] === 2 && board[0][1] === 2 && board[0][2] === 2) ||
    (board[1][0] === 2 && board[1][1] === 2 && board[1][2] === 2) ||
    (board[2][0] === 2 && board[2][1] === 2 && board[2][2] === 2) ||
    (board[0][0] === 2 && board[1][0] === 2 && board[2][0] === 2) ||
    (board[0][1] === 2 && board[1][1] === 2 && board[2][1] === 2) ||
    (board[0][2] === 2 && board[1][2] === 2 && board[2][2] === 2) ||
    (board[0][0] === 2 && board[1][1] === 2 && board[2][2] === 2) ||
    (board[0][2] === 2 && board[1][1] === 2 && board[2][0] === 2)) {
    return 2
  }
  else {
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (board[i][j] === 0) {
          return -1
        }
      }
    }
    return 0
  }
}
