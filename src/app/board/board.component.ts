import { Component } from '@angular/core';
import { BusinessLogicService } from '../shared/business-logic.service';
import { UtilityService } from '../shared/utility.service';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css'],
})
export class BoardComponent {
  cells: String[] = [];
  constructor(
    private logicService: BusinessLogicService,
    private utility: UtilityService
  ) {}

  ngOnInit() {
    this.getCells();

    this.logicService.gameReset.subscribe(() => {
      this.getCells();
    });

    this.logicService.boardChanged.subscribe(() => {
      this.getCells();
    });
  }

  getCells() {
    this.cells = this.utility.boardToCells();
  }
}
