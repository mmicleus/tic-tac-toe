import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { InfoComponent } from './info/info.component';
import { CurrentComponent } from './info/current/current.component';
import { NewGameComponent } from './info/new-game/new-game.component';
import { MessageComponent } from './info/message/message.component';
import { BoardComponent } from './board/board.component';
import { CellComponent } from './board/cell/cell.component';
import { BusinessLogicService } from './shared/business-logic.service';
import { UtilityService } from './shared/utility.service';
import { HelperService } from './shared/helper.service';

@NgModule({
  declarations: [
    AppComponent,
    InfoComponent,
    CurrentComponent,
    NewGameComponent,
    MessageComponent,
    BoardComponent,
    CellComponent,
  ],
  imports: [BrowserModule],
  providers: [BusinessLogicService, UtilityService, HelperService],
  bootstrap: [AppComponent],
})
export class AppModule {}
