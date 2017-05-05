import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './components/app/app.component';
import { ScoreComponent } from './components/scoreBoardComponent/score-board.component';
import { HandPlayerComponent } from './components/handPlayerComponent/hand-player.component';
import { HandAiComponent } from './components/handAiComponent/hand-ai.component';
import { GameComponent, ElementToPictureTransform } from './components/gameBoardComponent/game-board.component';

@NgModule({
  declarations: [
    AppComponent,
    ScoreComponent,
    GameComponent,
    HandPlayerComponent,
    HandAiComponent,
    ElementToPictureTransform
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
