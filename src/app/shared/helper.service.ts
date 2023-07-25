export class HelperService {
  getRandom(min: number, max: number): number {
    const floatRandom = Math.random();

    const difference = max - min;

    // random between 0 and the difference
    const random = Math.round(difference * floatRandom);

    const randomWithinRange = random + min;

    return randomWithinRange;
  }

  getEmptyBoard() {
    return [
      [' ', ' ', ' '],
      [' ', ' ', ' '],
      [' ', ' ', ' '],
    ];
  }

  isWinner(board: string[][], currentPlayer: string) {
    //Vertical
    if (
      (board[0][0] === currentPlayer &&
        board[1][0] === currentPlayer &&
        board[2][0] === currentPlayer) ||
      (board[0][1] === currentPlayer &&
        board[1][1] === currentPlayer &&
        board[2][1] === currentPlayer) ||
      (board[0][2] === currentPlayer &&
        board[1][2] === currentPlayer &&
        board[2][2] === currentPlayer)
    )
      return true;

    //Horizontal
    if (
      (board[0][0] === currentPlayer &&
        board[0][1] === currentPlayer &&
        board[0][2] === currentPlayer) ||
      (board[1][0] === currentPlayer &&
        board[1][1] === currentPlayer &&
        board[1][2] === currentPlayer) ||
      (board[2][0] === currentPlayer &&
        board[2][1] === currentPlayer &&
        board[2][2] === currentPlayer)
    )
      return true;

    //Diagonal
    if (
      (board[0][0] === currentPlayer &&
        board[1][1] === currentPlayer &&
        board[2][2] === currentPlayer) ||
      (board[2][0] === currentPlayer &&
        board[1][1] === currentPlayer &&
        board[0][2] === currentPlayer)
    )
      return true;

    return false;
  }

  isDraw(board: string[][]) {
    for (let y = 0; y < board.length; y++) {
      for (let x = 0; x < board[y].length; x++) {
        if (board[y][x] === ' ') return false;
      }
    }

    return true;
  }
}
