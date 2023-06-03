import { Component } from '@angular/core';
import { BusinessLogicService } from 'src/app/shared/business-logic.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css'],
})
export class MessageComponent {
  active: boolean = false;
  winner: number = 0;
  isDraw: boolean = false;

  constructor(private logicService: BusinessLogicService) {
    logicService.gameReset.subscribe(() => {
      this.active = false;
    });

    logicService.gameOver.subscribe((data) => {
      this.winner = data.player;
      this.isDraw = data.isDraw;
      this.active = true;
    });
  }
}
