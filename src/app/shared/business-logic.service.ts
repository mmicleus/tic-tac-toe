import { Subject } from 'rxjs';
import { UtilityService } from './utility.service';
import { OnInit, Injectable } from '@angular/core';
import { HelperService } from './helper.service';

@Injectable()
export class BusinessLogicService implements OnInit {
  constructor(private helper: HelperService) {
    this.reset();
  }

  ngOnInit() {}

  board = [
    [' ', ' ', ' '],
    [' ', ' ', ' '],
    [' ', ' ', ' '],
  ];

  currentPlayer: number = 1;
  gameReset = new Subject<void>();
  boardChanged = new Subject<void>();
  playerChanged = new Subject<number>();
  gameOver = new Subject<{ player: number; isDraw: boolean }>();
  isGameOver = false;

  reset() {
    this.isGameOver = false;
    this.board = this.helper.getEmptyBoard();
    this.currentPlayer = this.helper.getRandom(1, 2);
    this.gameReset.next();
    this.playerChanged.next(this.currentPlayer);
  }

  onResetPressed() {
    this.reset();
  }

  isValidInput(coords: { y: number; x: number }): boolean {
    if (this.board[coords.y][coords.x] != ' ') return false;

    if (this.isGameOver) return false;

    return true;
  }

  cellClicked(coords: { y: number; x: number }) {
    if (!this.isValidInput(coords)) return;

    this.board[coords.y][coords.x] = this.currentPlayer === 1 ? 'x' : 'o';
    this.boardChanged.next();

    if (
      this.helper.isWinner(this.board, this.currentPlayer === 1 ? 'x' : 'o')
    ) {
      this.gameOver.next({ player: this.currentPlayer, isDraw: false });
      this.isGameOver = true;
      return;
    }

    if (this.helper.isDraw(this.board)) {
      this.gameOver.next({ player: this.currentPlayer, isDraw: true });
      this.isGameOver = true;
      return;
    }

    this.currentPlayer = this.currentPlayer === 1 ? 2 : 1;
    this.playerChanged.next(this.currentPlayer);
  }
}
