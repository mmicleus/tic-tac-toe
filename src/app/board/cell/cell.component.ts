import { Component, Input, OnInit } from '@angular/core';
import { BusinessLogicService } from 'src/app/shared/business-logic.service';
import { UtilityService } from 'src/app/shared/utility.service';

@Component({
  selector: 'app-cell',
  templateUrl: './cell.component.html',
  styleUrls: ['./cell.component.css'],
})
export class CellComponent implements OnInit {
  @Input() content: String = ' ';
  @Input() index: number = 0;
  color: string = '';

  constructor(
    private utility: UtilityService,
    private logicService: BusinessLogicService
  ) {}

  ngOnInit() {
    this.color = 'purple';
    // this.content = ' ';
  }

  onClick() {
    let coords = this.utility.getCoordsByIndex(this.index);
    this.logicService.cellClicked(coords);
    // this.color = this.utility.getColor();
    // this.content = this.utility.getContent();
  }
}
