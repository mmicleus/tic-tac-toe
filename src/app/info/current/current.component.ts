import { Component } from '@angular/core';
import { BusinessLogicService } from 'src/app/shared/business-logic.service';

@Component({
  selector: 'app-current',
  templateUrl: './current.component.html',
  styleUrls: ['./current.component.css'],
})
export class CurrentComponent {
  currentPlayer: number = 0;

  constructor(private logicService: BusinessLogicService) {}

  ngOnInit() {
    this.currentPlayer = this.logicService.currentPlayer;

    this.logicService.playerChanged.subscribe((currentPlayer) => {
      this.currentPlayer = currentPlayer;
    });
  }
}
