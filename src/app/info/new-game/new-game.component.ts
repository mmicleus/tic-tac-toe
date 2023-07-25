import { Component } from '@angular/core';
import { BusinessLogicService } from 'src/app/shared/business-logic.service';

@Component({
  selector: 'app-new-game',
  templateUrl: './new-game.component.html',
  styleUrls: ['./new-game.component.css'],
})
export class NewGameComponent {
  constructor(private logicService: BusinessLogicService) {}

  btnPressed() {
    this.logicService.onResetPressed();
  }
}
