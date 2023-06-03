import { Injectable } from '@angular/core';
import { BusinessLogicService } from './business-logic.service';

@Injectable()
export class UtilityService {
  constructor(private logicService: BusinessLogicService) {}

  getColor() {
    switch (this.logicService.currentPlayer) {
      case 1:
        return 'green';
        break;
      case 2:
        return 'blue';
        break;
      default:
        return 'purple';
    }
  }

  getContent() {
    switch (this.logicService.currentPlayer) {
      case 1:
        return 'X';
        break;
      case 2:
        return 'O';
        break;
      default:
        return '';
    }
  }

  //   getEmptyBoard() {
  //     return [
  //       ['', '', ''],
  //       ['', '', ''],
  //       ['', '', ''],
  //     ];
  //   }

  boardToCells() {
    let cells = [];

    for (let i = 0; i < this.logicService.board.length; i++) {
      for (let i2 = 0; i2 < this.logicService.board[i].length; i2++) {
        cells.push(this.logicService.board[i][i2]);
      }
    }
    return [...cells];
  }

  getCoordsByIndex(index: number) {
    let x = index % 3;
    let y = Math.floor(index / 3);

    return { y, x };
  }
}
