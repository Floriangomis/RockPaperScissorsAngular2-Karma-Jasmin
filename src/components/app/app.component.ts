import { Component, OnInit, ViewChild } from '@angular/core';
import { ScoreComponent } from '../scoreBoardComponent/score-board.component';
import { GameComponent } from '../gameBoardComponent/game-board.component';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

    @ViewChild(ScoreComponent) scoreBoard: ScoreComponent;
    @ViewChild(GameComponent) gameComponent: GameComponent;

    constructor() { }

    ngOnInit() { }

    handleResetGame(): void {
        this.scoreBoard.reset();
        this.gameComponent.reset();
    }

    handleResult(result: Number): void {
        this.scoreBoard.checkResult(result);
    }

}
